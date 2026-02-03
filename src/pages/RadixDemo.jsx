import { useState } from 'react'
import Layout from '../components/Layout'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Dialog from '@radix-ui/react-dialog'
import * as Switch from '@radix-ui/react-switch'
import * as Select from '@radix-ui/react-select'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Label from '@radix-ui/react-label'
import * as Avatar from '@radix-ui/react-avatar'

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

export default function RadixDemo() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [switchEnabled, setSwitchEnabled] = useState(false)
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [selectValue, setSelectValue] = useState('option1')

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Demostración de Radix UI
          </h1>
          <p className="text-gray-600 mb-8">
            Este template incluye componentes Radix UI para mejorar la accesibilidad y experiencia de usuario.
          </p>

          {/* Avatar */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Avatar</h2>
            <div className="flex gap-4">
              <Avatar.Root className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-medium">
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar.Root>
              <Avatar.Root className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-medium">
                <Avatar.Fallback>AB</Avatar.Fallback>
              </Avatar.Root>
              <Avatar.Root className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-medium">
                <Avatar.Fallback>CD</Avatar.Fallback>
              </Avatar.Root>
            </div>
          </div>

          {/* DropdownMenu */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Dropdown Menu</h2>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors inline-flex items-center gap-2">
                  Abrir menú
                  <ChevronDownIcon />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className="w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 z-50" sideOffset={5}>
                  <DropdownMenu.Item className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 outline-none cursor-pointer">
                    Opción 1
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 outline-none cursor-pointer">
                    Opción 2
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className="my-1 border-t border-gray-200" />
                  <DropdownMenu.Item className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 outline-none cursor-pointer">
                    Eliminar
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>

          {/* Dialog */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Dialog (Modal)</h2>
            <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
              <Dialog.Trigger asChild>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                  Abrir Modal
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-md z-50 shadow-xl">
                  <Dialog.Title className="text-xl font-bold text-gray-900 mb-2">
                    Título del Modal
                  </Dialog.Title>
                  <Dialog.Description className="text-gray-600 mb-4">
                    Este es un modal accesible construido con Radix UI Dialog.
                  </Dialog.Description>
                  <div className="flex gap-3 justify-end">
                    <Dialog.Close asChild>
                      <button className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                        Cancelar
                      </button>
                    </Dialog.Close>
                    <button className="px-4 py-2 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700">
                      Confirmar
                    </button>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>

          {/* Switch */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Switch (Toggle)</h2>
            <div className="flex items-center gap-3">
              <Switch.Root
                id="demo-switch"
                checked={switchEnabled}
                onCheckedChange={setSwitchEnabled}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-gray-200 outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <Switch.Thumb className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1" />
              </Switch.Root>
              <Label.Root htmlFor="demo-switch" className="text-sm text-gray-700 cursor-pointer">
                {switchEnabled ? 'Activado' : 'Desactivado'}
              </Label.Root>
            </div>
          </div>

          {/* Checkbox */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Checkbox</h2>
            <div className="flex items-center gap-3">
              <Checkbox.Root
                id="demo-checkbox"
                checked={checkboxChecked}
                onCheckedChange={setCheckboxChecked}
                className="h-5 w-5 flex items-center justify-center bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1"
              >
                <Checkbox.Indicator className="text-white">
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <Label.Root htmlFor="demo-checkbox" className="text-sm text-gray-700 cursor-pointer">
                Acepto los términos y condiciones
              </Label.Root>
            </div>
          </div>

          {/* Select */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Select</h2>
            <div className="max-w-xs">
              <Label.Root htmlFor="demo-select" className="block text-sm font-medium text-gray-900 mb-2">
                Selecciona una opción
              </Label.Root>
              <Select.Root value={selectValue} onValueChange={setSelectValue}>
                <Select.Trigger
                  id="demo-select"
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
                      <Select.Item value="option1" className="relative flex items-center px-8 py-2 text-sm rounded hover:bg-purple-50 outline-none cursor-pointer data-[highlighted]:bg-purple-50">
                        <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                          <CheckIcon />
                        </Select.ItemIndicator>
                        <Select.ItemText>Opción 1</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="option2" className="relative flex items-center px-8 py-2 text-sm rounded hover:bg-purple-50 outline-none cursor-pointer data-[highlighted]:bg-purple-50">
                        <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                          <CheckIcon />
                        </Select.ItemIndicator>
                        <Select.ItemText>Opción 2</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="option3" className="relative flex items-center px-8 py-2 text-sm rounded hover:bg-purple-50 outline-none cursor-pointer data-[highlighted]:bg-purple-50">
                        <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                          <CheckIcon />
                        </Select.ItemIndicator>
                        <Select.ItemText>Opción 3</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Beneficios de Radix UI
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Accesibilidad completa según estándares WAI-ARIA</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Navegación por teclado (Tab, Enter, Escape, flechas)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Compatible con lectores de pantalla</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Gestión automática del foco y estados</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Sin estilos predefinidos - totalmente personalizable con Tailwind</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Componentes primitivos que se integran perfectamente</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
