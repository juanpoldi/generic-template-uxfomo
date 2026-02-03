import Logo from './Logo'
import { FooterSection, NewsletterForm } from './ui'

const communityLinks = [
  { href: '#', text: 'Miembros' },
  { href: '#', text: 'Eventos' },
  { href: '#', text: 'Proyectos' },
  { href: '#', text: 'Foro' },
]

const resourceLinks = [
  { href: '#', text: 'Artículos' },
  { href: '#', text: 'Herramientas' },
  { href: '#', text: 'Guías' },
  { href: '#', text: 'Cursos' },
]

const legalLinks = [
  { href: '#', text: 'Aviso legal' },
  { href: '#', text: 'Privacidad' },
  { href: '#', text: 'Cookies' },
  { href: '#', text: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <a href="/" className="text-gray-900 hover:text-gray-700 transition-colors inline-block">
              <Logo className="h-10" />
            </a>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Comunidad orientada a lectura, contenido y conversación sobre diseño de experiencias.
            </p>
          </div>

          {/* Sección Comunidad */}
          <FooterSection title="Comunidad" links={communityLinks} />

          {/* Sección Recursos */}
          <FooterSection title="Recursos" links={resourceLinks} />

          {/* Newsletter */}
          <div>
            <NewsletterForm
              title="Newsletter"
              description="Recibe contenido y novedades de la comunidad."
              buttonText="Suscribir"
              showConsent={true}
            />
          </div>
        </div>

        {/* Legal */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 UX fomo. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
