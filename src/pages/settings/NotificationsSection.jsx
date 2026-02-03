import { useState } from 'react'
import * as Switch from '@radix-ui/react-switch'
import * as Label from '@radix-ui/react-label'
import * as Select from '@radix-ui/react-select'

export default function NotificationsSection() {
  const [notifications, setNotifications] = useState({
    emailNewsletter: true,
    emailComments: true,
    emailMentions: false,
    emailMessages: true,
    pushComments: false,
    pushMentions: true,
    pushMessages: true,
    digestFrequency: 'weekly'
  })

  const handleToggle = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSelectChange = (value) => {
    setNotifications(prev => ({ ...prev, digestFrequency: value }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    console.log('Guardando preferencias:', notifications)
  }

  const Toggle = ({ enabled, onChange, id }) => (
    <Switch.Root
      id={id}
      checked={enabled}
      onCheckedChange={onChange}
      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-gray-200 outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
    >
      <Switch.Thumb className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1" />
    </Switch.Root>
  )

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

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Notificaciones</h1>
      <p className="text-gray-600 mb-6">
        Configura cómo y cuándo quieres recibir notificaciones.
      </p>

      <form onSubmit={handleSave}>
        <div className="space-y-8">
          {/* Notificaciones por email */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Notificaciones por email
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label.Root htmlFor="email-newsletter" className="text-sm font-medium text-gray-900 cursor-pointer">
                    Newsletter
                  </Label.Root>
                  <p className="text-xs text-gray-500">Recibe nuestro boletín semanal</p>
                </div>
                <Toggle
                  id="email-newsletter"
                  enabled={notifications.emailNewsletter}
                  onChange={() => handleToggle('emailNewsletter')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label.Root htmlFor="email-comments" className="text-sm font-medium text-gray-900 cursor-pointer">
                    Comentarios
                  </Label.Root>
                  <p className="text-xs text-gray-500">Cuando alguien comenta tus publicaciones</p>
                </div>
                <Toggle
                  id="email-comments"
                  enabled={notifications.emailComments}
                  onChange={() => handleToggle('emailComments')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label.Root htmlFor="email-mentions" className="text-sm font-medium text-gray-900 cursor-pointer">
                    Menciones
                  </Label.Root>
                  <p className="text-xs text-gray-500">Cuando alguien te menciona</p>
                </div>
                <Toggle
                  id="email-mentions"
                  enabled={notifications.emailMentions}
                  onChange={() => handleToggle('emailMentions')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label.Root htmlFor="email-messages" className="text-sm font-medium text-gray-900 cursor-pointer">
                    Mensajes directos
                  </Label.Root>
                  <p className="text-xs text-gray-500">Cuando recibes un mensaje privado</p>
                </div>
                <Toggle
                  id="email-messages"
                  enabled={notifications.emailMessages}
                  onChange={() => handleToggle('emailMessages')}
                />
              </div>
            </div>
          </div>

          {/* Notificaciones push */}
          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Notificaciones push
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label.Root htmlFor="push-comments" className="text-sm font-medium text-gray-900 cursor-pointer">
                    Comentarios
                  </Label.Root>
                  <p className="text-xs text-gray-500">En tiempo real en el navegador</p>
                </div>
                <Toggle
                  id="push-comments"
                  enabled={notifications.pushComments}
                  onChange={() => handleToggle('pushComments')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label.Root htmlFor="push-mentions" className="text-sm font-medium text-gray-900 cursor-pointer">
                    Menciones
                  </Label.Root>
                  <p className="text-xs text-gray-500">En tiempo real en el navegador</p>
                </div>
                <Toggle
                  id="push-mentions"
                  enabled={notifications.pushMentions}
                  onChange={() => handleToggle('pushMentions')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label.Root htmlFor="push-messages" className="text-sm font-medium text-gray-900 cursor-pointer">
                    Mensajes directos
                  </Label.Root>
                  <p className="text-xs text-gray-500">En tiempo real en el navegador</p>
                </div>
                <Toggle
                  id="push-messages"
                  enabled={notifications.pushMessages}
                  onChange={() => handleToggle('pushMessages')}
                />
              </div>
            </div>
          </div>

          {/* Frecuencia de resumen */}
          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Resumen de actividad
            </h2>
            <div>
              <Label.Root htmlFor="digest-frequency" className="block text-sm font-medium text-gray-900 mb-2">
                Frecuencia de envío
              </Label.Root>
              <Select.Root value={notifications.digestFrequency} onValueChange={handleSelectChange}>
                <Select.Trigger
                  id="digest-frequency"
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
                      <Select.Item value="daily" className="relative flex items-center px-8 py-2 text-sm rounded hover:bg-purple-50 outline-none cursor-pointer data-[highlighted]:bg-purple-50">
                        <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                          <CheckIcon />
                        </Select.ItemIndicator>
                        <Select.ItemText>Diario</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="weekly" className="relative flex items-center px-8 py-2 text-sm rounded hover:bg-purple-50 outline-none cursor-pointer data-[highlighted]:bg-purple-50">
                        <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                          <CheckIcon />
                        </Select.ItemIndicator>
                        <Select.ItemText>Semanal</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="monthly" className="relative flex items-center px-8 py-2 text-sm rounded hover:bg-purple-50 outline-none cursor-pointer data-[highlighted]:bg-purple-50">
                        <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                          <CheckIcon />
                        </Select.ItemIndicator>
                        <Select.ItemText>Mensual</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="never" className="relative flex items-center px-8 py-2 text-sm rounded hover:bg-purple-50 outline-none cursor-pointer data-[highlighted]:bg-purple-50">
                        <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                          <CheckIcon />
                        </Select.ItemIndicator>
                        <Select.ItemText>Nunca</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
              <p className="text-xs text-gray-500 mt-1">
                Recibe un resumen de la actividad en tu bandeja de entrada
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
          >
            Guardar preferencias
          </button>
        </div>
      </form>
    </div>
  )
}
