# Offline kópia webu (HTTrack)

Free hosting môže zaniknúť, účet expirovať, platforma zmeniť pravidlá. Preto sa k projektu odovzdáva **kópia e-shopu, ktorá sa dá otvoriť z disku** — bez internetu, aj o rok. Nástroj: **HTTrack Website Copier**, zadarmo, Windows aj Linux (httrack.com).

## Postup (Windows)

1. **Stiahni a nainštaluj** HTTrack z httrack.com (WinHTTrack).
2. **Nový projekt:** názov (napr. `eshop-priezvisko`), priečinok, kam sa má uložiť (napr. `Dokumenty\eshop-offline`).
3. **Akcia:** *Download web site(s)*; do *Web Addresses* vlož adresu svojho e-shopu vrátane `https://`.
4. **Set options** (odporúčané, nie povinné):
    - *Limits* → *Maximum mirroring depth* 5 — stačí na katalóg, produkty a stránky;
    - *Scan Rules* → nechaj obrázky, CSS a JS povolené (predvolené `+*.png +*.gif +*.jpg +*.css +*.js`), pridaj `+*.webp +*.svg`;
    - *Limits* → *Max transfer rate* nechaj mierne, aby ti free hosting nezablokoval IP adresu.
5. **Spusti** a počkaj. Malý e-shop trvá minúty.
6. **Skontroluj:** vypni Wi-Fi alebo použi anonymné okno a otvor `index.html` v priečinku projektu. Musí fungovať: úvodná stránka, katalóg, detail aspoň jedného produktu, obchodné podmienky, kontakt. **Košík, pokladňa a odoslanie objednávky offline nefungujú** — sú to funkcie servera, to je v poriadku a napíš to do referátu.
7. **Zabaľ** priečinok do zip (pravý klik → Odoslať do → Komprimovaný priečinok). Ak má nad 15 MB, pozri blok 10 — odkaz na úložisko.

## Časté problémy

- **Prázdny alebo polovičný výsledok:** hosting HTTrack blokuje (robots.txt, ochrana proti botom). V *Set options → Spider* nastav *robots.txt rules: no robots.txt rules*; ak stále nič, skús *Browser ID* na bežný prehliadač. Ak ani to, ulož kľúčové stránky ručne: v prehliadači *Uložiť ako → Webová stránka, kompletná* pre úvod, katalóg, 2 produkty, podmienky.
- **Chýbajú obrázky:** sú z inej domény (CDN). V *Scan Rules* pridaj pravidlo pre doménu obrázkov alebo zvýš *Limits → Maximum external depth* na 1.
- **Webnode:** stiahne sa vrátane reklamného prúžku a šablóny; niektoré prvky editora offline nefungujú — stačí, že sa zobrazí obsah.
- **Príliš veľký balík:** obrázky boli veľké už na webe (blok 5). Skomprimuj priečinok alebo odovzdaj cez odkaz.

## Alternatíva pre pokročilých

Na Linuxe alebo v Git Bashi to isté urobí `wget`:

```text
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://tvoj-eshop.xy/
```
