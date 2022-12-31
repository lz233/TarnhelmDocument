import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Tarnhelm',
  head: [['link', { rel: 'icon', href: '/icon-color.png' }]],
  description: 'The magic to clean sharing links up.',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/en/': {
      lang: 'en-US',
      title: 'Tarnhelm',
      description: 'The magic to clean sharing links up.',
    },
    '/': {
      lang: 'zh-CN',
      title: 'Tarnhelm',
      description: '清理分享链接的魔法。',
    },
  },
  theme: defaultTheme({
    logo: '/icon-black.png',
    logoDark: '/icon-white.png',
    home: '/index.md',
    locales: {
      '/en/': {
        selectLanguageName: 'English',
        navbar: [
        {
            text: 'Home',
            link: './',
        },
        {
            text: 'Introduction',
            link: './introduction',
        },
        {
            text: 'Manual',
            link: './manual',
        },
        {
            text: 'Rules',
            link: './rules',
        },
        {
            text: 'Privacy Policy',
            link: './privacy',
        },
        {
            text: 'GitHub',
            link: 'https://github.com/lz233/Tarnhelm',
        },
        ],
      },
      '/': {
        selectLanguageName: '简体中文',
        navbar: [
        {
            text: '首页',
            link: './',
        },
        {
            text: '简介',
            link: './introduction',
        },
        {
            text: '指南',
            link: './manual',
        },
        {
            text: '规则库',
            link: './rules',
        },
        {
            text: '隐私政策',
            link: './privacy',
        },
        {
            text: 'GitHub',
            link: 'https://github.com/lz233/Tarnhelm',
        },
        ],
      },
    },
  }),
  dest: 'public',
})
