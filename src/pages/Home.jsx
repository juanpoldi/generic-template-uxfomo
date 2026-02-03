import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Bienvenido a UX fomo
        </h1>
        <p className="text-gray-600 mb-6">
          Este es el template base sin sidebar, ideal para tu página principal. 
          Aquí puedes colocar tu contenido principal de forma amplia y sin restricciones laterales.
        </p>
        
        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Características del layout
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Layout limpio de una columna</li>
            <li>• Ancho máximo de 1280px (max-w-7xl)</li>
            <li>• Padding responsive para todos los dispositivos</li>
            <li>• Header sticky con navegación completa</li>
            <li>• Footer con información y enlaces útiles</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
            Explora el template con sidebar
          </h2>
          <p className="text-gray-600 mb-4">
            ¿Necesitas un layout con sidebar? Navega a la página de ejemplo con sidebar 
            desde el menú de navegación para ver todas las posibilidades.
          </p>
        </div>
      </div>
    </Layout>
  )
}
