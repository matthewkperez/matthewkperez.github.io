# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static HTML academic portfolio website** for Matthew Perez, deployed via GitHub Pages at `matthewkperez.com`. There is no build system — files are served directly.

**Deployment:** Push to `master` branch → automatically live at matthewkperez.com.

## Architecture

- `index.html` — Single-page portfolio: bio, contact links, and publications list
- `stylesheet.css` — Global styles (table-based layout, max-width 800px, Lato font)
- `data/` — CV and resume PDFs
- `images/` — Profile photos and `papers_images/` thumbnails for publications
- `mipnerf/`, `mipnerf360/` — Standalone project pages with their own CSS/JS

## Conventions

- Layout uses HTML tables (not CSS grid/flexbox) — consistent with the existing pattern
- Publications follow a two-column row structure: paper thumbnail on left, details on right
- The `highlight` class bolds the author's name in publication author lists
- The `.one`/`.two`/`.fade` CSS classes handle the hover image-swap effect on paper thumbnails
- "Last Updated" date at the bottom is set dynamically via inline `<script>` using `document.lastModified`

## Common Tasks

**Add a publication:** Copy an existing `<tr>` block in the publications table in `index.html`. Add the paper thumbnail to `images/papers_images/`.

**Update CV/Resume:** Replace the PDF files in `data/` — links in `index.html` already point there.

**Update profile photo:** Replace `images/matt.jpeg` (currently ~3.3MB; consider optimizing large images before committing).
