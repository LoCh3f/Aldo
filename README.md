# Aldo

This repository contains my personal portfolio website, built with Astro + TypeScript + Tailwind CSS and published with GitHub Pages.

Live site: [https://LoCh3f.github.io/Aldo/](https://LoCh3f.github.io/Aldo/)

## Project structure

```text
Aldo/
|- src/
|  |- pages/
|  |  `- index.astro
|  `- styles/
|     `- global.css
|- public/
|  `- assets/
|- .github/
|  `- workflows/
|     `- deploy.yml
|- astro.config.mjs
|- package.json
`- README.md
```

## Run locally

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Notes

- `astro.config.mjs` is configured for GitHub Pages project hosting using base path `/Aldo`.
- The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the `dist/` folder to GitHub Pages.
- The theme toggle writes the active color tokens directly to the root element so dark/light switching works consistently across browsers.

## Author

[LoCh3f](https://github.com/LoCh3f)
