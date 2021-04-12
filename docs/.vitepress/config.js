const base = process.env.NODE_ENV === 'production' ? '/Bass-UI' : '/';
const { resolve } = require('path');
const { getRouterConfig } = require('./router');

module.exports = {
  title: 'Bass-UI',
  description: '',
  // 扫描srcIncludes里面的 *.md文件
  srcIncludes: ['src'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'bass-ui'
    [`bass-ui`]: resolve('./src'),
  },
  base,
  themeConfig: {
    logo: '/logo.svg',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'bass-ui',
        description: '',
        label: '中文',
        selectText: '语言',
        nav: [{ text: '指南', link: '/' }],
        sidebar: getRouterConfig(),
      },
      '/en/': {
        lang: 'en-US',
        title: 'bass-ui',
        description: '',
        label: 'English',
        selectText: 'Languages',
        nav: [{ text: 'Guide', link: '/' }],
        sidebar: getRouterConfig('/en/'),
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    repo: 'fuzhoujohn/bass-ui',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
