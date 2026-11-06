// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: "https://docs.clanna.dev",
    integrations: [
        starlight({
            title: 'ClanNA Docs',
            description: 'ClanNA 档案馆的文档，用于记录网站的使用指南，服务条款，服务器规则，以及 Fediverse 的入门教程。另外，加入服务器的指南也包含在此处。',
            logo: {
                src: './src/assets/icon.webp',
            },
            favicon: '/favicon.png',
            locales: {
                root: {
                    label: '简体中文',
                    lang: 'zh-CN',
                },
            },
            defaultLocale: 'zh-cn',
            editLink: {
                baseUrl: 'https://github.com/SamHou0/clanna-docs/edit/main/',
            },
            social: [{ icon: 'matrix', label: 'Matrix Chat', href: 'hhttps://matrix.to/#/#chat:clanna.dev' }]
        }),
    ],
});
