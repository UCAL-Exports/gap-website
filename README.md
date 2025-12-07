# GAP Website Static Template

Starter folder structure for a static HTML site that can be zipped and uploaded to Wix (e.g., as a static asset bundle). All paths are relative so you can host the entire folder at the site root.

## Structure

- `index.html` — landing page with sample sections and navigation.
- `pages/` — additional static pages (about, contact) referenced from the nav.
- `assets/css/` — sitewide styles (`main.css`).
- `assets/js/` — sitewide scripts (`main.js`).
- `assets/img/`, `assets/icons/`, `assets/fonts/` — drop media and font files here. Placeholders keep the folders in version control.

## Working locally

1) Open `index.html` directly in your browser or use a simple static server (e.g., `python3 -m http.server 8000` from this directory).  
2) Keep asset paths relative (no localhost URLs) so they work after upload to Wix.

## Deploying to Wix

1) Update content in `index.html` and `pages/*.html`, and place assets under `assets/`.  
2) Confirm internal links and asset references stay relative.  
3) Zip the project folder and upload according to your Wix static hosting flow (e.g., via the dashboard or dev center).  
4) If using a CDN path, update the `<base>` href or asset paths accordingly.

## Notes

- Keep HTML semantic for accessibility.  
- Consider adding favicons under `assets/icons/`.  
- Add Open Graph tags in the `<head>` if you need rich previews when sharing links.

