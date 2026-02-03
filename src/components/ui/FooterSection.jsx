export default function FooterSection({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
