# JP Consulting & Services – website

Static website in three languages. No build step: any static host works (GitHub Pages, Netlify, cPanel, etc.).

| Language | File |
|----------|------|
| English (default) | `index.html` |
| Spanish | `es/index.html` |
| Swedish | `sv/index.html` |

Shared files:

- `css/styles.css` – all styling
- `js/main.js` – contact form handler
- `img/` – web-optimized logo and favicon (the full-size original stays in `logo.png`)

## Contact

The only contact email on the site is **info@jp-cs.com**. The contact form has no server backend: when a visitor submits it, their email app opens with a pre-filled message to info@jp-cs.com.

## Editing text

Each language is its own HTML file with the same structure. When you change content, make the matching change in all three files.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
