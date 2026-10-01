/* Lesson pager (Lesson Revamp Playbook, 2026-09-29): a lesson as pages that move left to right, one idea each.
   One slim header, a slim side panel (page numbers, short labels, green checks) that collapses to a thin strip and
   opens and closes with one button, Continue at the end of every page, and no footer.

   In a page:   <body data-pager data-course="Fundamentals of DC" data-num="04" data-title="Voltage">
                  <section class="section pgr-page" data-beat="Short label" id="page-id"> ... </section> ...
                <link rel="stylesheet" href="/core/lesson-pager.css"> <script src="/core/lesson-pager.js"></script>
   Page attributes (all optional):
     data-lp-next="Label"      the Continue button's words
     data-lp-gate="event"      Continue stays hidden until this event (bubbling) fires inside the page
     data-lp-skip="Words"      adds a skip link beside the hidden Continue, e.g. "Skip for now"
   Every page must be a section[data-beat][id]: /core/lesson-flow.js (read marks, completion) and the hangar's own
   lesson bar (its list of sections, which scrolls a page into view) read that same markup. A page that is not
   showing stays in the document, out of sight, and answers scrollIntoView() by opening itself, so both keep working.
   API: window.AeroLessonPager = { go(idOrIndex), next(), prev(), current(), pages(), unlock(id) }.
   Events on document: 'lp:page' (detail: { id, index, total }); on the page: 'lp:enter' and 'lp:leave'.

   Current's approved rebuild opts in with <html data-lesson-mode="paged">. All section[data-beat][id]
   become pages, data-page-label supplies short labels, and a contained [data-lecture] supplies the only
   forward gate. Its real lecture:ended event is relayed as aero:lecture-ended; skip and ended produce
   separate AeroLesson interaction records. Reading progress remains the responsibility of lesson-flow.
   This mode also exposes AeroPager { go, next, back, index, pages, openMenu, closeMenu } and aero:page.
   Set <html data-page-menu="none"> to omit the lesson-owned panel and its toggle when the course owns navigation.
   Include lesson-flow.js before the existing runtime, and this script after the lesson's own scripts. */
