const base = process.env.NODE_ENV === 'production' ? '/Bass-UI' : '';
const { resolve } = require('path');
const { getRouterConfig } = require('./router');

module.exports = {
  title: 'Bass-UI',
  description: 'ui vue3',
  alias: {
    'bass-ui': resolve('./src'),
  },
  base,
  outDir: 'dist',
  themeConfig: {
    logo: '/logo.svg',
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'bass-ui',
        description: 'ui vue3',
        label: '中文',
        selectText: '语言',
        nav: [{ text: '指南', link: '/' }],
        sidebar: getRouterConfig(),
      },
      '/en/': {
        lang: 'en-US',
        title: 'bass-ui',
        description: 'ui vue3',
        label: 'English',
        selectText: 'Languages',
        nav: [{ text: 'Guide', link: '/' }],
        sidebar: getRouterConfig('/en/'),
      },
    },
    repo: 'fuzhoujohn/bass-ui',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
