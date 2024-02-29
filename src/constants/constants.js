import Button from "../components/Button.jsx";

export const routes = [
  {
    url: '/guide',
    text: 'Guide'
  },
  {
    url: '/config',
    text: 'Config'
  },
  {
    url: '/plugins',
    text: 'Plugins'
  },
  {
    text: 'Resources',
    children: [
      {
        text: 'Link a',
        url: 'a'
      },
      {
        text: 'Link b',
        url: 'b'
      },
      {
        text: 'Link c',
        url: 'c'
      }
    ]
  },
  {
    text: 'Version',
    children: [
      {
        text: 'Link a',
        url: 'a'
      },
      {
        text: 'Link b',
        url: 'b'
      },
      {
        text: 'Link c',
        url: 'c'
      }
    ]
  }
]

export const cards = [
  {
    title: 'Instant Server Start',
    text: 'On demand file serving over native ESM, no bundling required!'
  },
  {
    title: 'Lightning Fast HMR',
    text: 'Hot Module Replacement (HMR) that stays fast regardless of app size.'
  },
  {
    title: 'Rich Features',
    text: 'Out-of-the-box support for TypeScript, JSX, CSS and more.'
  },
  {
    title: 'Optimized Build',
    text: 'Pre-configured Rollup build with multi-page and library mode support.'
  },
  {
    title: 'Universal Plugins',
    text: 'Rollup-superset plugin interface shared between dev and build.'
  },
  {
    title: 'Fully Typed APIs',
    text: 'Flexible programmatic APIs with full TypeScript typing.'
  },
]

export const buttons = [
  "Get Started",
  "Why Vite?",
  "View on GitHub",
  "🎉 ViteConf 23!"
]
