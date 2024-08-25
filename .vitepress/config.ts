import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'Resolute Documentation',
  description: 'Documentation for Resolute Project',
  themeConfig: {
    siteTitle: 'Resolute Docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Setup', link: '/guide/setup' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'API Overview', link: '/api/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo' }
    ],
    darkModeSwitch: true, // Enable dark mode switch
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Resolute'
    },
  },
  markdown: {
    lineNumbers: true
  },
  vite: {
    resolve: {
      alias: {
        '@theme': resolve(__dirname, './theme'),
      }
    }
  }
})
