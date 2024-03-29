// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Rlog',
    tagline: 'Deno are cool',
    favicon: 'img/favicon.ico',
    url: 'https://blog.r48n34.me/',

    baseUrl: '/',
    


    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'reemo', // Usually your GitHub org/user name.
    // projectName: 'personal-blog', // Usually your repo name.

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    showLastUpdateTime: true,
                    // showLastUpdateAuthor: true,
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Reemo Blog',
                logo: {
                    alt: 'Reemo Blog Logo',
                    src: 'img/favicon_dev.ico',
                },
                items: [
                    {
                        type: 'docSidebar',
                        position: 'left',
                        sidebarId: 'tutorial',
                        label: 'Tutorial',
                    },
                    {
                        type: 'docSidebar',
                        position: 'left',
                        sidebarId: 'notes',
                        label: 'Notes',
                    },
                    // {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/r48n34',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        href: 'https://reeodev.github.io/',
                        label: 'Design',
                        position: 'right',
                    },
                ],
            },
            metadata: [
                {
                    name: 'keywords',
                    content: 'coding, blog, reemo, reemo studio'
                },
                {
                    name: 'google-site-verification',
                    content: 'MSmy-J4XDNXLBlFKqvooWG7RzHPvXmjhSo1BWtgF40E'
                },
            ],
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/tutorial/ExpressJs/basic',
                            },
                            {
                                label: 'Notes',
                                to: '/docs/notes/Languages/Javascript/NPM_publish',
                            },
                        ],
                    },
                    {
                        title: 'Contact',
                        items: [
                            {
                                label: 'Github',
                                href: 'https://github.com/r48n34',
                            },
                            {
                                label: 'Personal site',
                                href: 'https://new-reemo-studio.vercel.app/',
                            },
                        ],
                    },
                    // {
                    //   title: 'More',
                    //   items: [
                    //     {
                    //       label: 'Blog',
                    //       to: '/blog',
                    //     },
                    //   ],
                    // },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Reemo.`,

            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['rust', 'bash', 'powershell', 'json'],
            },
        }),
    markdown: {
        // mermaid: false,
    },
    themes: [],
};

module.exports = config;
