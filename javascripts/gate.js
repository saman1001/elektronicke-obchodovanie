// Prihlasovacia brána: spoločné heslo pre študentov, overované len v prehliadači.
// Skript beží v <head> (vkladá ho overrides/main.html), aby obsah nepreblikol: ak v localStorage
// nie je platný hash, pridá na <html> triedu eo-brana (CSS skryje obsah) a po načítaní DOM vykreslí
// prekrytie s poľom na heslo. Heslo sa hashuje SHA-256 cez crypto.subtle a porovná s hashom
// z mkdocs.yml (extra.gate_hash → <meta name="eo-gate">). Zhoda sa uloží do localStorage.
// Brána chráni pred náhodným návštevníkom, nie obsah: HTML je vo verejnom repozitári.
"use strict";
(function () {
  var meta = document.querySelector('meta[name="eo-gate"]');
  if (!meta || meta.getAttribute("data-enabled") !== "true") { return; }
  var hash = (meta.getAttribute("content") || "").toLowerCase();
  if (!hash || /print_page\.html$/.test(location.pathname)) { return; }
  if (!(window.crypto && window.crypto.subtle && window.TextEncoder)) {
    console.warn("Brána: crypto.subtle nie je k dispozícii (web mimo https alebo localhost), obsah je bez brány.");
    return;
  }
  var KLUC = "eo-gate";
  try { if (localStorage.getItem(KLUC) === hash) { return; } } catch (e) { /* súkromný režim bez úložiska */ }

  var html = document.documentElement;
  html.classList.add("eo-brana");

  function sha256(text) {
    return window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ("0" + b.toString(16)).slice(-2); }).join("");
    });
  }

  function vykresli() {
    var logo = meta.getAttribute("data-logo");
    var prekrytie = document.createElement("div");
    prekrytie.className = "tw-brana";
    prekrytie.innerHTML =
      '<form class="tw-brana__karta" novalidate>' +
        '<h1 class="tw-brana__logo">' + (logo ? '<img src="' + logo + '" alt="Elektronické obchodovanie">' : "Elektronické obchodovanie") + "</h1>" +
        '<p class="tw-brana__text">Web je určený študentom predmetu. Zadaj heslo z Moodle.</p>' +
        '<label class="tw-brana__pole"><span>Heslo</span><input type="password" name="heslo" autocomplete="current-password" autofocus></label>' +
        '<button type="submit" class="tw-brana__tlacidlo">Vstúpiť</button>' +
        '<p class="tw-brana__chyba" role="alert" aria-live="polite"></p>' +
        '<p class="tw-brana__poznamka">Heslo sa neukladá na server, overuje sa len v tvojom prehliadači.</p>' +
      "</form>";
    document.body.appendChild(prekrytie);
    var form = prekrytie.querySelector("form");
    var pole = form.querySelector("input");
    var chyba = form.querySelector(".tw-brana__chyba");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      sha256(pole.value).then(function (h) {
        if (h === hash) {
          try { localStorage.setItem(KLUC, hash); } catch (err) { /* bez úložiska sa brána opýta znova */ }
          prekrytie.remove();
          html.classList.remove("eo-brana");
        } else {
          chyba.textContent = "Nesprávne heslo";
          form.classList.add("tw-brana__karta--chyba");
          pole.value = "";
          pole.focus();
        }
      });
    });
    pole.addEventListener("input", function () { chyba.textContent = ""; form.classList.remove("tw-brana__karta--chyba"); });
    pole.focus();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", vykresli);
  } else {
    vykresli();
  }
})();
