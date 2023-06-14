import './styles.css'

import React, { createContext, useContext, useEffect, useMemo } from 'react'

import { validateContext } from '@hue-ui/utils'
import { HueTheme } from './types/HueTheme'
import { themeToCssVars } from './utils/merge-themes'

export interface HueContextProps {
  theme: HueTheme
}

const HueContext = createContext<HueContextProps>(null)

function useHueTheme() {
  const ctx = useContext(HueContext)

  validateContext<HueContextProps>({
    context: ctx,
    hookName: 'useHueTheme',
    providerName: 'HueProvider',
  })

  return ctx.theme
}

export interface HueProviderProps {
  theme?: HueTheme
  children: React.ReactNode
}

function HueProvider({ theme, children }: HueProviderProps) {
  const ctxValues = useMemo(() => ({ theme }), [theme])

  useEffect(() => {
    const styleSheet = document.documentElement.style
    const cssVars = themeToCssVars({ theme: ctxValues.theme })

    Object.entries(cssVars.colors).map(([key, value]) => {
      styleSheet.setProperty(key, value as string)
      return undefined
    })
  })

  return <HueContext.Provider value={ctxValues}>{children}</HueContext.Provider>
}

HueProvider.displayName = '@hue-ui/core/HueProvider'

export { HueProvider, useHueTheme }
