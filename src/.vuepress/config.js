const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Madeline',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  dest: './dist', // desired path to VuePress output
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/madeline-bot/docs-v2',
    editLinks: true,
    docsDir: 'src',
    editLinkText: 'Edit on Github',
    lastUpdated: true,
    algolia: {
      apiKey: 'ba2ad6b12791eddbc7079344250ed2ce',
      indexName: 'docs',
      // If Algolia did not provided you any `appId`, use `BH4D9OD16A` or remove this option
      appId: 'BYGLTBMRH0',
    },
    nav: [
      {
        text: 'Documentations',
        link: '/docs/',
      },
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Good to Read',
          collapsable: false,
          children: [
            '',
            'information',
            'faq',
          ]
        },
        {
          title: 'Commands',
          collapsable: false,
          children: [
            'commands_ckc',
            'commands_samp',
            'commands_tools',
            'commands_tags',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    "vuepress-plugin-simple-analytics",
  ]
}
