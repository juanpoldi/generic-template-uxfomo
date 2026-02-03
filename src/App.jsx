import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SidebarPage from './pages/SidebarPage'
import SettingsPage from './pages/settings/SettingsPage'
import RadixDemo from './pages/RadixDemo'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sidebar" element={<SidebarPage />} />
      <Route path="/configuracion/*" element={<SettingsPage />} />
      <Route path="/radix-demo" element={<RadixDemo />} />
    </Routes>
  )
}

export default App
