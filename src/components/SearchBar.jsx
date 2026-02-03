function SearchIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

export default function SearchBar({ 
  placeholder = 'Buscar contenido, miembros, recursos...',
  onSearch,
  onClose,
  autoFocus = true,
  className = ''
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (onSearch) {
      onSearch(searchValue)
    }
  }

  const handleContentClick = (e) => {
    // Prevenir que el clic en el contenido cierre el buscador
    e.stopPropagation()
  }

  return (
    <div className={`border-t border-gray-200 bg-white ${className}`} onClick={handleContentClick}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="search"
              name="search"
              placeholder={placeholder}
              className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              autoFocus={autoFocus}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon className="w-5 h-5" />
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
