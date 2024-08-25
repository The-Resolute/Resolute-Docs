import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Resolute Docs',
  description: 'Documentation for the Resolute project',
  themeConfig: {
    logo: '/logo.png', // Replace with your actual logo path if needed

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Installation', link: '/getting_started/installation' },
          { text: 'Quick Start', link: '/getting_started/quick_start' }
        ]
      },
      {
        text: 'User Guide',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Basic Usage', link: '/user_guide/basic_usage' },
          { text: 'Advanced Features', link: '/user_guide/advanced_features' }
        ]
      },
      {
        text: 'Developer Guide',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Contributing', link: '/developer_guide/contributing' }
        ]
      },
      {
        text: 'API Reference',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'API Overview', link: '/api_reference/api_overview' }
        ]
      },
      {
        text: 'FAQ',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'FAQ', link: '/faq/index' }
        ]
      }
    ]
  }
})
