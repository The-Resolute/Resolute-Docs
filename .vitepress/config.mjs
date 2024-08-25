import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Resolute Docs',
  description: 'Documentation for Resolute Project',
  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/getting_started/' },
      { text: 'User Guide', link: '/user_guide/' },
      { text: 'Developer Guide', link: '/developer_guide/' },
      { text: 'API Reference', link: '/api_reference/' },
      { text: 'FAQ', link: '/faq/' },
    ],
    sidebar: {
      '/getting_started/': [
        { text: 'Getting Started', link: '/getting_started/' },
        { text: 'Installation', link: '/getting_started/installation' },
        { text: 'Quick Start', link: '/getting_started/quick_start' },
      ],
      '/user_guide/': [
        { text: 'User Guide', link: '/user_guide/' },
        { text: 'Basic Usage', link: '/user_guide/basic_usage' },
        { text: 'Advanced Features', link: '/user_guide/advanced_features' },
      ],
      '/developer_guide/': [
        { text: 'Developer Guide', link: '/developer_guide/' },
        { text: 'Contributing', link: '/developer_guide/contributing' },
      ],
      '/api_reference/': [
        { text: 'API Reference', link: '/api_reference/' },
        { text: 'API Overview', link: '/api_reference/api_overview' },
      ],
      '/faq/': [
        { text: 'FAQ', link: '/faq/' },
      ],
    },
  },
});
