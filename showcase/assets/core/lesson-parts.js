/* Lesson parts (Lesson Revamp Playbook): the interactions the rebuilt lessons share.
   .ask   a question whose feedback pops up over it, with Continue (or Try again)
            <div class="ask" id="x" data-ans="0" data-fb='["feedback for A","for B"]'>
              <div class="ask-k">Label</div><p class="ask-q">Question</p>
              <div class="ask-opts"><button class="ask-opt" data-i="0"><span class="key">A</span><span>Option</span></button> ...</div></div>
   .rsort a sort, one card at a time. Drag the card to a bucket (hold and drop on a phone), press the arrow keys or 1 to 9,
          or tap a bucket. Two buckets sit either side of the card; three sit under it (add class is-three to .rs-arena).
            <div class="rsort" data-cards='[{"t":"Card text","b":"bucketKey","why":"Said when it is right"}]'>
              <p class="rs-count"></p>
              <div class="rs-arena"> <div class="rs-bucket b1" data-bin="a"><h4></h4><p></p><div class="got"></div></div>
                <div class="rs-well"><div class="rs-card" tabindex="0"></div><p class="rs-hint"></p></div>
                <div class="rs-bucket b2" data-bin="b">...</div></div>
              <p class="dmsg"></p><button class="btn rs-reset">Start over</button></div>
   Loads on its own; window.AeroParts = { ask(el), sort(el) } for a lesson that builds one late. */
