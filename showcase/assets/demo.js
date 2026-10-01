/* The parts each CAET lesson carries locally, rebuilt once for the showcase from the best lesson that uses each one.
   Each part starts on its own when its markup is on the page. The shared parts (ask card, one-card sort, pager) are not
   here: they run unchanged from core/.
     .flip                      flip cards (pitot-static, safety-data-sheets)
     .stepper[data-steps]       process stepper (antennas-coax, "Install")
     .rr[data-lookups]          a real document with a lookup desk (certification-checks, "91.411 test")
     .pred[data-rows]           predict, then reveal (blocked-ports, "Airspeed")
     #traceFig                  a path traced on an FAA figure (series-circuits, "One path")
   Data lives in <script type="application/json"> blocks on the page, named by the data- attributes. */
(function () {
  'use strict';
  var d = document;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $(id) { return d.getElementById(id); }
  function data(id) { var s = $(id); if (!s) return null; try { return JSON.parse(s.textContent); } catch (e) { return null; } }
  function each(sel, fn) { [].forEach.call(d.querySelectorAll(sel), fn); }

  /* ---------------- flip cards: answer the front in your head, then turn the card ---------------- */
  each('.flip', function (b) {
    var name = b.getAttribute('data-name') || '';
    var front = b.querySelector('.flip-front'), back = b.querySelector('.flip-back');
    b.addEventListener('click', function () {
      var on = !b.classList.contains('is-flipped');
      b.classList.toggle('is-flipped', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      front.setAttribute('aria-hidden', on ? 'true' : 'false');
      back.setAttribute('aria-hidden', on ? 'false' : 'true');
      b.setAttribute('aria-label', on ? name + '. ' + back.textContent + ' Select to turn the card back.' : name + '. Select to turn the card over.');
    });
  });

  /* ---------------- process stepper: one step at a time, the student sets the pace ---------------- */
  each('.stepper[data-steps]', function (root) {
    var steps = data(root.getAttribute('data-steps')) || [];
    var tabs = [].slice.call(root.querySelectorAll('.st-tab'));
    var k = root.querySelector('.st-k'), h = root.querySelector('.st-title'), t = root.querySelector('.st-t'),
        q = root.querySelector('.acq'), qs = root.querySelector('.st-qs'), fig = root.querySelector('.st-fig'),
        img = fig.querySelector('img'), cr = fig.querySelector('.st-cr'), full = fig.querySelector('.st-full'),
        key = root.querySelector('.st-key'), back = root.querySelector('.st-back'), next = root.querySelector('.st-next'),
        late = d.querySelector(root.getAttribute('data-late') || '#none');
    var n = 0, seen = {};
    function show(i, fromStrip) {
      n = Math.max(0, Math.min(steps.length - 1, i));
      var s = steps[n];
      seen[n] = true;
      tabs.forEach(function (b, j) {
        if (j === n) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
        b.classList.toggle('seen', !!seen[j] && j !== n);
      });
      k.textContent = 'Step ' + (n + 1) + ' of ' + steps.length;
      h.textContent = s.h; t.textContent = s.t;
      q.textContent = '“' + s.q + '”'; qs.textContent = 'Source: ' + s.qs + '.';
      if (s.img) {
        fig.hidden = false; key.hidden = true;
        img.src = s.img; img.width = s.w; img.height = s.hgt; img.alt = s.alt;
        cr.textContent = s.cr; full.href = s.img;
        root.classList.toggle('tall', s.hgt > s.w); root.classList.remove('nofig');
      } else {
        fig.hidden = true; key.hidden = false;
        key.querySelector('.n').textContent = s.key; key.querySelector('.l').textContent = s.keyl;
        root.classList.remove('tall'); root.classList.add('nofig');
      }
      back.disabled = n === 0;
      next.disabled = n === steps.length - 1;
      next.textContent = n === steps.length - 1 ? 'Last step' : 'Next step';
      if (n === steps.length - 1 && late) late.hidden = false;
      if (fromStrip) { try { h.focus({ preventScroll: true }); } catch (e) { /* */ } }
    }
    tabs.forEach(function (b, i) { b.addEventListener('click', function () { show(i, true); }); });
    next.addEventListener('click', function () { show(n + 1); });
    back.addEventListener('click', function () { show(n - 1); });
    show(0);
  });

  /* ---------------- a real document with a lookup desk ---------------- */
  each('.rr[data-lookups]', function (rr) {
    var L = data(rr.getAttribute('data-lookups')) || [];
    var status = rr.querySelector('.rr-status'), task = rr.querySelector('.rr-task'), live = rr.querySelector('.rr-live'),
        nextBtn = rr.querySelector('.rr-next'), dots = [].slice.call(rr.querySelectorAll('.rr-dots li'));
    var ps = [].slice.call(rr.querySelectorAll('.rr-p'));
    var cur = 0, found = false;
    function gloss(p) { return $(p.getAttribute('aria-controls')); }
    function open(p, on) { p.setAttribute('aria-expanded', on ? 'true' : 'false'); gloss(p).hidden = !on; }
    function paint() {
      dots.forEach(function (li, i) { li.className = i < cur || (i === cur && found) ? 'done' : (i === cur ? 'now' : ''); });
      if (cur >= L.length) {
        status.textContent = 'All ' + L.length + ' lookups done';
        task.textContent = 'You found all ' + L.length + '. Select any paragraph to read what it means.';
        nextBtn.hidden = true; return;
      }
      status.textContent = 'Lookup ' + (cur + 1) + ' of ' + L.length;
      task.textContent = L[cur].task;
    }
    ps.forEach(function (p) {
      p.addEventListener('click', function () {
        var id = p.getAttribute('data-p');
        if (cur < L.length && !found) {
          if (id === L[cur].ans) {
            found = true;
            p.classList.add('got');
            var v = gloss(p).querySelector('.rr-v'); v.textContent = 'Found'; v.className = 'rr-v good';
            open(p, true);
            live.className = 'rr-live good'; live.textContent = 'Found. ' + L[cur].why;
            nextBtn.hidden = false; nextBtn.textContent = cur === L.length - 1 ? 'Finish the lookups' : 'Next lookup';
            paint(); return;
          }
          p.classList.remove('miss'); void p.offsetWidth; p.classList.add('miss');
          setTimeout(function () { p.classList.remove('miss'); }, 450);
          live.className = 'rr-live bad'; live.textContent = 'Not that paragraph. ' + L[cur].hint;
          open(p, true);
          return;
        }
        open(p, p.getAttribute('aria-expanded') !== 'true');
      });
    });
    nextBtn.addEventListener('click', function () {
      cur++; found = false; nextBtn.hidden = true; live.textContent = ''; live.className = 'rr-live';
      paint();
      try { task.focus({ preventScroll: false }); } catch (e) { /* */ }
    });
    paint();
  });

  /* ---------------- predict, then reveal: the blocked static system ----------------
     The pressure model is the one in the Blocked Ports lesson: the standard atmosphere gives the outside pressure in inches
     of mercury at a pressure altitude, and the airspeed indicator reads the pitot line minus its case as sea-level airspeed. */
  each('.pred[data-rows]', function (root) {
    var D = data(root.getAttribute('data-rows')) || {};
    var STD = 29.92, INHG = 3386.39, RHO = 1.225, KT = 0.514444;
    function P(pa) { return STD * Math.pow(1 - 6.8756e-6 * pa, 5.2559); }
    function q(kt) { var v = kt * KT; return 0.5 * RHO * v * v / INHG; }
    function ias(dp) { return dp <= 0 ? 0 : Math.sqrt(2 * dp * INHG / RHO) / KT; }
    function pct(p) { return Math.max(2, Math.min(100, (p - 21.0) / 2.2 * 100)); }
    var TRAP = P(D.blockAlt), rows = [].slice.call(root.querySelectorAll('.prow')), pick = {};
    var chk = root.querySelector('.pred-check'), again = root.querySelector('.pred-again'), score = root.querySelector('.pred-score');
    var reveal = d.querySelector(root.getAttribute('data-reveal') || '#none'), verdict = reveal && reveal.querySelector('.verdict');
    var words = { low: 'Low', right: D.speed + ' knots', high: 'High' };
    rows.forEach(function (r) {
      var k = r.getAttribute('data-k');
      [].forEach.call(r.querySelectorAll('.popt'), function (b) {
        b.addEventListener('click', function () {
          if (root.classList.contains('checked')) return;
          pick[k] = b.getAttribute('data-v');
          [].forEach.call(r.querySelectorAll('.popt'), function (x) { var on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
          var left = rows.length - Object.keys(pick).length;
          chk.disabled = left > 0;
          score.textContent = left > 0 ? 'Choose ' + left + ' more.' : 'Ready. Select Check.';
        });
      });
    });
    chk.addEventListener('click', function () {
      var n = 0;
      root.classList.add('checked');
      rows.forEach(function (r) {
        var k = r.getAttribute('data-k'), row = D.rows[k];
        var pp = P(row.alt) + q(D.speed), kt = ias(pp - TRAP);
        var ans = Math.abs(kt - D.speed) < 1 ? 'right' : (kt < D.speed ? 'low' : 'high');
        if (pick[k] === ans) n++;
        [].forEach.call(r.querySelectorAll('.popt'), function (x) { x.disabled = true; if (x.getAttribute('data-v') === ans) x.classList.add('key'); });
        r.querySelector('.pp b').textContent = pp.toFixed(2) + ' in Hg';
        r.querySelector('.pc b').textContent = TRAP.toFixed(2) + ' in Hg';
        var ipp = r.querySelector('.pp i'), ipc = r.querySelector('.pc i');
        ipp.style.width = '0%'; ipc.style.width = '0%';
        setTimeout(function () { ipp.style.width = pct(pp) + '%'; ipc.style.width = pct(TRAP) + '%'; }, reduce ? 0 : 30);
        var out = ans === 'right' ? D.speed + ' knots: right at the blockage altitude.' : 'About ' + Math.round(kt) + ' knots: ' + (ans === 'low' ? 'low' : 'high') + '.';
        r.querySelector('.pread').innerHTML = '<span class="yours">Your prediction: ' + words[pick[k]] + '</span>' + out;
      });
      score.textContent = '';
      chk.hidden = true; again.hidden = false;
      if (reveal) {
        reveal.hidden = false;
        verdict.textContent = n === rows.length ? 'All ' + rows.length + ' of your predictions match.' : n + ' of your ' + rows.length + ' predictions match. Read why below.';
        try { verdict.focus({ preventScroll: false }); } catch (e) { /* */ }
      }
    });
    again.addEventListener('click', function () {
      pick = {}; root.classList.remove('checked'); chk.hidden = false; chk.disabled = true; again.hidden = true;
      score.textContent = 'Choose ' + rows.length + ' predictions.';
      if (reveal) reveal.hidden = true;
      each('.pred .popt', function (x) { x.disabled = false; x.classList.remove('on', 'key'); x.setAttribute('aria-pressed', 'false'); });
      rows.forEach(function (r) { r.querySelector('.pread').textContent = ''; });
    });
    score.textContent = 'Choose ' + rows.length + ' predictions.';
  });

  /* ---------------- a path traced on FAA Figure 12-82: a dot runs the loop twice, about 3 s a lap ---------------- */
  (function trace() {
    var fig = $('traceFig'); if (!fig) return;
    var glow = fig.querySelector('.tr-glow'), core = fig.querySelector('.tr-core'), dot = fig.querySelector('.tr-dot'),
        btn = $('traceBtn'), noteEl = $('traceNote');
    var L = 0, raf = 0, t0 = 0, LAP = 3000, LAPS = 2;
    function len() { if (!L) { try { L = glow.getTotalLength(); } catch (e) { L = 0; } } return L || 1070; }
    function lit(f) { var l = len(); [glow, core].forEach(function (p) { p.style.strokeDasharray = l + ' ' + l; p.style.strokeDashoffset = String(l * (1 - f)); }); }
    function put(f) { var l = len(), pt; try { pt = glow.getPointAtLength(l * f); } catch (e) { return; } dot.setAttribute('cx', pt.x); dot.setAttribute('cy', pt.y); }
    function done() { cancelAnimationFrame(raf); raf = 0; lit(1); put(1); dot.style.opacity = '0'; btn.textContent = 'Trace it again'; noteEl.hidden = false; }
    function tick(now) {
      if (!t0) t0 = now;
      var e = (now - t0) / LAP, lap = Math.floor(e), f = e - lap;
      if (lap >= LAPS) { done(); return; }
      lit(f); put(f);
      raf = requestAnimationFrame(tick);
    }
    function run() {
      if (reduce) { done(); return; }
      cancelAnimationFrame(raf); t0 = 0; dot.style.opacity = '1'; lit(0); put(0);
      raf = requestAnimationFrame(tick);
    }
    lit(0); put(0);
    btn.addEventListener('click', run);
    var page = fig.closest('.pgr-page');
    if (page) page.addEventListener('lp:leave', function () { if (raf) done(); });
  })();
})();
