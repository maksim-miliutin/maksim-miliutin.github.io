import { defineConfig, loadEnv, type Plugin } from 'vite';

/** Writes the files that have to carry the live domain: robots, sitemap and CNAME. */
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

            // an Actions deploy replaces the published tree, so a CNAME that lives only in
            // the Pages settings is wiped on the next push
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
        // relative paths so the same build works at a domain root and under a subfolder
        base: './',
        plugins: [seo(siteUrl.replace(/\/$/, ''))],
        build: { target: 'es2022', cssTarget: 'chrome100' },
    };
});
