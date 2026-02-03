import { useState } from 'react'
import * as Switch from '@radix-ui/react-switch'
import * as Label from '@radix-ui/react-label'

export default function SecuritySection() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  })

  const activeSessions = [
    {
      id: 1,
      device: 'Windows - Chrome',
      location: 'Madrid, España',
      lastActive: 'Ahora',
      current: true
    },
    {
      id: 2,
      device: 'iPhone - Safari',
      location: 'Madrid, España',
      lastActive: 'Hace 2 horas',
      current: false
    }
  ]

  const handlePasswordChange = (e) => {
    e.preventDefault()
    console.log('Cambiando contraseña...')
    setPasswords({ current: '', new: '', confirm: '' })
  }

  const handleRevokeSession = (sessionId) => {
    console.log('Revocando sesión:', sessionId)
  }

  return (
    <div className="space-y-6">
      {/* Cambiar contraseña */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Seguridad</h1>
        <p className="text-gray-600 mb-6">
          Gestiona tu contraseña y opciones de seguridad.
        </p>

        <form onSubmit={handlePasswordChange}>
          <div className="space-y-4">
            <div>
              <Label.Root htmlFor="current-password" className="block text-sm font-medium text-gray-900 mb-2">
                Contraseña actual
              </Label.Root>
              <input
                type="password"
                id="current-password"
                value={passwords.current}
                onChange={(e) => setPasswords(prev => ({ ...prev, current: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div>
              <Label.Root htmlFor="new-password" className="block text-sm font-medium text-gray-900 mb-2">
                Nueva contraseña
              </Label.Root>
              <input
                type="password"
                id="new-password"
                value={passwords.new}
                onChange={(e) => setPasswords(prev => ({ ...prev, new: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div>
              <Label.Root htmlFor="confirm-password" className="block text-sm font-medium text-gray-900 mb-2">
                Confirmar nueva contraseña
              </Label.Root>
              <input
                type="password"
                id="confirm-password"
                value={passwords.confirm}
                onChange={(e) => setPasswords(prev => ({ ...prev, confirm: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
            >
              Cambiar contraseña
            </button>
          </div>
        </form>
      </div>

      {/* Autenticación de dos factores */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Autenticación de dos factores
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Añade una capa extra de seguridad a tu cuenta.
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Label.Root htmlFor="two-factor" className="text-sm font-medium text-gray-900 cursor-pointer">
              {twoFactorEnabled ? 'Habilitado' : 'Deshabilitado'}
            </Label.Root>
            <p className="text-xs text-gray-500">
              {twoFactorEnabled 
                ? 'Tu cuenta está protegida con 2FA' 
                : 'Habilita 2FA para mayor seguridad'}
            </p>
          </div>
          <Switch.Root
            id="two-factor"
            checked={twoFactorEnabled}
            onCheckedChange={setTwoFactorEnabled}
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-gray-200 outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <Switch.Thumb className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1" />
          </Switch.Root>
        </div>
      </div>

      {/* Sesiones activas */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Sesiones activas
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Gestiona tus sesiones en diferentes dispositivos.
        </p>

        <div className="space-y-3">
          {activeSessions.map((session) => (
            <div
              key={session.id}
              className="flex items-start justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-gray-900">
                    {session.device}
                  </p>
                  {session.current && (
                    <span className="px-2 py-0.5 text-xs font-medium text-green-700 bg-green-50 rounded">
                      Actual
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {session.location} • {session.lastActive}
                </p>
              </div>
              {!session.current && (
                <button
                  type="button"
                  onClick={() => handleRevokeSession(session.id)}
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Revocar
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
