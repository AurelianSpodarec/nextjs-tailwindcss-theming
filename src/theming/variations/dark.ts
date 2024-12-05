import { IThemeRegistration } from "./IThemeRegistration";

export function registerThemeDark(theme): IThemeRegistration {
  return {
    ".dark": {
      '--primary': theme('colors.green.400'),
      '--secondary': theme('colors.black.950')
    }
  };
}
