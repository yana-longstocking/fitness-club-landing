# Superfit Landing Page

A fitness club landing page built with pure HTML/CSS and bundled with Vite.

## Stack

- HTML5
- CSS3 (responsive layout + animations)
- Vite

## Run the Project

```bash
npm install
npm run dev
```

After starting the dev server, open the local URL from the terminal (usually `http://localhost:5173`).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally

## Project Structure

```text
fitness-club-landing/
├─ index.html
├─ src/
│  ├─ style.css
│  ├─ main.js
│  └─ assets/
│     ├─ icons/
│     └─ images/
├─ public/
└─ package.json
```

## Main Landing Sections

- Header (logo, call button)
- Hero block
- Welcome section (`introduction`)
- Club advantages section (`our-achievements`)
- Promo banner (`hero`)
- Benefits cards (`benefits`)
- Footer (contacts + map + bottom row)

## Where to Edit Things

- Page content: `index.html`
- Styles and responsive rules: `src/style.css`
- Icons: `src/assets/icons`
- Images: `src/assets/images`

## Breakpoints

This project uses:

- Base styles — desktop
- `@media (max-width: 744px)` — tablet/small screens
- `@media (max-width: 320px)` — mobile

## Font Note

Local `@font-face` rules for Oswald are configured in `style.css` using the `/fonts/...` path.
If the font does not load, add the files to `public/fonts` or update the CSS path.
