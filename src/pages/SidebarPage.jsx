import LayoutWithSidebar from '../components/LayoutWithSidebar'

export default function SidebarPage() {
  return (
    <LayoutWithSidebar>
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Template con Sidebar
        </h1>
        <p className="text-gray-600 mb-6">
          Este espacio está listo para tu contenido principal. El sidebar a la derecha 
          contiene widgets útiles como navegación rápida, contenido destacado, newsletter 
          y categorías.
        </p>
        
        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Características del layout
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Layout de dos columnas: contenido principal + sidebar</li>
            <li>• Sidebar sticky en desktop (se queda fijo al hacer scroll)</li>
            <li>• En móvil, el sidebar se muestra debajo del contenido</li>
            <li>• Ancho máximo de 320px para el sidebar</li>
            <li>• Espaciado consistente con el sistema de diseño UX fomo</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
            Widgets del sidebar
          </h2>
          <p className="text-gray-600 mb-4">
            El sidebar incluye varios widgets modulares que puedes personalizar:
          </p>
          <ol className="space-y-2 text-gray-600">
            <li>1. <strong>Navegación rápida</strong>: Enlaces principales</li>
            <li>2. <strong>Contenido destacado</strong>: Artículos recientes</li>
            <li>3. <strong>Newsletter</strong>: Formulario de suscripción compacto</li>
            <li>4. <strong>Categorías</strong>: Tags interactivos</li>
          </ol>
        </div>
      </div>
    </LayoutWithSidebar>
  )
}
