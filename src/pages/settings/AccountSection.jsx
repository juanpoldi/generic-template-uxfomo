import { useSession } from '../../context/SessionContext'
import * as Label from '@radix-ui/react-label'
import * as Select from '@radix-ui/react-select'

function ChevronDownIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
    </svg>
  )
}

export default function AccountSection() {
  const { session } = useSession()

  const handleDeleteAccount = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.')) {
      console.log('Eliminando cuenta...')
      // Aquí iría la lógica para eliminar la cuenta
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Cuenta</h1>
      <p className="text-gray-600 mb-6">
        Gestiona la información de tu cuenta y preferencias.
      </p>

      <div className="space-y-6">
        {/* Email */}
        <div>
          <Label.Root htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            Correo electrónico
          </Label.Root>
          <input
            type="email"
            id="email"
            value={session?.email || 'juan@uxfomo.com'}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 cursor-not-allowed"
          />
          <p className="text-xs text-gray-500 mt-1">
            Tu correo electrónico no se puede cambiar.
          </p>
        </div>

        {/* Nombre de usuario */}
        <div>
          <Label.Root htmlFor="username-display" className="block text-sm font-medium text-gray-900 mb-2">
            Nombre de usuario
          </Label.Root>
          <input
            type="text"
            id="username-display"
            value={session?.username || 'Juan Demo'}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Fecha de registro */}
        <div>
          <Label.Root className="block text-sm font-medium text-gray-900 mb-2">
            Miembro desde
          </Label.Root>
          <div className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-700">
            Enero 2024
          </div>
        </div>

        {/* Idioma */}
        <div>
          <Label.Root htmlFor="language" className="block text-sm font-medium text-gray-900 mb-2">
            Idioma
          </Label.Root>
          <Select.Root defaultValue="es">
            <Select.Trigger
              id="language"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white flex items-center justify-between"
            >
              <Select.Value />
              <Select.Icon>
                <ChevronDownIcon />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg border border-gray-200">
                <Select.Viewport className="p-1">
                  <Select.Item value="es" className="relative flex items-center px-8 py-2 text-sm rounded hover:bg-purple-50 outline-none cursor-pointer data-[highlighted]:bg-purple-50">
                    <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                      <CheckIcon />
                    </Select.ItemIndicator>
                    <Select.ItemText>Español</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="en" className="relative flex items-center px-8 py-2 text-sm rounded hover:bg-purple-50 outline-none cursor-pointer data-[highlighted]:bg-purple-50">
                    <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                      <CheckIcon />
                    </Select.ItemIndicator>
                    <Select.ItemText>English</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="pt" className="relative flex items-center px-8 py-2 text-sm rounded hover:bg-purple-50 outline-none cursor-pointer data-[highlighted]:bg-purple-50">
                    <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                      <CheckIcon />
                    </Select.ItemIndicator>
                    <Select.ItemText>Português</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <button
          type="button"
          className="px-6 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
        >
          Guardar cambios
        </button>
      </div>

      {/* Zona peligrosa */}
      <div className="mt-8 pt-6 border-t border-red-200">
        <h2 className="text-lg font-semibold text-red-900 mb-2">Zona peligrosa</h2>
        <p className="text-sm text-gray-600 mb-4">
          Eliminar tu cuenta es permanente y no se puede deshacer.
        </p>
        <button
          type="button"
          onClick={handleDeleteAccount}
          className="px-6 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
        >
          Eliminar cuenta
        </button>
      </div>
    </div>
  )
}
