// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Belmont Parent Handbook',
    tagline: 'Be Prepared',
    favicon: 'img/cropped-Scouts_social_icon-32x32.png',

    // Set the production url of your site here
    url: 'https://adamGallard.github.io/BelmontHandbook',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    organizationName: 'adamGallard',
    projectName: 'BelmontHandbook', // Usually your repo name.
    deploymentBranch:'gh-pages',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    trailingSlash: false,
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Belmont Scouts',
                logo: {
                    alt: 'Scouts Logo',
                    src: 'img/scouts-logo.png',
                },
                items: [
                    // Remove or comment out these lines
                    // {
                    //   to: 'docs/tutorial',
                    //   label: 'Tutorial',
                    //   position: 'left',
                    // },
                    // { to: 'blog', label: 'Blog', position: 'left' },
                    // {
                    //   href: 'https://github.com/facebook/docusaurus',
                    //   label: 'GitHub',
                    //   position: 'right',
                    // },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Resources',
                        items: [
                            {
                                label: 'Contact Us',
                                to: '/docs/contact-information',
                            },
                            // Add more items as needed or remove others
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Belmont Scouts. Built with Docusaurus.`,
            },
        }),
    stylesheets: [
        {
            href: '/css/custom.css',
            type: 'text/css',
        },
    ],
};

export default config;