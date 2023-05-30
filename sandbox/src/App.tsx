import { Test, HueProvider } from '@hue-ui/core'

function App() {
  return (
    <HueProvider>
      <h1>Hue UI Sandbox - go crazy</h1>
      <Test />
      <p className="text-blue-800">Testing</p>
    </HueProvider>
  )
}

export default App
