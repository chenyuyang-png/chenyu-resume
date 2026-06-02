/* =========================================================
   楊宸祐 履歷 — routing · reveal-on-scroll · number roll
   ========================================================= */
(function () {
  'use strict';

  var PAGES = ['home', 'about', 'capabilities', 'journey', 'skills', 'background'];
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('#nav a'));
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- reveal-on-scroll (per active page) ---------- */
  var io = null;
  if ('IntersectionObserver' in window && !reduceMotion) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          maybeCount(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
  }

  function armReveals(pageEl) {
    var els = pageEl.querySelectorAll('.reveal');
    Array.prototype.forEach.call(els, function (el) {
      el.classList.remove('in');
      if (io) { io.observe(el); }
      else { el.classList.add('in'); maybeCount(el); }
    });
  }

  /* ---------- number rolling ---------- */
  function fmt(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function rollOne(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    var target = parseFloat(el.dataset.count || '0');
    var prefix = el.dataset.prefix || '';
    var suffix = el.dataset.suffix || '';
    // keep any inner unit markup (e.g. <span class="unit">萬</span> / <span class="u">萬</span>)
    var unitEl = el.querySelector('.unit, .u');
    var unitHTML = unitEl ? unitEl.outerHTML : '';
    var dur = reduceMotion ? 0 : 1300;
    var start = null;

    function frame(ts) {
      if (start === null) start = ts;
      var p = dur ? Math.min((ts - start) / dur, 1) : 1;
      var eased = 1 - Math.pow(1 - p, 3);
      el.innerHTML = prefix + fmt(target * eased) + suffix + unitHTML;
      if (p < 1) requestAnimationFrame(frame);
      else el.innerHTML = prefix + fmt(target) + suffix + unitHTML;
    }
    requestAnimationFrame(frame);
  }

  function maybeCount(el) {
    var counters = [];
    if (el.matches && el.matches('[data-count]')) counters.push(el);
    Array.prototype.push.apply(counters, el.querySelectorAll('[data-count]'));
    counters.forEach(rollOne);
  }

  /* ---------- routing ---------- */
  function show(page) {
    if (PAGES.indexOf(page) === -1) page = 'home';

    PAGES.forEach(function (p) {
      var sec = document.getElementById('page-' + p);
      if (sec) sec.classList.toggle('active', p === page);
    });
    navLinks.forEach(function (a) {
      a.classList.toggle('active', a.dataset.page === page);
    });

    var active = document.getElementById('page-' + page);
    if (active) {
      // reset any finished counters on this page so re-visits re-animate
      Array.prototype.forEach.call(active.querySelectorAll('[data-count]'), function (c) {
        c.dataset.done = '';
      });
      armReveals(active);
    }
    window.scrollTo(0, 0);
    document.title = '楊宸祐 ｜ ' + ({
      home: '品牌經營者履歷', about: '關於我', capabilities: '核心能力',
      journey: '創辦旅程', skills: '技能', background: '學歷與經歷'
    }[page]);
  }

  function pageFromHash() {
    return (location.hash || '#home').replace('#', '');
  }

  navLinks.forEach(function (a) {
    a.addEventListener('click', function (ev) {
      ev.preventDefault();
      var page = a.dataset.page;
      if (location.hash === '#' + page) { show(page); }
      else { location.hash = page; }
    });
  });

  window.addEventListener('hashchange', function () { show(pageFromHash()); });

  // init
  show(pageFromHash());
})();
