import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSession } from '../context/SessionContext'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Dialog from '@radix-ui/react-dialog'
import * as Avatar from '@radix-ui/react-avatar'
import Logo from './Logo'
import SearchBar from './SearchBar'

const NAV_ITEMS = [
  { label: 'Comunidad', links: [{ href: '#', text: 'Miembros' }, { href: '#', text: 'Eventos' }, { href: '#', text: 'Proyectos' }] },
  { label: 'Recursos', links: [{ href: '#', text: 'Artículos' }, { href: '#', text: 'Herramientas' }, { href: '#', text: 'Guías' }] },
  { label: 'Aprende', links: [{ href: '#', text: 'Cursos' }, { href: '#', text: 'Tutoriales' }, { href: '#', text: 'Casos de estudio' }] },
  { label: 'Conversaciones', links: [{ href: '#', text: 'Foro' }, { href: '#', text: 'Debates' }, { href: '#', text: 'Preguntas' }] },
  { label: 'Templates', links: [{ href: '/sidebar', text: 'Con Sidebar', internal: true }, { href: '/radix-demo', text: 'Demo Radix UI', internal: true }] },
  { label: 'Acerca de', links: [{ href: '#', text: 'Quiénes somos' }, { href: '#', text: 'Misión' }, { href: '#', text: 'Contacto' }] },
]

function ChevronDown({ className = 'w-4 h-4 ml-1' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function SearchIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

function MenuIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export default function Header() {
  const { session, login, logout } = useSession()
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileOpenItems, setMobileOpenItems] = useState(new Set())

  const toggleMobileItem = (label) => {
    setMobileOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(label)) next.delete(label)
      else next.add(label)
      return next
    })
  }

  return (
    <>
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-gray-900 hover:text-gray-700 transition-colors">
              <Logo className="h-8" />
            </Link>
          </div>

          {/* Desktop Navigation con Radix UI DropdownMenu */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <DropdownMenu.Root key={item.label}>
                <DropdownMenu.Trigger asChild>
                  <button
                    type="button"
                    className="nav-item px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors flex items-center"
                  >
                    {item.label}
                    <ChevronDown />
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content 
                    className="w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 z-50"
                    sideOffset={8}
                  >
                    {item.links.map((link) => (
                      <DropdownMenu.Item key={link.text} asChild>
                        {link.internal ? (
                          <Link to={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 outline-none cursor-pointer">
                            {link.text}
                          </Link>
                        ) : (
                          <a href={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 outline-none cursor-pointer">
                            {link.text}
                          </a>
                        )}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              aria-label="Buscar"
            >
              <SearchIcon />
            </button>

            {!session ? (
              <button
                type="button"
                onClick={login}
                className="btn-primary px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
              >
                Iniciar sesión
              </button>
            ) : (
              <>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button
                      type="button"
                      className="avatar-button outline-none"
                    >
                      <Avatar.Root className="w-9 h-9 rounded-full bg-purple-600 text-white font-medium text-sm flex items-center justify-center hover:bg-purple-700 transition-colors">
                        <Avatar.Fallback className="flex items-center justify-center w-full h-full">
                          {session.initials || 'JD'}
                        </Avatar.Fallback>
                      </Avatar.Root>
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content 
                      className="w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 z-50"
                      sideOffset={8}
                      align="end"
                    >
                      <DropdownMenu.Item asChild>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 outline-none cursor-pointer">
                          Mi perfil
                        </a>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item asChild>
                        <Link to="/configuracion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 outline-none cursor-pointer">
                          Configuración
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator className="my-1 border-t border-gray-200 md:hidden" />
                      <DropdownMenu.Item asChild className="md:hidden">
                        <button
                          type="button"
                          onClick={logout}
                          className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 outline-none cursor-pointer"
                        >
                          Cerrar sesión
                        </button>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
                <button
                  type="button"
                  onClick={logout}
                  className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Cerrar sesión
                </button>
              </>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              aria-label="Menú"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => toggleMobileItem(item.label)}
                  className="mobile-nav-toggle w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${mobileOpenItems.has(item.label) ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileOpenItems.has(item.label) && (
                  <div className="pl-4 pt-2 space-y-1">
                    {item.links.map((link) => (
                      link.internal ? (
                        <Link
                          key={link.text}
                          to={link.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                        >
                          {link.text}
                        </Link>
                      ) : (
                        <a
                          key={link.text}
                          href={link.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                        >
                          {link.text}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>

    {/* Dialog para el buscador con Radix UI */}
    <Dialog.Root open={searchOpen} onOpenChange={setSearchOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-white/30 backdrop-blur-[16px] z-40" />
        <Dialog.Content className="fixed top-16 left-0 right-0 z-50">
          <SearchBar 
            onSearch={(value) => {
              console.log('Buscando:', value)
              // Aquí puedes agregar la lógica de búsqueda
            }}
            onClose={() => setSearchOpen(false)}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    </>
  )
}
