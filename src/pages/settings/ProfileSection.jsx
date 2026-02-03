import { useState } from 'react'
import { useSession } from '../../context/SessionContext'
import * as Avatar from '@radix-ui/react-avatar'
import * as Label from '@radix-ui/react-label'

export default function ProfileSection() {
  const { session } = useSession()
  const [formData, setFormData] = useState({
    username: session?.username || '',
    bio: 'Diseñador UX apasionado por crear experiencias memorables.',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Guardando perfil:', formData)
    // Aquí iría la lógica para guardar los datos
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Perfil</h1>
      <p className="text-gray-600 mb-6">
        Actualiza tu información personal y cómo te muestras a otros miembros.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Avatar */}
          <div>
            <Label.Root className="block text-sm font-medium text-gray-900 mb-3">
              Foto de perfil
            </Label.Root>
            <div className="flex items-center gap-4">
              <Avatar.Root className="w-20 h-20 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-medium">
                <Avatar.Fallback>
                  {session?.initials || 'JD'}
                </Avatar.Fallback>
              </Avatar.Root>
              <div>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cambiar foto
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  JPG, PNG o GIF. Máximo 2MB.
                </p>
              </div>
            </div>
          </div>

          {/* Nombre completo */}
          <div>
            <Label.Root htmlFor="username" className="block text-sm font-medium text-gray-900 mb-2">
              Nombre completo
            </Label.Root>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Tu nombre completo"
            />
          </div>

          {/* Bio */}
          <div>
            <Label.Root htmlFor="bio" className="block text-sm font-medium text-gray-900 mb-2">
              Biografía
            </Label.Root>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              placeholder="Cuéntanos sobre ti..."
            />
            <p className="text-xs text-gray-500 mt-1">
              Máximo 200 caracteres. {formData.bio.length}/200
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 flex gap-3">
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
          >
            Guardar cambios
          </button>
          <button
            type="button"
            className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}
