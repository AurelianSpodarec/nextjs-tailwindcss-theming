export function registerThemePink(theme) {
  return {
    ".pink": {
      '--primary': theme('colors.pink.400'),
      '--secondary': theme('colors.black.950')
    }
  };
}
