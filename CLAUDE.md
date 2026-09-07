# CLAUDE.md

Web predmetu Elektronické obchodovanie (MkDocs Material, GitHub Pages, https://eo.fabus.eu). Obsah je v `docs/` v Markdowne, navigácia v `mkdocs.yml`, dizajn v `docs/stylesheets/extra.css`. Ako web spustiť a vydať je v `README.md`.

## Prebiehajúca práca: redizajn

Zadanie redizajnu je v troch dokumentoch. Prečítaj ich pred akoukoľvek zmenou šablón, CSS alebo obsahu blokov:

- `navrhy/redesign/PRD.md`: čo sa má urobiť, rozsah, etapy, akceptačné kritériá.
- `navrhy/redesign/VISION.md`: ako to má vyzerať, tokeny, komponenty, špecifikácia šiestich infografík.
- `navrhy/redesign/AGENTS.md`: pravidlá práce v repozitári: jazyk, čo sa nesmie meniť, konvencie súborov, commity, overovanie.

## Pravidlá v skratke

- Odpovedaj po slovensky. Obsah webu, komentáre v kóde a commit správy sú slovenské, identifikátory anglické alebo s prefixom `tw-`.
- Nový text bez typických znakov písania AI: žiadne pomlčky ako oddeľovač viet, trojice prídavných mien, rečnícke otázky ani prázdne prívlastky. Zoznam s výnimkami je v `navrhy/redesign/AGENTS.md`, kapitola 7.
- Nemeň text existujúcich stránok mimo miest uvedených v PRD. Nemeň `nav`, názvy súborov, tokeny a fonty.
- Každá zmena končí `mkdocs build --strict` bez varovaní a vizuálnou kontrolou na desktope aj mobile v oboch režimoch.
- Nenasadzuj ručne. Nasadenie robí GitHub Actions po pushi do `main`, push len so súhlasom používateľa.
- Priečinok `navrhy/` sa necommituje okrem `navrhy/redesign/*.md`. Videá a PNG z NotebookLM do repozitára nepatria.
- Heslo brány sa v repozitári nikdy neobjaví v otvorenej podobe, len ako SHA-256 hash v `mkdocs.yml`.
