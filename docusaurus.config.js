// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Determination',
  tagline: '简单的Undertale同人作品下载站',
  url: 'https://determination.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ZengXiaoPi', // Usually your GitHub org/user name.
  projectName: 'Determination-Site', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
    
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ZengXiaoPi/Determination-Site/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ZengXiaoPi/Determination-Site/edit/main/',
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
      navbar: {
        title: 'Determination',
        logo: {
          alt: 'Keep Your Determination',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'utgame',
            position: 'left',
            label: '下载游戏',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/ZengXiaoPi/Determination-Site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '下载',
            items: [
              {
                label: 'Undertale同人作品',
                to: '/docs/utgame',
              },
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                label: 'Bilibili',
                href: 'https://space.bilibili.com/481298570',
              },
            ],
          },
          {
            title: '别的东西',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'Cloudflare',
                href: 'https://cloudflare.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ZengXiaoPi/Determination-Site',
              },
            ],
          },
        ],
        copyright: `Determination Site Made By Determination Team. Built with Docusaurus. \nThanks for Cloudflare Support.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