(function (w) {
  'use strict';
  if (w.AeroParts) return;
  var d = w.document;
  var reduce = w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function note(id, kind, extra) { if (w.AeroLesson && w.AeroLesson.interaction) w.AeroLesson.interaction(Object.assign({ id: id, kind: kind || 'change' }, extra || {})); }

  function ask(box) {
    if (box._askReady) return; box._askReady = true;
    var ans = +box.getAttribute('data-ans'), fbs = [];
    try { fbs = JSON.parse(box.getAttribute('data-fb') || '[]'); } catch (e) { /* no feedback lines */ }
    var pop = d.createElement('div'); pop.className = 'ask-fb'; pop.hidden = true;
    pop.innerHTML = "<div class='ask-v'></div><p></p><div class='ask-acts'></div>";
    box.appendChild(pop);
    box.querySelector('.ask-opts').addEventListener('click', function (e) {
      var b = e.target.closest('.ask-opt'); if (!b || box.classList.contains('is-done')) return;
      var i = +b.getAttribute('data-i'), ok = i === ans;
      pop.className = 'ask-fb' + (ok ? '' : ' miss'); pop.hidden = false;
      pop.querySelector('.ask-v').textContent = ok ? 'Correct' : 'Not quite';
      pop.querySelector('p').textContent = fbs[i] || (ok ? 'Right.' : 'Try again.');
      var acts = pop.querySelector('.ask-acts'); acts.innerHTML = '';
      var btn = d.createElement('button'); btn.type = 'button'; btn.className = 'btn active';
      btn.textContent = ok ? 'Continue' : 'Try again';
      btn.addEventListener('click', function () {
        pop.hidden = true;
        if (ok) {
          box.classList.add('is-done');
          [].forEach.call(box.querySelectorAll('.ask-opt'), function (o) { o.disabled = true; if (+o.getAttribute('data-i') === ans) o.classList.add('is-key'); });
        }
      });
      acts.appendChild(btn); btn.focus();
      note('ask-' + box.id, 'answer', { response: String(i), correct: ok });
      box.dispatchEvent(new CustomEvent('ask:answer', { bubbles: true, detail: { id: box.id, index: i, ok: ok } }));
    });
  }

  function sort(root) {
    if (root._sortReady) return; root._sortReady = true;
    var CARDS = []; try { CARDS = JSON.parse(root.getAttribute('data-cards') || '[]'); } catch (e) { /* none */ }
    var arena = root.querySelector('.rs-arena'), card = root.querySelector('.rs-card'), msg = root.querySelector('.dmsg'),
        count = root.querySelector('.rs-count'), hint = root.querySelector('.rs-hint');
    var buckets = {}, keys = [];
    [].forEach.call(root.querySelectorAll('.rs-bucket'), function (b) { var k = b.getAttribute('data-bin'); buckets[k] = b; keys.push(k); });
    var idx = 0, busy = false, drag = null;
    var start = msg.textContent;
    // A phone held upright stacks the buckets under the card; turned sideways they sit beside it and the
    // card is easier to drop (Nick, 2026-09-30). A short note says so. The stylesheet shows it only on a
    // touch screen in portrait (.rs-tilt in lesson-parts.css), and it goes once every card is sorted.
    var tilt = root.querySelector('.rs-tilt');
    if (!tilt) {
      tilt = d.createElement('p'); tilt.className = 'rs-tilt';
      tilt.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="8" width="10" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/>'
        + '<path d="M9.5 4.2a8.5 8.5 0 0 1 10 8.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
        + '<path d="M17.2 10.6l2.3 2.3 2.2-2.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        + '<span>Tip: turn your phone sideways to make dragging easier.</span>';
      var at = count && count.parentNode ? count : arena;
      at.parentNode.insertBefore(tilt, at === count ? count.nextSibling : arena);
    }
    function show() {
      card.style.transition = 'none'; card.style.transform = ''; card.style.opacity = '';
      tilt.hidden = idx >= CARDS.length;
      if (idx >= CARDS.length) { card.hidden = true; hint.hidden = true; count.textContent = 'All ' + CARDS.length + ' sorted'; return; }
      card.hidden = false; hint.hidden = false; card.textContent = CARDS[idx].t; count.textContent = 'Card ' + (idx + 1) + ' of ' + CARDS.length; busy = false;
    }
    function reset() {
      idx = 0; [].forEach.call(arena.querySelectorAll('.got'), function (g) { g.innerHTML = ''; });
      msg.className = 'dmsg'; msg.textContent = start; show();
    }
    function back() {
      card.style.transition = 'transform .25s cubic-bezier(.2,.9,.3,1.2)'; card.style.transform = '';
      busy = true; setTimeout(function () { card.style.transition = 'none'; busy = false; }, 260);
    }
    function decide(bin) {
      if (busy || idx >= CARDS.length) return;
      var c = CARDS[idx], bk = buckets[bin];
      if (c.b !== bin) {
        bk.classList.remove('is-wrong'); void bk.offsetWidth; bk.classList.add('is-wrong');
        setTimeout(function () { bk.classList.remove('is-wrong'); }, 450);
        msg.className = 'dmsg'; msg.textContent = c.no || root.getAttribute('data-no') || 'Not that bucket. Try again.';
        back(); return;
      }
      busy = true;
      var cr = card.getBoundingClientRect(), br = bk.getBoundingClientRect();
      var dx = (br.left + br.width / 2) - (cr.left + cr.width / 2), dy = (br.top + br.height / 2) - (cr.top + cr.height / 2);
      card.style.transition = reduce ? 'none' : 'transform .22s ease-in, opacity .22s ease-in';
      card.style.transform = 'translate(' + dx + 'px,' + dy + 'px) scale(.35)'; card.style.opacity = '0';
      setTimeout(function () {
        var s = d.createElement('span'); s.textContent = c.t; bk.querySelector('.got').appendChild(s);
        idx++; msg.className = 'dmsg ok';
        msg.textContent = idx === CARDS.length ? (root.getAttribute('data-done') || '') + ' ' + c.why : c.why;
        show(); note('sort-place');
      }, reduce ? 0 : 230);
    }
    function overBucket(x, y) {
      // the dragged card is under the pointer, so look through everything stacked there
      var list = d.elementsFromPoint(x, y);
      for (var i = 0; i < list.length; i++) { var b = list[i].closest && list[i].closest('.rs-bucket'); if (b && root.contains(b)) return b.getAttribute('data-bin'); }
      return null;
    }
    card.addEventListener('pointerdown', function (e) {
      if (busy || (e.pointerType === 'mouse' && e.button !== 0)) return;
      drag = { sx: e.clientX, sy: e.clientY, moved: false, id: e.pointerId };
      try { card.setPointerCapture(e.pointerId); } catch (x) { /* */ }
      card.style.transition = 'none'; card.classList.add('is-held');
    });
    card.addEventListener('pointermove', function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      var dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
      if (!drag.moved && Math.abs(dx) + Math.abs(dy) < 6) return;
      drag.moved = true;
      card.style.transform = 'translate(' + dx + 'px,' + dy + 'px) rotate(' + Math.max(-8, Math.min(8, dx / 30)) + 'deg)';
      var ob = overBucket(e.clientX, e.clientY);
      keys.forEach(function (k) { buckets[k].classList.toggle('is-over', k === ob); });
    });
    function up(e) {
      if (!drag || e.pointerId !== drag.id) return;
      var dr = drag; card.classList.remove('is-held');
      keys.forEach(function (k) { buckets[k].classList.remove('is-over'); });
      if (!dr.moved) { drag = null; return; }
      var ob = e.type === 'pointercancel' ? null : overBucket(e.clientX, e.clientY);
      if (ob) decide(ob); else back();
      drag = null;
    }
    card.addEventListener('pointerup', up); card.addEventListener('pointercancel', up);
    card.addEventListener('keydown', function (e) {
      var n = +e.key;
      if (e.key === 'ArrowLeft') { e.preventDefault(); decide(keys[0]); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); decide(keys[keys.length - 1]); }
      else if (n >= 1 && n <= keys.length) { e.preventDefault(); decide(keys[n - 1]); }
    });
    keys.forEach(function (k) {
      var z = buckets[k];
      z.addEventListener('click', function () { decide(k); });
      z.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); decide(k); } });
    });
    var rb = root.querySelector('.rs-reset'); if (rb) rb.addEventListener('click', reset);
    show();
  }

  function init() {
    [].forEach.call(d.querySelectorAll('.ask'), ask);
    [].forEach.call(d.querySelectorAll('.rsort'), sort);
  }
  w.AeroParts = { ask: ask, sort: sort };
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})(window);
