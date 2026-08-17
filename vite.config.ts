import { defineConfig, loadEnv, type Plugin } from 'vite';

function seo(siteUrl: string): Plugin {
  return {
    name: 'seo-files',
    apply: 'build',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          '  <url>',
          `    <loc>${siteUrl}/</loc>`,
          `    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>`,
          '    <changefreq>monthly</changefreq>',
          '    <priority>1.0</priority>',
          '  </url>',
          '</urlset>',
          '',
        ].join('\n'),
      });

      const host = new URL(siteUrl).hostname;

      // GitHub Pages wipes CNAME on every Actions deploy unless the artifact
      // carries it, so the custom domain is emitted from the same env value
      if (!host.endsWith('.github.io')) {
        this.emitFile({ type: 'asset', fileName: 'CNAME', source: `${host}\n` });
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const siteUrl = (env.VITE_SITE_URL ?? '').replace(/\/$/, '');

  if (!siteUrl) throw new Error('VITE_SITE_URL is not set — see .env');

  return {
    base: './',
    build: { target: 'es2022', assetsInlineLimit: 0 },
    plugins: [seo(siteUrl)],
  };
});
