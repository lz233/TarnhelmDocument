const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  lang: 'zh-CN',
  title: 'Tarnhelm',
  head: [['link', { rel: 'icon', href: '/icon-color.png' }]],
  description: 'The magic to clean sharing links up.',

  theme: defaultTheme({
    logo: '/icon-black.png',
    logoDark: '/icon-white.png',
    home: '/index.md',
    navbar: [
        {
            text: '简介',
            link: '/',
        },
        {
            text: '指南',
            link: '/manual',
        },
        {
            text: '规则库',
            link: '/rules',
        },
        {
            text: '隐私政策',
            link: '/privacy',
        },
        {
            text: 'GitHub',
            link: 'https://github.com/lz233/Tarnhelm',
        },
     ],
  }),
  dest: 'public',
}
