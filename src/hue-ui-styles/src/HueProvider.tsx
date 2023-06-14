import './styles.css'

import React, { createContext, useEffect, useMemo } from 'react'
import { HueTheme } from './types/HueTheme'
import { themeToCssVars } from './utils/merge-themes'

interface HueContextType {
  theme: HueTheme
}

const HueContext = createContext<HueContextType>({ theme: {} })

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

export { HueProvider }
