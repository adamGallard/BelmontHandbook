// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Belmont Parent Handbook',
    tagline: 'Be Prepared',
    url: 'https://belmont.scoutsqld.com.au', // Production URL (custom domain)
    baseUrl: '/',
    organizationName: 'adamGallard', // GitHub username
    projectName: 'BelmontHandbook', // Repo name
    //deploymentBranch: 'gh-pages',
    favicon: 'img/cropped-Scouts_social_icon-32x32.png',

    // Handling broken links
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    trailingSlash: false,

      scripts: [
    {
      async: true,
      src: 'https://www.feedbackrocket.io/sdk/v1.2.js',
      'data-fr-id': 'uNX8Hc_fQoyBYqif0QF7A',
      'data-fr-theme': 'dynamic',
      'data-fr-title':'Feedback',

    }
  ],

    // Internationalization settings
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    markdown: {
        mermaid: true,
    },
    plugins: [require.resolve('docusaurus-lunr-search')],
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
                    editUrl: 'https://github.com/adamGallard/BelmontHandbook/edit/main/',
                },
                theme: {
                    customCss: './src/css/custom.css',
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
                // Add a feedback button in the top navbar on every page


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
       // Inject Appzi script
        injectHtmlTags: {
            headTags: [
                // Brand fonts: Poppins for headings/nav, Inter for body text
                {
                    tagName: 'link',
                    attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                },
                {
                    tagName: 'link',
                    attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
                },
                {
                    tagName: 'link',
                    attributes: {
                        rel: 'stylesheet',
                        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap',
                    },
                },
                {
                    tagName: 'script',
                    innerHTML: `
                    (function (d) {
                      var appziScript = d.createElement('script');
                      appziScript.src = 'https://w.appzi.io/w.js?token=iwUJl';
                      appziScript.async = true;
                      d.head.appendChild(appziScript);
                    })(document);
                    `,
                },
            ],
        },
    },
};

export default config;
