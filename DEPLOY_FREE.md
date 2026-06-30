# CoinScan site — free deployment instructions

## Best free option for this static site: Cloudflare Pages

1. Create a free GitHub account if you do not have one.
2. Create a new empty GitHub repository, for example `coinscan-site`.
3. Open Terminal in this project folder and run:

```bash
git init
git add .
git commit -m "Initial CoinScan website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/coinscan-site.git
git push -u origin main
```

4. Go to Cloudflare Dashboard → Workers & Pages → Create application → Pages.
5. Select `Import an existing Git repository`.
6. Choose the `coinscan-site` repository.
7. Build settings:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Production branch: `main`

8. Click Deploy.

You will get a free URL like:

```text
https://coinscan-site.pages.dev
```

## Local check before deploy

```bash
npm install
npm run build
```

If `npm run build` succeeds, the site is ready for Cloudflare Pages.

## Alternative: Vercel

Vercel is easiest for Next.js, but its free Hobby plan is meant for personal/non-commercial use. Since CoinScan is a paid app, Cloudflare Pages is the safer free option for a public product landing page.

To deploy to Vercel anyway:

```bash
npm install -g vercel
vercel login
vercel --prod
```
