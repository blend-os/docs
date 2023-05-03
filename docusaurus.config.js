// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'blendOS',
  tagline: "The only operating system you'll ever need.",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.blendos.co',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'blend-os', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/blend-os/docs/tree/main/',
        },
        blog: {
          path: 'guides',
          showReadingTime: true,
          routeBasePath: '/guides',
          blogTitle: 'Guides',
          blogSidebarTitle: 'Latest guides',
          editUrl:
            'https://github.com/blend-os/docs/tree/main/',
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
      metadata: [{name: 'keywords', content: 'docs, blend'}, {name: 'description', content: 'Official documentation and guides for blendOS.'}],
      navbar: {
        title: 'blendOS Documentation',
        logo: {
          alt: 'blendOS Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Knowledge Base',
          },
          {to: '/guides', label: 'Guides', position: 'left'},
          {
            href: 'https://blendos.co',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://github.com/blend-os',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} blendOS contributors.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
