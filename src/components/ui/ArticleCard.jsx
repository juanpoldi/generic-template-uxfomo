export default function ArticleCard({ title, description, time, href = '#' }) {
  return (
    <article className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
      <a href={href}>
        <h4 className="text-sm font-medium text-gray-900 mb-1 hover:text-purple-600 transition-colors cursor-pointer">
          {title}
        </h4>
      </a>
      <p className="text-xs text-gray-600 mb-2">{description}</p>
      <time className="text-xs text-gray-500">{time}</time>
    </article>
  )
}
