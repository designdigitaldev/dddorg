// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DESIGN DIGITAL DEV - Documentație',
  tagline: 'Resurse tehnice, tutoriale și articole utile',
  favicon: 'img/favicon.ico',
  future: { v4: true },
  url: 'https://designdigitaldev.org',
  baseUrl: '/',
  organizationName: 'designdigitaldev',
  projectName: 'dddorg',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  plugins: [
    '@docusaurus/plugin-sitemap',
  ],
  i18n: {
    defaultLocale: 'ro',
    locales: ['ro', 'en'],
    localeConfigs: {
      ro: {
        label: 'Română',
        direction: 'ltr',
        htmlLang: 'ro-RO',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/designdigitaldev/dddorg/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl: 'https://github.com/designdigitaldev/dddorg/tree/main/',
        },
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],
  themeConfig:
    ({
      image: 'img/logo.png',
      navbar: {
        title: 'DESIGN DIGITAL DEV',
        logo: { alt: 'DESIGN DIGITAL DEV Logo', src: 'img/logo.svg' },
        items: [
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Documentație' },
          { to: '/blog', label: 'Articole', position: 'left' },
          { type: 'localeDropdown', position: 'right' },
          { href: 'https://github.com/designdigitaldev/dddorg', label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          { title: 'Resurse', items: [{ label: 'Documentație', to: '/docs/intro' }, { label: 'Articole', to: '/blog' }] },
          { title: 'Companie', items: [{ label: 'Site Prezentare', href: 'https://designdigital.ro' }, { label: 'Contactează-ne', href: 'mailto:office@designdigital.ro' }] },
          { title: 'Comunitate', items: [{ label: 'GitHub', href: 'https://github.com/designdigitaldev' }] },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DESIGN DIGITAL DEV S.R.L. Construit cu Docusaurus.`,
      },
      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    }),
};
export default config;
