import { defineConfig, loadEnv, type Plugin } from 'vite';

function seo(siteUrl: string): Plugin
{
    return {
        name: 'seo-files',
        apply: 'build',

        generateBundle()
        {
            this.emitFile(
            {
                type: 'asset',
                fileName: 'robots.txt',
                source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
            });

            this.emitFile(
            {
                type: 'asset',
                fileName: 'sitemap.xml',
                source: sitemap(siteUrl),
            });

            const host = new URL(siteUrl).hostname;

            if (!host.endsWith('.github.io'))
            {
                this.emitFile({ type: 'asset', fileName: 'CNAME', source: `${host}\n` });
            }
        },
    };
}

function sitemap(siteUrl: string): string
{
    return [
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
    ].join('\n');
}

export default defineConfig(({ mode }) =>
{
    const siteUrl = loadEnv(mode, process.cwd(), 'VITE_').VITE_SITE_URL;

    if (siteUrl === undefined || siteUrl === '')
    {
        throw new Error('VITE_SITE_URL is missing; canonical, og:url and CNAME all read from it');
    }

    return {
        base: './',
        plugins: [seo(siteUrl.replace(/\/$/, ''))],
        build: { target: 'es2022', cssTarget: 'chrome100' },
    };
});
