# CLAUDE.md

## Opis projektu

Strona internetowa firmy świadczącej usługi montażu i serwisu klimatyzacji.
Domena: montaz-serwis-klimatyzacji.pl
Język strony: polski

## Stack technologiczny

- **Framework**: [Astro](https://astro.build)
- **Strony**: `.astro` (komponenty i strony) oraz `.html` (strony produktowe)
- **Stylowanie**: CSS inline w plikach Astro i HTML (brak zewnętrznego frameworka CSS)
- **Build output**: katalog `dist/`
- **Zasoby publiczne**: katalog `public/`

## Struktura projektu

```
src/
  components/     # Komponenty Astro (Navbar, Footer, Carousel, itp.)
  layouts/        # Layouty (Layout.astro, Default.astro)
  pages/          # Strony Astro i HTML
    index.astro
    kontakt.astro
    opinie.astro
    realizacje.astro
    klimatyzacja-warszawa.astro
    blog/
    ku-przestrodze/
    rotenso-mirai-2-6kw.html
    rotenso-mirai-3-5kw.html
public/           # Pliki statyczne (HTML produktów, JS, favicon)
dist/             # Build output (nie edytować ręcznie)
```

## Design system – zmienne CSS

```css
--primary: #1a3a52    /* ciemny niebieski */
--accent:  #00a89d    /* turkus */
--bg:      #faf9f7
--card:    #ffffff
--text:    #2d3748
--muted:   #718096
--border:  #e2e8f0
```

Fonty: **Playfair Display** (nagłówki), **Inter** (treść), **IBM Plex Mono** (dane techniczne)

## Deployment

Deployment odbywa się **automatycznie przez GitHub Actions** po każdym push na branch `main`.

Workflow: [.github/workflows/astro.yaml](.github/workflows/astro.yaml)

1. GitHub Actions buduje projekt (`npm run build`) na Ubuntu
2. Zawartość katalogu `dist/` jest wysyłana przez **FTP** na serwer **Seohost** (`h50.seohost.pl`)
3. Katalog docelowy na serwerze: `public_html/`

Dane dostępowe FTP przechowywane są w GitHub Secrets:
- `REMOTE_HOST` — adres serwera
- `REMOTE_USER` — użytkownik FTP
- `REMOTE_PASSWORD` — hasło FTP

Narzędzie FTP: `SamKirkland/FTP-Deploy-Action@v4.3.4`

## Komendy

```bash
npm run dev      # serwer deweloperski
npm run build    # build produkcyjny do dist/
npm run preview  # podgląd builda
```

## Konwencje

- **Navbar jest fixed o wysokości ~80px.** Każda strona musi mieć `padding-top: 6rem` (lub więcej) na głównym kontenerze, żeby treść nie była zasłaniana przez navbar.
- Strony pisane po polsku, kod po angielsku
- Strony produktowe klimatyzatorów mogą być jako pliki `.html` w `src/pages/` lub `public/`
- Pliki JS dla produktów: `products-data.js` (dane) i `product-bind.js` (logika bindowania)
- Nie edytować plików w katalogu `dist/` — generowane automatycznie przez build
- **Opinie klientów są w `src/data/opinie.json`.** Nowe opinie dodawać na początek pliku. Wymagane pola: `imie`, `lokalizacja`, `tekst`, `data` (YYYY-MM-DD), `godzina` (HH:MM), `ocena`, `inicjaly`, `kolor`. Strona `/opinie` ma automatyczną paginację co 20 opinii (`src/pages/opinie/[...page].astro`). Schema `Review` + `AggregateRating` generowana dynamicznie z całego pliku JSON.
