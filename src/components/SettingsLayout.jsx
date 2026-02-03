import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../context/SessionContext'
import Layout from './Layout'
import SettingsSidebar from './SettingsSidebar'

export default function SettingsLayout({ children }) {
  const { session } = useSession()
  const navigate = useNavigate()

  useEffect(() => {
    if (!session) {
      navigate('/', { replace: true })
    }
  }, [session, navigate])

  // Si no hay sesión, no renderizar nada (se redirigirá)
  if (!session) {
    return null
  }

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-8">
        <SettingsSidebar />
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </Layout>
  )
}
