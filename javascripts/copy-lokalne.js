/* Záložné kopírovanie kódu/promptov pri otvorení webu zo súboru (file://).
   Na http/https vkladá tlačidlá Material sám — vtedy sa tento skript nespustí. */
(function () {
  if (location.protocol !== "file:") return;

  function skopirujZalozne(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* nič — nižšie je aj Clipboard API */ }
    document.body.removeChild(ta);
  }

  function pridajTlacidla() {
    document.querySelectorAll(".md-typeset pre > code").forEach(function (kod) {
      var pre = kod.parentElement;
      if (pre.querySelector(".md-clipboard")) return; // tlačidlo už existuje

      var btn = document.createElement("button");
      btn.className = "md-clipboard md-icon";
      btn.title = "Kopírovať do schránky";
      btn.addEventListener("click", function () {
        var text = kod.innerText;
        var hotovo = function () {
          btn.classList.add("tw-copied");
          btn.title = "Skopírované";
          setTimeout(function () {
            btn.classList.remove("tw-copied");
            btn.title = "Kopírovať do schránky";
          }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(hotovo, function () {
            skopirujZalozne(text);
            hotovo();
          });
        } else {
          skopirujZalozne(text);
          hotovo();
        }
      });

      var nav = document.createElement("nav");
      nav.className = "md-code__nav";
      nav.appendChild(btn);
      pre.insertBefore(nav, kod);
    });
  }

  function spusti() { setTimeout(pridajTlacidla, 500); }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", spusti);
  } else {
    spusti();
  }
})();
