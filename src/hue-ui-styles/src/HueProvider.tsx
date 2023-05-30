import './styles.css'

import React, { createContext, useMemo } from 'react'

interface HueContextType {
  theme: any
}

const HueContext = createContext<HueContextType>({ theme: undefined })

export interface HueProviderProps {
  children: React.ReactNode
}

function HueProvider({ children }: HueProviderProps) {
  const theme = useMemo(() => ({ theme: 'dummy2' }), [])

  return <HueContext.Provider value={theme}>{children}</HueContext.Provider>
}

export { HueProvider }
