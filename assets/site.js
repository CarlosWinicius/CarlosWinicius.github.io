// Wita — tema claro/escuro e menu móvel
(function () {
  var root = document.documentElement;
  var themeBtn = document.querySelector('[data-theme-toggle]');
  if (themeBtn) {
    var sync = function () {
      var dark = root.getAttribute('data-theme') === 'dark';
      themeBtn.setAttribute('aria-pressed', dark ? 'true' : 'false');
      themeBtn.setAttribute('aria-label', dark ? 'Usar tema claro' : 'Usar tema escuro');
    };
    sync();
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('wita-theme', next); } catch (e) {}
      sync();
    });
  }

  var navBtn = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('site-nav');
  if (navBtn && nav) {
    var close = function () {
      nav.classList.remove('is-open');
      navBtn.setAttribute('aria-expanded', 'false');
    };
    navBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  var year = document.querySelectorAll('[data-year]');
  for (var i = 0; i < year.length; i++) year[i].textContent = new Date().getFullYear();
})();
