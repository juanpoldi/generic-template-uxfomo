import { Card, CardTitle, NavLink, ArticleCard, Tag } from './ui'

const quickLinks = [
  { href: '#', text: 'Inicio' },
  { href: '#', text: 'Comunidad' },
  { href: '#', text: 'Recursos' },
  { href: '#', text: 'Aprende' },
]

const featuredArticles = [
  {
    title: 'Título del artículo destacado',
    description: 'Breve descripción del contenido que captura la atención.',
    time: 'Hace 2 horas',
    href: '#',
  },
  {
    title: 'Otro contenido relevante',
    description: 'Descripción breve y directa del tema tratado.',
    time: 'Hace 5 horas',
    href: '#',
  },
  {
    title: 'Más contenido interesante',
    description: 'Resumen conciso que genera interés en el lector.',
    time: 'Ayer',
    href: '#',
  },
]

const categories = [
  { text: 'UX Design', href: '#' },
  { text: 'UI Patterns', href: '#' },
  { text: 'Research', href: '#' },
  { text: 'Accessibility', href: '#' },
  { text: 'Tools', href: '#' },
  { text: 'Community', href: '#' },
]

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Navegación rápida */}
      <Card>
        <CardTitle>Navegación rápida</CardTitle>
        <nav className="space-y-2">
          {quickLinks.map((link) => (
            <NavLink key={link.text} href={link.href}>
              {link.text}
            </NavLink>
          ))}
        </nav>
      </Card>

      {/* Contenido destacado */}
      <Card>
        <CardTitle>Destacado</CardTitle>
        <div className="space-y-4">
          {featuredArticles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              time={article.time}
              href={article.href}
            />
          ))}
        </div>
      </Card>

      {/* Categorías */}
      <Card>
        <CardTitle>Categorías</CardTitle>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Tag key={category.text} href={category.href}>
              {category.text}
            </Tag>
          ))}
        </div>
      </Card>
    </aside>
  )
}
