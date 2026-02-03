export default function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-sm font-semibold text-gray-900 mb-4 ${className}`}>
      {children}
    </h3>
  )
}
