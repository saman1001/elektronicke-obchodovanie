/* Website ID = eo.fabus.eu v Umami (analytics.kryptology.sk/websites/045f95e2-9b21-4622-bbfa-0ee59437dba4).
   Analytika: self-hosted Umami (dashboard analytics.kryptology.sk).
   Bez cookies — netreba consent banner. Jediné miesto v projekte, ktoré vie
   o analytics nástroji; výmena nástroja = úprava tohto súboru.
   Web beží na GitHub Pages (statický hosting bez reverse-proxy), preto sa
   script načítava priamo z Umami inštancie. Meria len ostrú doménu —
   file://, localhost ani náhľady sa nepočítajú. Umami samo sleduje aj
   pushState navigáciu (Material navigation.instant).

   Eventy:
   - prompt_copy { section } — klik na „kopírovať" pri bloku kódu/promptu;
     section = id (príp. text) najbližšieho nadpisu nad blokom.
   - tab_switch { tab, section } — prepnutie záložky (WooCommerce / Webnode,
     v bloku 9 forma reklamy); tab = text záložky, section = najbližší nadpis.
     Ukazuje, ktorá skupina web používa a v ktorých blokoch. Klik na už
     aktívnu záložku sa nepočíta. Odchýlka od referenčnej kópie
     v tvorba_webstranok — ten web záložky nemá. */
(function () {
  if (location.hostname !== "eo.fabus.eu") return;
  if (window.__twAnalytics) return; // idempotencia pri prípadnom opätovnom spustení
  window.__twAnalytics = true;

  var s = document.createElement("script");
  s.src = "https://analytics.kryptology.sk/script.js";
  s.defer = true;
  s.setAttribute("data-website-id", "045f95e2-9b21-4622-bbfa-0ee59437dba4");
  document.head.appendChild(s);

  /* Najbližší nadpis nad prvkom — stúpa po rodičoch a ich predchádzajúcich
     súrodencoch (nadpis nie je predok <pre>, je to súrodenec v .md-typeset). */
  function najblizsiNadpis(el) {
    for (var node = el; node; node = node.parentElement) {
      for (var sib = node.previousElementSibling; sib; sib = sib.previousElementSibling) {
        if (/^H[1-4]$/.test(sib.tagName)) {
          return (sib.id || sib.textContent.trim()).slice(0, 50);
        }
      }
    }
    return "";
  }

  /* Delegovane na document — prežije výmenu obsahu pri navigation.instant
     a chytí aj tlačidlá vložené neskôr. Material vkladá copy tlačidlo ako
     .md-code__button[data-md-type="copy"]; .md-clipboard je náš file:// fallback. */
  document.addEventListener("click", function (e) {
    var btn = e.target && e.target.closest
      ? e.target.closest('.md-clipboard, .md-code__button[data-md-type="copy"]')
      : null;
    if (!btn || !window.umami) return;
    try {
      window.umami.track("prompt_copy", { section: najblizsiNadpis(btn) });
    } catch (err) {
      // analytika nikdy nesmie pokaziť stránku
    }
  });

  /* Záložky (pymdownx.tabbed, alternate_style): Material ich renderuje ako
     <div class="tabbed-set"> s radio inputmi a <div class="tabbed-labels">
     <label for="__tabbed_N_M">Názov</label>. V čase click eventu na label
     ešte radio nie je prepnuté (aktivácia prebehne až po dispatchi), takže
     input.checked === true znamená klik na už aktívnu záložku — nepočítame. */
  document.addEventListener("click", function (e) {
    var label = e.target && e.target.closest
      ? e.target.closest(".tabbed-labels > label")
      : null;
    if (!label || !window.umami) return;
    var input = label.htmlFor ? document.getElementById(label.htmlFor) : null;
    if (input && input.checked) return;
    try {
      window.umami.track("tab_switch", {
        tab: label.textContent.trim().slice(0, 50),
        section: najblizsiNadpis(label.closest(".tabbed-set") || label)
      });
    } catch (err) {
      // analytika nikdy nesmie pokaziť stránku
    }
  });
})();
