import React, { createContext, useContext, useEffect, useMemo } from 'react'
import { validateContext } from '@hue-ui/utils'
import { ColorScheme } from './types/ColorScheme'

export interface ColorSchemeContextProps {
  colorScheme: ColorScheme
  toggleColorScheme: (colorScheme?: ColorScheme) => void
}

const ColorSchemeContext = createContext<ColorSchemeContextProps>(null)

function useHueColorScheme() {
  const ctx = useContext(ColorSchemeContext)

  validateContext<ColorSchemeContextProps>({
    context: ctx,
    hookName: 'useHueColorScheme',
    providerName: 'ColorSchemeProvider',
  })

  return ctx
}

interface ColorSchemeProviderProps extends ColorSchemeContextProps {
  children: React.ReactNode
}

function ColorSchemeProvider({
  colorScheme,
  toggleColorScheme,
  children,
}: ColorSchemeProviderProps) {
  const ctxValues = useMemo(
    () => ({ colorScheme, toggleColorScheme }),
    [colorScheme, toggleColorScheme]
  )

  useEffect(() => {
    const rootElem = document.querySelector(':root')
    if (colorScheme === 'dark') {
      rootElem.className = 'dark'
    } else {
      rootElem.className = ''
    }
  }, [colorScheme])

  return <ColorSchemeContext.Provider value={ctxValues}>{children}</ColorSchemeContext.Provider>
}

ColorSchemeProvider.displayName = '@hue-ui/core/ColorSchemeProvider'

export { ColorSchemeProvider, useHueColorScheme }
