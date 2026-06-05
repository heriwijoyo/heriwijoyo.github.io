import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Heri Wijoyo",
  description: "Senior Backend Architect Portfolio",
  
  // This enables the clean, modern default theme
  themeConfig: {
    // Top Navigation Bar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Architecture Patterns', link: '/architecture/cloudflare-edge' },
      { text: 'Live Demos', link: '/live-demos/' },
      { text: 'Case Studies', link: '/case-studies/' }
    ],

    // Left Sidebar Navigation
    sidebar: {
      '/architecture/': [
        {
          text: 'Architecture Patterns',
          items: [
            { text: 'Cloudflare Edge Backend', link: '/architecture/cloudflare-edge' },
            // Future architectural projects go here
          ]
        }
      ],
      '/live-demos/': [
        {
          text: 'Live Demos',
          items: [
            { text: 'POS Application', link: '/live-demos/pos-app' },
            { text: 'Inventory Tracking', link: '/live-demos/inventory-system' }
          ]
        }
      ],
      '/case-studies/': [
        {
          text: 'Business Scenarios',
          items: [
            { text: 'High-Throughput SES Queue', link: '/case-studies/ses-queue' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/heriwijoyo' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/heriwijoyo' }
    ]
  }
})