(function (w) {
  'use strict';
  if (w.AeroLessonPager) return;
  var d = w.document;
  // New rebuilds opt in on html; retain the shipped Voltage/Resistance body contract.
  var paged = d.documentElement.getAttribute('data-lesson-mode') === 'paged';
  // Inside the course player or the hangar the host already lists this lesson's pages, so the lesson adds no page list or menu button of its own.
  var pageMenu = d.documentElement.getAttribute('data-page-menu') !== 'none' && !hosted();
  w.__aeroChunked = true; // the older Continue-chunks layer (lesson-chunks.js) has nothing to do on a paged lesson

  var pages = [], panel, items = [], stage, head, countEl, barEl, menuBtn, scrim;
  var cur = -1, unlocked = {};
  var store = { get: function (k) { try { return w.localStorage.getItem(k); } catch (e) { return null; } },
                set: function (k, v) { try { w.localStorage.setItem(k, v); } catch (e) { /* private window */ } } };
  var PKEY = 'aero-page:' + w.location.pathname, SKEY = 'aero-pgr-panel';
  var EKEY = 'aero-lecture-ended:' + w.location.pathname;
  if (paged) { try { unlocked = JSON.parse(store.get(EKEY) || '{}') || {}; } catch (e) { /* invalid saved data */ } }
  var reduce = w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var phone = function () { return w.matchMedia('(max-width: 720px)').matches; };
  var far = { top: 1e9, bottom: 1e9, left: 0, right: 0, width: 0, height: 0, x: 0, y: 1e9 };
  var realRect = Element.prototype.getBoundingClientRect;

  function el(tag, cls, html) { var e = d.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; }
  var ICON_MENU = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';

  function idx(idOrIndex) {
    if (typeof idOrIndex === 'number') return idOrIndex;
    for (var i = 0; i < pages.length; i++) if (pages[i].id === idOrIndex) return i;
    return -1;
  }
  function seen(i) {
    var f = w.AeroLessonFlow;
    return !!(f && f.seen(pages[i].id));
  }
  function label(pg) { return pg.getAttribute('data-page-label') || pg.getAttribute('data-beat') || pg.id; }
  function lecture(pg) { return !!(pg && (pg.hasAttribute('data-lecture') || pg.querySelector('[data-lecture]'))); }
  function record(pg, kind) {
    if (w.AeroLesson && w.AeroLesson.interaction) w.AeroLesson.interaction({ id: 'lecture-' + pg.id, kind: kind });
  }

  // ---------- build ----------
  function build() {
    var b = d.body;
    // (a header.pgr-page counts too: /core/lesson-autopager.js makes the hero of an older lesson its first page)
    pages = [].slice.call(d.querySelectorAll(paged ? 'section[data-beat][id]' : 'section.pgr-page[data-beat][id], header.pgr-page[data-beat][id]'));
    if (pages.length < 2) return false;
    if (paged) pages.forEach(function (pg) { pg.classList.add('pgr-page'); });
    d.documentElement.classList.add('pgr-on');

    head = el('header', 'pgr-head');
    head.id = 'lpHead';
    if (pageMenu) {
      menuBtn = el('button', 'pgr-menu', ICON_MENU);
      menuBtn.type = 'button';
      menuBtn.setAttribute('aria-label', 'Show or hide the page list');
      menuBtn.setAttribute('aria-controls', 'lpPanel');
      head.append(menuBtn);
    }
    var ident = el('div', 'pgr-ident');
    ident.innerHTML = '<span class="n"></span><span class="t"></span>';
    ident.querySelector('.n').textContent = (b.dataset.num ? b.dataset.num + ' · ' : '') + (b.dataset.course || '');
    ident.querySelector('.t').textContent = b.dataset.title || d.title;
    countEl = el('div', 'pgr-count');
    countEl.setAttribute('aria-live', 'polite');
    barEl = el('div', 'pgr-bar', '<i></i>');
    head.append(ident, countEl, barEl);

    var shell = el('div', 'pgr-shell');
    if (pageMenu) {
      panel = el('aside', 'pgr-panel');
      panel.id = 'lpPanel';
      panel.setAttribute('aria-label', 'Pages in this lesson');
      var ol = el('ol');
      pages.forEach(function (pg, i) {
        var li = el('li');
        var bt = el('button', 'pgr-item', '<span class="num"><span>' + (i + 1) + '</span></span><span class="lab"></span>');
        bt.type = 'button';
        bt.querySelector('.lab').textContent = label(pg);
        bt.title = (i + 1) + '. ' + label(pg);
        bt.addEventListener('click', function () { go(i); if (phone()) setPanel(true); });
        li.append(bt); ol.append(li); items.push(bt);
      });
      panel.append(ol);
      scrim = el('div', 'pgr-scrim');
      scrim.addEventListener('click', function () { setPanel(true); });
      shell.append(panel, scrim);
    }
    stage = el(paged && pages[0].closest('main') ? 'div' : 'main', 'pgr-stage');
    stage.id = 'lpStage';

    // lift the pages into the stage, in place of where the first one was; leave anything else in the body alone
    pages[0].parentNode.insertBefore(shell, pages[0]);
    pages.forEach(function (pg) { stage.append(pg); });
    shell.append(stage);
    if (paged) b.insertBefore(head, b.firstChild);
    else b.insertBefore(head, shell);

    pages.forEach(function (pg, i) {
      pg.setAttribute('inert', '');
      pg.setAttribute('aria-hidden', 'true');
      if (paged) pg.hidden = true;
      else pg.getBoundingClientRect = function () { return this.classList.contains('is-current') ? realRect.call(this) : far; };
      pg.scrollIntoView = function () { go(i); };
      addNav(pg, i);
    });
    if (menuBtn) menuBtn.addEventListener('click', function () { setPanel(!panel.classList.contains('is-closed')); });
    if (hosted()) d.documentElement.classList.add('pgr-hosted');
    setPanel(initialClosed());
    return true;
  }

  function initialClosed() {
    if (phone() || hosted()) return true; // inside the course player or the hangar, the host has its own side menu

    var saved = store.get(SKEY);
    if (saved === 'open') return false;
    if (saved === 'closed') return true;
    return w.innerWidth < 1000; // a narrow frame starts on the thin strip
  }
  function hosted() { try { return w.self !== w.top; } catch (e) { return true; } }
  function setPanel(closed) {
    if (!panel) return;
    panel.classList.toggle('is-closed', closed);
    menuBtn.setAttribute('aria-expanded', closed ? 'false' : 'true');
    if (!phone() && !hosted()) store.set(SKEY, closed ? 'closed' : 'open');
  }

  function addNav(pg, i) {
    var last = i === pages.length - 1;
    var host = pg.querySelector(':scope > .wrap') || pg;
    var nav = el('div', 'pgr-nav');
    if (!last) {
      var next = el('button', 'pgr-next', (pg.dataset.lpNext || 'Continue') + ' <span aria-hidden="true">&rarr;</span>');
      next.type = 'button';
      next.addEventListener('click', nextPage);
      nav.append(next);
      // Practice remains optional. Only the opening lecture's forward button waits for its end event.
      var gate = paged ? (lecture(pg) ? 'aero:lecture-ended' : null) : pg.dataset.lpGate;
      if (gate && !unlocked[pg.id]) {
        next.hidden = true;
        if (!paged) pg.addEventListener(gate, function () { unlock(pg.id); });
        if (paged || pg.dataset.lpSkip) {
          var skip = el('button', 'pgr-skip', '');
          skip.type = 'button';
          skip.textContent = pg.dataset.lpSkip || 'Skip for now';
          skip.addEventListener('click', function () { if (paged) record(pg, 'skipped'); go(i + 1); });
          skip.dataset.lpSkipBtn = '';
          nav.append(skip);
        }
      }
    }
    if (i > 0) {
      var back = el('button', 'pgr-back', 'Back');
      back.type = 'button';
      back.addEventListener('click', prev);
      nav.append(back);
    }
    host.append(nav);
    pg._lpNav = nav;
  }

  function unlock(id) {
    unlocked[id] = true;
    var pg = d.getElementById(id);
    if (!pg || !pg._lpNav) return;
    var n = pg._lpNav.querySelector('.pgr-next');
    if (n) n.hidden = false;
    var s = pg._lpNav.querySelector('[data-lp-skip-btn]');
    if (s) s.hidden = true;
  }

  function lectureEnded(e) {
    if (!paged) return;
    var target = e.target && e.target.closest ? e.target.closest('section[data-beat][id]') : null;
    var id = target && target.id || (e.detail && e.detail.id);
    var i = id ? idx(id) : cur;
    var pg = pages[i];
    if (!lecture(pg) || unlocked[pg.id]) return;
    unlock(pg.id);
    store.set(EKEY, JSON.stringify(unlocked));
    record(pg, 'ended');
    if (e.type === 'lecture:ended') d.dispatchEvent(new CustomEvent('aero:lecture-ended', { detail: { id: pg.id } }));
  }

  // ---------- moving ----------
  function pauseIn(pg) {
    [].forEach.call(pg.querySelectorAll('video, audio'), function (m) { try { m.pause(); } catch (e) { /* */ } });
    [].forEach.call(pg.querySelectorAll('[data-lecture]'), function (h) { try { if (h.lecturePlayer) h.lecturePlayer.pause(); } catch (e) { /* */ } });
  }
  function go(target, opts) {
    var i = idx(target);
    if (i < 0 || i >= pages.length || i === cur) return;
    opts = opts || {};
    var dir = i < cur ? 'back' : 'fwd';
    if (cur >= 0) {
      var old = pages[cur];
      pauseIn(old);
      old.classList.remove('is-current');
      if (paged) old.hidden = true;
      old.setAttribute('inert', ''); old.setAttribute('aria-hidden', 'true');
      old.dispatchEvent(new CustomEvent('lp:leave', { bubbles: true }));
    }
    var pg = pages[i];
    cur = i;
    stage.classList.toggle('is-back', dir === 'back' && !reduce);
    pg.classList.add('is-current');
    if (paged) pg.hidden = false;
    pg.removeAttribute('inert'); pg.removeAttribute('aria-hidden');
    w.scrollTo(0, 0);
    if (!opts.quiet) { pg.setAttribute('tabindex', '-1'); try { pg.focus({ preventScroll: true }); } catch (e) { /* */ } }
    paint();
    store.set(PKEY, String(i));
    try { w.history.replaceState(null, '', '#' + pg.id); } catch (e) { /* a sandboxed frame */ }
    pg.dispatchEvent(new CustomEvent('lp:enter', { bubbles: true }));
    d.dispatchEvent(new CustomEvent('lp:page', { detail: { id: pg.id, index: i, total: pages.length } }));
    if (paged) d.dispatchEvent(new CustomEvent('aero:page', { detail: { id: pg.id, index: i, total: pages.length } }));
    // the page's own scroll marks (lesson-flow) look at what is on screen: nudge it once the page has drawn
    // and a canvas or chart that was sized while its page was out of sight gets the size it has now
    setTimeout(function () { w.dispatchEvent(new Event('scroll')); w.dispatchEvent(new Event('resize')); }, 60);
  }
  function nextPage() { if (paged && lecture(pages[cur]) && !unlocked[pages[cur].id]) return; go(cur + 1); }
  function prev() { go(cur - 1); }

  function paint() {
    countEl.innerHTML = 'Page <b>' + (cur + 1) + '</b> / ' + pages.length + ' <span class="lab-short">&middot; ' + escapeHtml(label(pages[cur])) + '</span>';
    barEl.firstChild.style.width = ((cur + 1) / pages.length * 100).toFixed(1) + '%';
    items.forEach(function (bt, i) {
      var on = seen(i);
      bt.classList.toggle('is-seen', on);
      bt.classList.toggle('is-here', i === cur);
      if (i === cur) bt.setAttribute('aria-current', 'page'); else bt.removeAttribute('aria-current');
      bt.setAttribute('aria-label', (i + 1) + '. ' + label(pages[i]) + (on ? ', read' : ''));
    });
  }
  function escapeHtml(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // ---------- start ----------
  function start() {
    if (!d.body || (!paged && !d.body.hasAttribute('data-pager'))) return;
    if (!build()) return;
    var fromHash = idx((w.location.hash || '').slice(1));
    var params = new URLSearchParams(w.location.search);
    var fromQuery = idx(params.get('from') || '');
    var saved = +(store.get(PKEY) || 0);
    var first = fromHash >= 0 ? fromHash : fromQuery >= 0 ? fromQuery : (saved > 0 && saved < pages.length - (paged ? 0 : 1) ? saved : 0);
    go(first, { quiet: true });
    w.addEventListener('hashchange', function () { var i = idx((w.location.hash || '').slice(1)); if (i >= 0 && i !== cur) go(i); });
    d.addEventListener('aero:seen', paint);
    d.addEventListener('aero:complete', paint);
    if (paged) { d.addEventListener('lecture:ended', lectureEnded); d.addEventListener('aero:lecture-ended', lectureEnded); }
    setInterval(paint, 1500);
    d.addEventListener('keydown', function (e) {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var t = e.target;
      if (t && t.closest && t.closest('input, select, textarea, [contenteditable], [role="slider"], [data-lecture], video, audio, dialog')) return;
      if (paged && t && t.closest && t.closest('button, a, summary, [role="button"], [role="tab"], [draggable], [data-rsort], canvas, svg, iframe')) return;
      if (e.key === 'ArrowRight') nextPage(); else prev();
    });
    var wasPhone = phone();
    w.addEventListener('resize', function () { var isPhone = phone(); if (isPhone && (!paged || !wasPhone)) setPanel(true); wasPhone = isPhone; });
    if (paged && panel) d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.classList.contains('is-closed')) { setPanel(true); menuBtn.focus(); } });
  }

  w.AeroLessonPager = {
    go: go, next: nextPage, prev: prev, unlock: unlock,
    current: function () { return cur < 0 ? null : { id: pages[cur].id, index: cur, total: pages.length }; },
    pages: function () { return pages.map(function (p) { return { id: p.id, label: p.getAttribute('data-beat') }; }); }
  };
  if (paged) w.AeroPager = {
    go: go, next: nextPage, back: prev,
    get index() { return cur; },
    pages: function () { return pages.map(function (p) { return { id: p.id, label: label(p), kind: lecture(p) ? 'video' : p.querySelector('#kc, #kcStage') ? 'check' : 'content' }; }); },
    openMenu: function () { setPanel(false); }, closeMenu: function () { setPanel(true); }
  };
  // the page's own scripts (its sims) run before this one; wait for the whole document so every part exists
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', start, { once: true }); else start();
})(window);
