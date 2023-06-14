import { describe } from 'vitest'
import { itThrowsContextErrorForHook } from '@hue-ui/tests'
import { getContextValidationMessage } from '@hue-ui/utils'
import { useHueTheme } from './HueProvider'
import { HueTheme } from './types'

describe('HueProvider', () => {
  itThrowsContextErrorForHook<HueTheme>({
    hook: useHueTheme,
    errorMessage: getContextValidationMessage({
      hookName: 'useHueTheme',
      providerName: 'HueProvider',
    }),
  })
})
