import plugin from 'tailwindcss/plugin'

import themeConfig from './themeConfig'
import { registerThemeLight } from './variations/light';
import { registerThemeDark } from './variations/dark';
import { registerThemePink } from './variations/pink';
import { registerThemeImperial } from './variations/imperial';

export const theming = plugin(
  function ({ addBase, theme }) {
    addBase({
      ':root': {
        '--border-default': theme('border.lg')
      },

      ...registerThemeLight(theme),
      ...registerThemeDark(theme),
      ...registerThemePink(theme),
      ...registerThemeImperial(theme)
    }),
      addBase({
        body: {
          '@apply bg-secondary': {}
        }
      })
  },
  {
    theme: {
      ...themeConfig.theme,
    }
  }
)
