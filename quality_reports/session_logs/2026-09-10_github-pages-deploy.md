# Session Log — 2026-09-10 — Deploy website to GitHub Pages

## Goal

Restore the personal website hosting: the old GitHub Pages site at
young-kyungkim.com had gone 404, and the new site (this repo) needed to be
published there.

## Key context

- Root cause of the 404: the old `yngkyk.github.io` repo was renamed to
  `garden` and made private, which disabled its Pages site and detached the
  custom domain.
- This repo (`yngkyk/website`) is a plain static site (`index.html`,
  `assets/`, `scripts/`, `styles/`) — no build step, no Pages config existed.
- Domain: young-kyungkim.com, registered at Porkbun. DNS records from the old
  site were still valid (apex A records to GitHub Pages IPs 185.199.108–111.153,
  `www` CNAME to `yngkyk.github.io`), so no registrar changes were needed.

## What was done

1. Made `yngkyk/website` public (user-approved; Pages on private repos needs
   a paid plan).
2. Enabled GitHub Pages serving from `main` at repo root (legacy build).
3. Set custom domain `young-kyungkim.com` via the Pages API. GitHub
   auto-committed a `CNAME` file (`3523592 Create CNAME`); local clone was
   rebased to match.
4. Verified build succeeded; enabled HTTPS enforcement. Both apex and `www`
   serve 200 over HTTPS.

## Status

Complete. Publishing workflow going forward: commit + `git push` to `main`;
Pages rebuilds automatically.

## Open questions / deferred

- None. (The private `garden` repo still has an inactive Pages config;
  harmless, but could be cleaned up if desired.)
