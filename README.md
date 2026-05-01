# Crunch Lab POS

## Supabase setup
1. Open Supabase.
2. Go to SQL Editor.
3. Open `supabase_setup.sql`.
4. Paste all SQL and click Run.

## GitHub setup
1. Create new GitHub repository.
2. Upload all files in this folder.
3. Go to Settings > Pages.
4. Source: Deploy from branch.
5. Branch: main, folder: root.
6. Open the GitHub Pages link.

## Files
- `index.html` = main POS system
- `supabase_setup.sql` = Supabase database setup
- `manifest.json` + `service-worker.js` + `icon.svg` = installable web app setup

## Important
If GitHub Pages shows old version, clear browser cache or change service worker cache name in `service-worker.js`.
