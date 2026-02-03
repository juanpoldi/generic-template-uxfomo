export default function Tag({ children, href = '#', className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors ${className}`}
    >
      {children}
    </a>
  )
}
