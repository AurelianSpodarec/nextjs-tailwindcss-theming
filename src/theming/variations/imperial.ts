import { IThemeRegistration } from "./IThemeRegistration";

export function registerThemeImperial(theme): IThemeRegistration {
  return {
    ".imperial": {
      '--primary': theme('colors.yellow.300'),
      '--secondary': theme('colors.purple.900')
    }
  };
}
