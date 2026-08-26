# B&D Hairstudio — one-page salon website

**Language / Nyelv:** [English](#english) · [Magyar](#magyar)

**🌐 Live / Élő oldal:** <https://maszlaig.github.io/B-D-HairStudio/>

**🔗 GitHub:** <!-- Paste the project repository link here / Illeszd be ide a projekt repójának linkjét --> _(link coming soon / link hamarosan)_

---

## English

A **one-page, characterful landing & booking site** for a hair salon (B&D Hairstudio, Hajdúszoboszló). Everything lives on a single, scrollable page: an intro, a gallery of work, a clear price list, contact details and a simple appointment request. It is completely **self-contained — no backend, no database, no build step, no framework** — just plain HTML, CSS and JavaScript, so it is cheap to host and loads instantly. The site is in **Hungarian**.

### Key features

- **Hero + live open/closed badge** — a "Nyitva / Zárva" (Open / Closed) badge in the contact block reflects, based on the visitor's current time and the opening hours, whether the salon is open right now.
- **Gallery** — a grid of work images, with graceful text fallbacks (e.g. "Balayage", "Női vágás") if an image is missing.
- **Transparent price list** — services grouped into "Vágás & styling" and "Szín & kezelés".
- **Appointment request** — the visitor picks a service, a day and a time slot, then enters their name, phone and an optional note. On submit the request is turned into a **pre-filled e-mail** (`mailto:`) to the salon — there is no backend or third-party booking service.
- **Scroll-reveal animations** and a header that collapses into a **hamburger menu** on phones.
- **Responsive** — mobile-first layout with no horizontal overflow.

### Files

- `index.html` — the whole page (nav, hero, about, gallery, prices, contact, booking)
- `styles.css` — design + responsive layout (CSS custom properties, Google Fonts: Syne / Manrope / Space Mono)
- `script.js` — mobile menu, scroll-reveal, the open/closed badge and the booking → `mailto` logic
- `images/` — hero and gallery images (`hero.jpg`, `galeria-1…6.jpg`)
- `README.md`

### Editing content

- **Text, prices, opening hours, contact details** are edited directly in `index.html`.
- **Photos** — drop your own images into `images/` using the same filenames (`hero.jpg`, `galeria-1.jpg` … `galeria-6.jpg`). If a file is missing, the matching tile shows a labelled text fallback instead of breaking.
- **Recipient e-mail** — the booking request is sent to the address in the `mailLink` handler in `script.js`.

### Run / deploy

No build step. Open `index.html` locally, or upload the folder to any static host (**GitHub Pages**, Netlify, your own hosting) — it works immediately.

---

## Magyar

**Egyoldalas, karakteres bemutatkozó és időpontfoglaló weboldal** egy fodrászszalonnak (B&D Hairstudio, Hajdúszoboszló). Minden egyetlen, végiggörgethető oldalon van: bemutatkozás, munkákat bemutató galéria, átlátható árlista, kapcsolat és egy egyszerű időpontkérés. Teljesen **önálló megoldás — nincs backend, nincs adatbázis, nincs build lépés és nincs keretrendszer** —, csak tiszta HTML, CSS és JavaScript, így olcsón üzemeltethető és villámgyorsan tölt be. Az oldal **magyar** nyelvű.

### Főbb funkciók

- **Hero + élő nyitva/zárva jelző** — a kapcsolat blokkban lévő „Nyitva / Zárva" jelző a látogató aktuális ideje és a nyitvatartás alapján mutatja, hogy épp nyitva van-e a szalon.
- **Galéria** — munkákat bemutató képrács, elegáns szöveges tartalékkal (pl. „Balayage", „Női vágás"), ha egy kép hiányzik.
- **Átlátható árlista** — a szolgáltatások „Vágás & styling" és „Szín & kezelés" csoportokban.
- **Időpontkérés** — a látogató kiválaszt egy szolgáltatást, egy napot és egy idősávot, majd megadja a nevét, telefonszámát és egy opcionális megjegyzést. Küldéskor a kérés egy **előre kitöltött e-maillé** (`mailto:`) alakul a szalonnak — nincs hozzá backend, se külső foglaló-szolgáltatás.
- **Görgetésre beúszó animációk** és telefonon **hamburger-menüvé** csukódó fejléc.
- **Reszponzív** — mobil-first elrendezés, vízszintes túllógás nélkül.

### Fájlok

- `index.html` — a teljes oldal (menü, hero, bemutatkozás, galéria, árak, kapcsolat, foglalás)
- `styles.css` — dizájn + reszponzív elrendezés (CSS egyedi tulajdonságok, Google Fonts: Syne / Manrope / Space Mono)
- `script.js` — mobilmenü, görgetés-animáció, a nyitva/zárva jelző és a foglalás → `mailto` logika
- `images/` — hero és galéria képek (`hero.jpg`, `galeria-1…6.jpg`)
- `README.md`

### Tartalom szerkesztése

- **Szöveg, árak, nyitvatartás, elérhetőségek** közvetlenül az `index.html`-ben szerkeszthetők.
- **Fotók** — tedd a saját képeidet az `images/` mappába, ugyanazokkal a fájlnevekkel (`hero.jpg`, `galeria-1.jpg` … `galeria-6.jpg`). Ha egy fájl hiányzik, a hozzá tartozó csempe törés helyett egy feliratos szöveges tartalékot mutat.
- **Címzett e-mail** — a foglalási kérés a `script.js`-ben lévő `mailLink` kezelőben megadott címre megy.

### Futtatás / deploy

Nincs build lépés. Nyisd meg helyben az `index.html`-t, vagy töltsd fel a mappát bármilyen statikus tárhelyre (**GitHub Pages**, Netlify, saját tárhely) — azonnal működik.
