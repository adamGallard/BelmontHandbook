// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Belmont Parent Handbook',
    tagline: 'Be Prepared',
    url: 'https://adamGallard.github.io', // Production URL
    baseUrl: '/BelmontHandbook', // GitHub Pages project name
    organizationName: 'adamGallard', // GitHub username
    projectName: 'BelmontHandbook', // Repo name
    deploymentBranch: 'gh-pages',
    favicon: 'img/cropped-Scouts_social_icon-32x32.png',

    // Handling broken links
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    trailingSlash: false,

    // Internationalization settings
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    markdown: {
        mermaid: true,
    },

    // Docusaurus themes and presets
    themes: [
        '@docusaurus/theme-mermaid', // Mermaid theme for diagrams
    ],
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
            },
        ],
    ],

    // Theme configuration: Navbar, Footer, etc.
    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Belmont Scouts',
            logo: {
                alt: 'Scouts Logo',
                src: 'img/scouts-logo.png',
            },
            items: [
                { to: '/docs/introduction/welcome-navigation', label: 'Parent Handbook', position: 'left' },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Resources',
                    items: [
                        { label: 'Contact Us', to: '/docs/group-information/contact-information' },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Belmont Scouts. Built with Docusaurus.`,
        },
    },

    // Custom stylesheets
    stylesheets: [
        {
            href: '/BelmontHandbook/css/custom.css',
            type: 'text/css',
        },
    ],
};

export default config;
