# CLAUDE.md

## Opis projektu

Strona internetowa firmy Å›wiadczÄ…cej usÅ‚ugi montaÅ¼u i serwisu klimatyzacji.
Domena: montaz-serwis-klimatyzacji.pl
JÄ™zyk strony: polski

## Stack technologiczny

- **Framework**: [Astro](https://astro.build)
- **Strony**: `.astro` (komponenty i strony) oraz `.html` (strony produktowe)
- **Stylowanie**: CSS inline w plikach Astro i HTML (brak zewnÄ™trznego frameworka CSS)
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
public/           # Pliki statyczne (HTML produktÃ³w, JS, favicon)
dist/             # Build output (nie edytowaÄ‡ rÄ™cznie)
```

## Design system â€“ zmienne CSS

```css
--primary: #1a3a52    /* ciemny niebieski */
--accent:  #00a89d    /* turkus */
--bg:      #faf9f7
--card:    #ffffff
--text:    #2d3748
--muted:   #718096
--border:  #e2e8f0
```

Fonty: **Playfair Display** (nagÅ‚Ã³wki), **Inter** (treÅ›Ä‡), **IBM Plex Mono** (dane techniczne)

## Deployment

Deployment odbywa siÄ™ **automatycznie przez GitHub Actions** po kaÅ¼dym push na branch `main`.

Workflow: [.github/workflows/astro.yaml](.github/workflows/astro.yaml)

1. GitHub Actions buduje projekt (`npm run build`) na Ubuntu
2. ZawartoÅ›Ä‡ katalogu `dist/` jest wysyÅ‚ana przez **FTP** na serwer **Seohost** (`h50.seohost.pl`)
3. Katalog docelowy na serwerze: `public_html/`

Dane dostÄ™powe FTP przechowywane sÄ… w GitHub Secrets:
- `REMOTE_HOST` â€” adres serwera
- `REMOTE_USER` â€” uÅ¼ytkownik FTP
- `REMOTE_PASSWORD` â€” hasÅ‚o FTP

NarzÄ™dzie FTP: `SamKirkland/FTP-Deploy-Action@v4.3.4`

## Komendy

```bash
npm run dev      # serwer deweloperski
npm run build    # build produkcyjny do dist/
npm run preview  # podglÄ…d builda
```

## Konwencje

- **Navbar jest fixed o wysokoÅ›ci ~80px.** KaÅ¼da strona musi mieÄ‡ `padding-top: 6rem` (lub wiÄ™cej) na gÅ‚Ã³wnym kontenerze, Å¼eby treÅ›Ä‡ nie byÅ‚a zasÅ‚aniana przez navbar.
- Strony pisane po polsku, kod po angielsku
- Strony produktowe klimatyzatorÃ³w mogÄ… byÄ‡ jako pliki `.html` w `src/pages/` lub `public/`
- Pliki JS dla produktÃ³w: `products-data.js` (dane) i `product-bind.js` (logika bindowania)
- Nie edytowaÄ‡ plikÃ³w w katalogu `dist/` â€” generowane automatycznie przez build
- **Opinie klientÃ³w sÄ… w `src/data/opinie.json`.** Nowe opinie dodawaÄ‡ na poczÄ…tek pliku. Wymagane pola: `imie`, `lokalizacja`, `tekst`, `data` (YYYY-MM-DD), `godzina` (HH:MM), `ocena`, `inicjaly`, `kolor`. Strona `/opinie` ma automatycznÄ… paginacjÄ™ co 20 opinii (`src/pages/opinie/[...page].astro`). Schema `Review` + `AggregateRating` generowana dynamicznie z caÅ‚ego pliku JSON.

## Przetwarzanie zdjêæ klimatyzatorów Rotenso

### Wzorzec — Versu Mirror
| Parametr | Wartoœæ |
|---|---|
| Canvas | 1257 x 729 px |
| Klimatyzator szerokoœæ | 1144 px |
| Klimatyzator wysokoœæ | 384 px |
| Margines lewy | 53 px |
| Margines prawy | 59 px |
| Margines górny | 204 px |
| Margines dolny | 140 px |

### Kolejnoœæ kroków (ImageMagick)
1. flatten - usuñ kana³ Alpha
2. trim - usuñ bia³e t³o
3. resize 1144x384! - rozci¹gnij do wymiarów Mirror (! = wymuœ)
4. geometry +53+204 - umieœæ na canvas 1257x729

### Zasady
- Mo¿na rozci¹gaæ klimatyzator pionowo i poziomo
- Bia³e t³o rozci¹gaj równomiernie ze wszystkich stron
- Rozmiar mo¿e ró¿niæ siê od wzorca max 1%
- NIGDY nie przycinaj klimatyzatora
- Zawsze mierz w rzêdzie 300 (nie 250)
- Zawsze porównaj wszystkie 6 parametrów z Versu Mirror przed outputem
