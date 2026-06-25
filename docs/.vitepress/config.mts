import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Coding Notes',
  description: 'Coding notes.',
  base: '/coding-notes/',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'Coding Notes',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Algorithms', link: '/algorithms/' }
    ],
    sidebar: {
      '/algorithms/': [
        {
          text: 'Algorithms',
          link: '/algorithms/',
          items: [
            {
              text: 'Two Pointers',
              items: [
                { text: 'Leetcode 76 - Minimum Window Substring', link: '/algorithms/two-pointers/leetcode-76-minimum-window-substring' }
              ]
            }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    outline: {
      label: 'On this page',
      level: [2, 3]
    }
  }
})
