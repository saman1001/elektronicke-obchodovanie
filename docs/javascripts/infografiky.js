// Zväčšenie karty infografiky (prvok s data-zoom-card) do prekrytia cez celú obrazovku.
// Klik na kartu alebo Enter na nej otvorí kópiu karty, Esc, tlačidlo alebo klik mimo ju zavrie.
// Bez JavaScriptu ostávajú karty čitateľné priamo v texte.
"use strict";
(function () {
  function zavri(prekrytie, naKlaves) {
    prekrytie.remove();
    document.body.classList.remove("tw-zoom-otvorene");
    document.removeEventListener("keydown", naKlaves);
  }

  function otvor(karta) {
    var prekrytie = document.createElement("div");
    prekrytie.className = "tw-zoom";
    var telo = document.createElement("div");
    telo.className = "tw-zoom__karta md-typeset";
    telo.setAttribute("role", "dialog");
    telo.setAttribute("aria-modal", "true");
    telo.innerHTML = karta.innerHTML;
    var tlacidlo = document.createElement("button");
    tlacidlo.type = "button";
    tlacidlo.className = "tw-zoom__zavriet";
    tlacidlo.textContent = "Zavrieť (Esc)";
    prekrytie.appendChild(telo);
    prekrytie.appendChild(tlacidlo);

    function naKlaves(e) { if (e.key === "Escape") { zavri(prekrytie, naKlaves); karta.focus(); } }
    prekrytie.addEventListener("click", function (e) {
      if (!telo.contains(e.target)) { zavri(prekrytie, naKlaves); karta.focus(); }
    });
    document.addEventListener("keydown", naKlaves);
    document.body.appendChild(prekrytie);
    document.body.classList.add("tw-zoom-otvorene");
    tlacidlo.focus();
  }

  function pripravKarty() {
    document.querySelectorAll("[data-zoom-card]").forEach(function (karta) {
      karta.setAttribute("tabindex", "0");
      karta.setAttribute("role", "button");
    });
  }

  document.addEventListener("click", function (e) {
    var karta = e.target.closest && e.target.closest("[data-zoom-card]");
    if (!karta || e.target.closest("a")) { return; }
    otvor(karta);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter") { return; }
    var karta = e.target.closest && e.target.closest("[data-zoom-card]");
    if (karta && e.target === karta) { e.preventDefault(); otvor(karta); }
  });

  // navigation.instant Materialu mení obsah bez načítania stránky, preto document$
  if (window.document$) {
    window.document$.subscribe(pripravKarty);
  } else {
    document.addEventListener("DOMContentLoaded", pripravKarty);
  }
})();
