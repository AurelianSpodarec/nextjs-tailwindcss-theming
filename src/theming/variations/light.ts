import { IThemeRegistration } from "./IThemeRegistration";

export function registerThemeLight(theme): IThemeRegistration {
  return {
    ".light": {
      '--primary': theme('colors.pink.600'),
      '--secondary': theme('colors.white')
    }
  };
}
