// Jemné zobrazenie sekcií dashboardu pri prvom scrollovaní (fade-in cez IntersectionObserver).
// Bez JavaScriptu sú prvky viditeľné hneď (trieda js na <html> zapína skryté počiatočné stavy).
// Pri prefers-reduced-motion sa nič neanimuje.
"use strict";
(function () {
  var html = document.documentElement;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    return;
  }
  html.classList.add("js");
  function sleduj() {
    var prvky = document.querySelectorAll(".tw-fade:not(.tw-viditelne)");
    if (!prvky.length) { return; }
    var pozorovatel = new IntersectionObserver(function (zaznamy) {
      zaznamy.forEach(function (z) {
        if (z.isIntersecting) {
          z.target.classList.add("tw-viditelne");
          pozorovatel.unobserve(z.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    prvky.forEach(function (p) { pozorovatel.observe(p); });
  }
  // navigation.instant Materialu mení obsah bez načítania stránky, preto document$
  if (window.document$) {
    window.document$.subscribe(sleduj);
  } else {
    document.addEventListener("DOMContentLoaded", sleduj);
  }
})();
