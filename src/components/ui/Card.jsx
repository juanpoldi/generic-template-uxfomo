export default function Card({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-white border border-gray-200',
    highlighted: 'bg-purple-50 border border-purple-100',
  }

  return (
    <div className={`rounded-lg p-6 ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}
