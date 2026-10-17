# Powergeekz Engineering — website

Static site built with [Astro](https://astro.build). It compiles to plain HTML, CSS and JS in `dist/`,
so it can be hosted anywhere: the current Apache/cPanel host, or Render as a static site.

## Work on it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
```

Node 22.22 or newer is required (`.node-version` pins 24 for Render).

## Where things live

| What | File |
| --- | --- |
| Company details, navigation, call-to-action label, client and brand lists | `src/data/site.ts` |
| Service lines | `src/data/services.ts` |
| Portfolio projects and the Gertrude's case study | `src/data/projects.ts` |
| Documentaries photos and videos | `src/data/media.ts` |
| Photos | `src/assets/photos/` (referenced by file name) |
| Colours, type, buttons, motion | `src/styles/global.css` |

Registration, VAT and banking details are deliberately not published on the site.

## Publishing to the live host (cPanel)

1. `npm run build`
2. Upload the **contents** of `dist/` to the site's document root, replacing the old `*.html` files and `css/` folder.
   Page names (`index.html`, `about.html`, `services.html` …) are unchanged, so existing links keep working.
3. The old root-level images (`PW*.jpeg`, `img*.jpeg`, `pic*.jpeg`) are no longer used and can be removed once the new site is live.

## Contact form

The form sends through EmailJS from the browser (keys in `src/data/site.ts`, same account as the old site).
If the EmailJS account restricts allowed origins, add every domain the site is served from.
