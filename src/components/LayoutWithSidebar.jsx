import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function LayoutWithSidebar({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-inter">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
            {/* Contenido principal */}
            <div className="min-w-0">
              {children}
            </div>
            
            {/* Sidebar - en móvil va abajo, en desktop a la derecha */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
