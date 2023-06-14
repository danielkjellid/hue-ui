import { formatAsCSSVar, formatProperties } from './format-properties'

import { HueTheme } from '../types/HueTheme'

/**
 * Convert certain configuration keys in the theme object to css variables.
 * @param {{theme: HueTheme}} obj Param.
 * @param {HueTheme} obj.theme The theme to convert from.
 * @returns The modified version of the theme.
 */
const themeToCssVars = ({ theme }: { theme: HueTheme }) => {
  const colors = formatProperties({ obj: theme.colors })

  return {
    primaryColor: formatAsCSSVar(theme.primaryColor),
    colors,
  }
}

export { themeToCssVars }
