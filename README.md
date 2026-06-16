# OpenAI Codex Clone

A static, responsive recreation of the OpenAI Codex landing page UI. The project is built with plain HTML, CSS, and JavaScript, and is published with GitHub Pages.

Live site: https://ganjmeng.github.io/openai-codex-clone/

Repository: https://github.com/ganjmeng/openai-codex-clone

## Overview

This repository contains a single-page static site that recreates the visual layout and interactions of the OpenAI Codex product page. It includes a desktop and mobile header, hero section, product imagery, customer logos, feature sections, testimonials, final CTA, footer, mobile menu, and cookie banner controls.

The page uses public remote media URLs for visual assets and does not include a build process, package manager, server framework, or backend.

## Features

- Responsive landing page layout for desktop and mobile.
- Fixed OpenAI-style header with desktop navigation.
- Mobile header with expandable menu.
- Hero section with remote video background and Codex product imagery.
- Customer logo strip and promotional credit callout.
- Alternating feature sections with product screenshots.
- Multi-card testimonials section.
- Final call-to-action section and footer navigation.
- Cookie banner with dismiss controls.
- No JavaScript framework and no build step.

## Project Structure

```text
.
|-- index.html
|-- styles.css
|-- script.js
`-- README.md
```

### `index.html`

Contains the page markup, content, remote media references, navigation, sections, and footer.

### `styles.css`

Contains all layout, typography, responsive behavior, header styling, feature grids, cards, cookie banner styling, and mobile breakpoints.

### `script.js`

Adds small client-side behavior for:

- Header scroll state.
- Mobile menu open and close state.
- Cookie banner dismissal.

## Running Locally

Because this is a static site, no dependencies are required.

From the project directory:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

You can also open `index.html` directly in a browser, but using a local server is closer to the deployed GitHub Pages environment.

## Deployment

The site is deployed with GitHub Pages from the `main` branch root.

Current deployment settings:

- Host: GitHub Pages
- Repository: `ganjmeng/openai-codex-clone`
- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`
- Live URL: https://ganjmeng.github.io/openai-codex-clone/

No custom domain is configured.

## Verification Checklist

After changes, verify:

- The live URL returns HTTP 200.
- Desktop layout renders the hero, fixed header, feature sections, testimonials, CTA, and footer.
- Mobile layout collapses into the compact header and single-column content.
- Mobile menu opens and closes correctly.
- Cookie banner buttons hide the banner.
- Browser console has no missing local assets or script errors.
- Remote images and videos load from their source URLs.

## Known Limitations

- Some links are placeholders (`#`) because this is a UI clone rather than a production OpenAI site.
- Visual assets are loaded from remote public URLs; if those URLs change or become unavailable, media may stop rendering.
- The repository does not include downloaded copies of the referenced images or videos.
- There is no backend, analytics, form handling, authentication, or content management system.

## Credits and Disclaimer

This project is an independent UI recreation for demo and learning purposes. It is not affiliated with, endorsed by, or sponsored by OpenAI.

OpenAI, Codex, ChatGPT, and related brand assets are trademarks or assets of their respective owners. Remote media and page inspiration are based on the public OpenAI Codex page.

## License

No license has been added yet. Do not assume reuse rights beyond the repository owner's intended demo use.
