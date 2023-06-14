import { describe } from 'vitest'
import { itThrowsContextErrorForHook } from '@hue-ui/tests'
import { getContextValidationMessage } from '@hue-ui/utils'
import { useHueColorScheme, ColorSchemeContextProps } from './ColorSchemeProvider'

describe('ColorSchemeProvider', () => {
  itThrowsContextErrorForHook<ColorSchemeContextProps>({
    hook: useHueColorScheme,
    errorMessage: getContextValidationMessage({
      hookName: 'useHueColorScheme',
      providerName: 'ColorSchemeProvider',
    }),
  })
})
