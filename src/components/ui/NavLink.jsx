export default function NavLink({ href = '#', children, className = '' }) {
  return (
    <a
      href={href}
      className={`block text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors ${className}`}
    >
      {children}
    </a>
  )
}
