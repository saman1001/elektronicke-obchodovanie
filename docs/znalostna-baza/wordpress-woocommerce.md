# WordPress a WooCommerce

Orientácia v administrácii pre skupinu WooCommerce. **WordPress** je systém na správu obsahu (stránky, menu, vzhľad), **WooCommerce** je jeho plugin, ktorý pridáva obchod (produkty, objednávky, doprava, platby). Administrácia je na `tvoja-adresa/wp-admin`.

## Kde čo je

| Položka menu | Čo tam robíš | Blok |
|---|---|---|
| **Nástenka** | prehľad, upozornenia na aktualizácie | — |
| **Stránky** | Domov, O nás, Kontakt, Doprava a platba, Obchodné podmienky… | 4, 6, 7 |
| **Produkty** | produkty, kategórie, vlastnosti (varianty) | 5 |
| **WooCommerce → Objednávky** | prijaté objednávky, zmena stavu | 6 |
| **WooCommerce → Nastavenia** | Všeobecné (krajina, mena, dane), Produkty, Doprava, Platby, Účty a ochrana súkromia, E-maily, Pokročilé (stránky košík, pokladňa, podmienky) | 4, 6, 7 |
| **WooCommerce → Analytika** | objednávky, tržby, produkty | 9 |
| **Vzhľad** | Témy, Prispôsobiť alebo Editor (blokové témy): logo, farby, menu, pätička, widgety | 4, 8 |
| **Pluginy** | inštalácia rozšírení — len z oficiálneho katalógu | 4–9 |
| **Používatelia** | tvoj účet správcu, heslo | 4 |
| **Nastavenia → Všeobecné** | názov, slogan, adresa webu (https), jazyk, časová zóna | 4 |
| **Nastavenia → Ochrana súkromia** | výber stránky ochrany súkromia, vzorový text | 7 |

## Pluginy — čo sa hodí a čo je zadarmo

Základný WooCommerce stačí na celý predmet. Ak chceš e-shop „profesionálnejší", tieto pluginy sa osvedčili — pri každom over, či je **bezplatná verzia** dostatočná, mnohé majú platené rozšírenia:

| Na čo | Pluginy | Poznámka |
|---|---|---|
| úprava stránok | Gutenberg (vstavaný), Elementor (free verzia) | stavba stránok bez kódu |
| e-maily z e-shopu | WP Mail SMTP, Easy WP SMTP | free hostingy blokujú poštu — nastav SMTP vlastnej schránky |
| newsletter, CRM | MailPoet, Follow-Ups | blok 9 |
| SEO | Yoast SEO, Rank Math | titulky, popisy, sitemap |
| štatistiky | Koko Analytics, Jetpack Stats, MonsterInsights (GA) | blok 9; GA vyžaduje súhlas s cookies |
| platby | vstavané brány WooCommerce, PayPal, Stripe; prehľad slovenských brán na platobnebrany.sk | vyžadujú účet a overenie firmy — v projekte len teória |
| doprava | Packeta (Zásielkovňa), Booster for WooCommerce (dobierka a poplatky) | blok 6 |
| chat so zákazníkom | Tawk.to | zadarmo |
| formuláre | Contact Form 7, WPForms Lite | blok 7 |
| cookies | CookieYes, Complianz (free verzie) | len ak zapneš analytiku s cookies |
| SSL | Really Simple SSL | ak hosting nepresmeruje na https sám |
| výkon | WP Super Cache, Autoptimize, TinyPNG alebo Smush (kompresia obrázkov) | free hosting je pomalý — cache pomáha |
| preklady | Loco Translate | ak niečo v e-shope zostalo po anglicky |
| zálohy | UpdraftPlus | zálohuj pred každou väčšou zmenou |

Pravidlo: **čo nepoužívaš, zmaž.** Každý plugin spomaľuje a je ďalším miestom, kde môže byť chyba.

## Bezpečnosť v piatich riadkoch

1. Prihlasovacie meno správcu **nie je „admin"**, heslo je dlhé a jedinečné.
2. **Aktualizuj** WordPress, tému aj pluginy, keď Nástenka ukáže upozornenie — väčšina napadnutých webov je neaktualizovaných.
3. Pluginy a témy **len z oficiálneho katalógu** (wordpress.org) — „prémiová téma zadarmo" z cudzieho webu býva zavírená.
4. **HTTPS** zapnuté, adresa webu v Nastaveniach s `https://`.
5. **Záloha** pred každou väčšou zmenou (UpdraftPlus alebo export z panela hostingu).

## Keď sa niečo pokazí

- **Biela stránka alebo chyba po inštalácii pluginu:** cez správcu súborov hostingu (alebo FTP) premenuj priečinok `wp-content/plugins/nazov-pluginu` — plugin sa vypne, web nabehne.
- **Nechodia e-maily:** SMTP plugin s vlastnou schránkou (Gmail, schránka hostingu). Skontroluj aj spam.
- **Zmeny sa nezobrazujú:** vymaž cache (plugin aj prehliadač, Ctrl+F5).
- **Stratené heslo:** „Zabudnuté heslo" na prihlasovacej stránke — preto musí fungovať e-mail.
- **Web je pomalý:** zmenši obrázky (blok 5), zapni cache plugin, vypni nepoužívané pluginy. Free hosting má strop — zapíš do referátu ako zistenie.
- **Neviem, kde niečo je:** opíš AI, čo vidíš a čo hľadáš ([AI v predmete](ai-v-predmete.md)) — názvy sa líšia podľa verzie, hľadaj podobné.
