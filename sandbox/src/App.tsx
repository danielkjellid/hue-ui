import { Test, HueProvider } from '@hue-ui/core'

function App() {
  return (
    <HueProvider
      theme={{
        primaryColor: 'brand-800',
        colors: {
          'brand-50': 'red',
          'brand-100': 'red',
          'brand-200': 'red',
          'brand-300': 'red',
          'brand-400': 'red',
          'brand-500': 'red',
          'brand-600': 'red',
          'brand-700': 'red',
          'brand-800': 'red',
          'brand-900': 'red',
          'brand-950': 'red',
        },
      }}
    >
      <h1>Hue UI Sandbox - go crazy</h1>
      <Test />
      <p className="text-blue-800">Testing</p>
    </HueProvider>
  )
}

export default App
