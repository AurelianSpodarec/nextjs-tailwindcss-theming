import plugin from 'tailwindcss/plugin'

import ThemeNames from './themeNames'
import themeConfig from './themeConfig'

export const theming = plugin(
  function ({ addBase, theme }) {
    addBase({
      ':root': {

      },
      [`.${ThemeNames.Light}`]: {
        '--primary': theme('colors.blue.700'),
      },
      [`.${ThemeNames.Dark}`]: {
        '--primary': theme('colors.green.700'),
      },
      [`.${ThemeNames.Pink}`]: {
        '--primary': theme('colors.pink.700'),
      }
    })
  },
  {
    theme: {
      ...themeConfig.theme,
    }
  }
)
