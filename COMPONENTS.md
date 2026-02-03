# Guía de Componentes UI Reutilizables

Este documento lista todos los componentes UI reutilizables del template y cómo usarlos.

## 🎯 Filosofía

Todos los componentes están diseñados para ser:
- **Reutilizables**: Se pueden usar en múltiples contextos
- **Componibles**: Se pueden combinar para crear interfaces complejas
- **Consistentes**: Mantienen el sistema de diseño UX fomo
- **Personalizables**: Aceptan className y props para extenderlos
- **Accesibles**: Integración con Radix UI para cumplir estándares WAI-ARIA

## 🚀 Actualización Radix UI

Este template utiliza componentes de [Radix UI](https://www.radix-ui.com/) para mejorar la accesibilidad y experiencia de usuario. Los componentes Radix implementados incluyen:
- **DropdownMenu**: Menús desplegables en navegación y perfil
- **Dialog**: Modal de búsqueda con overlay
- **Avatar**: Avatares de usuario con fallback
- **Checkbox**: Checkboxes accesibles con estados visuales
- **Switch**: Toggles para configuraciones
- **Select**: Selectores personalizados con indicadores
- **Label**: Labels accesibles asociados a controles

Ver `RADIX_UI_UPGRADE.md` para detalles completos de la implementación.

## 📦 Componentes disponibles

### `<Card>`
Contenedor base para widgets y secciones.

**Props:**
- `variant`: `'default'` | `'highlighted'` (default: `'default'`)
- `className`: clases CSS adicionales
- `children`: contenido del card

**Ejemplo:**
```jsx
import { Card } from './components/ui'

<Card variant="highlighted">
  Contenido destacado
</Card>
```

---

### `<CardTitle>`
Título consistente para cards y secciones.

**Props:**
- `className`: clases CSS adicionales
- `children`: texto del título

**Ejemplo:**
```jsx
import { CardTitle } from './components/ui'

<CardTitle>Mi título</CardTitle>
```

---

### `<Tag>`
Badge/Tag interactivo para categorías y etiquetas.

**Props:**
- `href`: URL del enlace (default: `'#'`)
- `className`: clases CSS adicionales
- `children`: texto del tag

**Ejemplo:**
```jsx
import { Tag } from './components/ui'

<Tag href="/categoria/ux-design">UX Design</Tag>
<Tag href="/categoria/research">Research</Tag>
```

---

### `<NavLink>`
Enlace de navegación con estilos consistentes.

**Props:**
- `href`: URL del enlace (default: `'#'`)
- `className`: clases CSS adicionales
- `children`: texto del enlace

**Ejemplo:**
```jsx
import { NavLink } from './components/ui'

<nav className="space-y-2">
  <NavLink href="/">Inicio</NavLink>
  <NavLink href="/comunidad">Comunidad</NavLink>
  <NavLink href="/recursos">Recursos</NavLink>
</nav>
```

---

### `<ArticleCard>`
Card para mostrar artículos destacados.

**Props:**
- `title`: título del artículo (requerido)
- `description`: descripción breve (requerido)
- `time`: timestamp o fecha (requerido)
- `href`: URL del artículo (default: `'#'`)

**Ejemplo:**
```jsx
import { ArticleCard } from './components/ui'

<ArticleCard
  title="Cómo mejorar la UX de tu app"
  description="Aprende técnicas probadas para diseñar experiencias memorables."
  time="Hace 2 horas"
  href="/articulos/mejorar-ux"
/>
```

---

### `<NewsletterForm>`
Formulario de newsletter configurable.

**Props:**
- `title`: título del formulario (default: `'Newsletter'`)
- `description`: descripción breve (default: mensaje genérico)
- `buttonText`: texto del botón (default: `'Suscribir'`)
- `showConsent`: mostrar checkbox de consentimiento (default: `false`)

**Ejemplo:**
```jsx
import { NewsletterForm } from './components/ui'

// Versión simple
<NewsletterForm />

// Versión con consentimiento
<NewsletterForm
  title="Recibe nuestro boletín"
  description="Las mejores noticias de UX, cada semana."
  buttonText="Suscribirme"
  showConsent={true}
/>
```

---

### `<FooterSection>`
Sección del footer con lista de enlaces.

**Props:**
- `title`: título de la sección (requerido)
- `links`: array de objetos `{ href, text }` (requerido)

**Ejemplo:**
```jsx
import { FooterSection } from './components/ui'

const links = [
  { href: '/miembros', text: 'Miembros' },
  { href: '/eventos', text: 'Eventos' },
  { href: '/proyectos', text: 'Proyectos' },
]

<FooterSection title="Comunidad" links={links} />
```

---

## 🔧 Importación

Puedes importar componentes individualmente o todos juntos:

```jsx
// Individual
import Card from './components/ui/Card'
import Tag from './components/ui/Tag'

// Desde barrel export (recomendado)
import { Card, Tag, ArticleCard, NewsletterForm } from './components/ui'
```

---

## 💡 Ejemplos de uso combinado

### Widget de navegación rápida
```jsx
import { Card, CardTitle, NavLink } from './components/ui'

function QuickNav() {
  return (
    <Card>
      <CardTitle>Navegación rápida</CardTitle>
      <nav className="space-y-2">
        <NavLink href="/">Inicio</NavLink>
        <NavLink href="/comunidad">Comunidad</NavLink>
        <NavLink href="/recursos">Recursos</NavLink>
      </nav>
    </Card>
  )
}
```

### Widget de artículos destacados
```jsx
import { Card, CardTitle, ArticleCard } from './components/ui'

function FeaturedArticles({ articles }) {
  return (
    <Card>
      <CardTitle>Destacado</CardTitle>
      <div className="space-y-4">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.description}
            time={article.time}
            href={article.href}
          />
        ))}
      </div>
    </Card>
  )
}
```

### Widget de categorías
```jsx
import { Card, CardTitle, Tag } from './components/ui'

function Categories({ categories }) {
  return (
    <Card>
      <CardTitle>Categorías</CardTitle>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Tag key={cat.slug} href={`/categoria/${cat.slug}`}>
            {cat.name}
          </Tag>
        ))}
      </div>
    </Card>
  )
}
```

---

## 🎨 Personalización

Todos los componentes aceptan `className` para extender estilos:

```jsx
<Card className="shadow-xl border-2 border-purple-500">
  <CardTitle className="text-purple-600">
    Título personalizado
  </CardTitle>
</Card>

<Tag className="bg-purple-100 text-purple-700">
  Tag personalizado
</Tag>
```

---

## ✅ Buenas prácticas

1. **Usa los componentes UI en lugar de repetir código**
   ```jsx
   // ❌ Mal
   <div className="bg-white border border-gray-200 rounded-lg p-6">
     <h3 className="text-sm font-semibold text-gray-900 mb-4">Título</h3>
     ...
   </div>

   // ✅ Bien
   <Card>
     <CardTitle>Título</CardTitle>
     ...
   </Card>
   ```

2. **Extrae datos a constantes**
   ```jsx
   // ✅ Bien
   const quickLinks = [
     { href: '/', text: 'Inicio' },
     { href: '/comunidad', text: 'Comunidad' },
   ]

   quickLinks.map(link => <NavLink href={link.href}>{link.text}</NavLink>)
   ```

3. **Combina componentes para crear widgets complejos**
   ```jsx
   <Card variant="highlighted">
     <CardTitle>Mi widget</CardTitle>
     <ArticleCard {...article} />
     <div className="mt-4">
       <Tag>Etiqueta</Tag>
     </div>
   </Card>
   ```

---

**Principio rector**: Si se entiende mejor, es mejor. La claridad siempre gana.
