import { Routes, Route, Navigate } from 'react-router-dom'
import SettingsLayout from '../../components/SettingsLayout'
import ProfileSection from './ProfileSection'
import AccountSection from './AccountSection'
import SecuritySection from './SecuritySection'
import NotificationsSection from './NotificationsSection'
import PrivacySection from './PrivacySection'

export default function SettingsPage() {
  return (
    <SettingsLayout>
      <Routes>
        <Route index element={<Navigate to="/configuracion/perfil" replace />} />
        <Route path="perfil" element={<ProfileSection />} />
        <Route path="cuenta" element={<AccountSection />} />
        <Route path="seguridad" element={<SecuritySection />} />
        <Route path="notificaciones" element={<NotificationsSection />} />
        <Route path="privacidad" element={<PrivacySection />} />
      </Routes>
    </SettingsLayout>
  )
}
