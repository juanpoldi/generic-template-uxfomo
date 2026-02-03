import { createContext, useContext, useState } from 'react'

const SESSION_KEY = 'uxfomo_session'

const SessionContext = createContext(null)

export function SessionProvider({ children }) {
  const [session, setSession] = useState(() => {
    try {
      const data = localStorage.getItem(SESSION_KEY)
      return data ? JSON.parse(data) : null
    } catch {
      return null
    }
  })

  const login = () => {
    const sessionData = {
      username: 'Juan Demo',
      initials: 'JD',
      email: 'juan@uxfomo.com',
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData))
    setSession(sessionData)
  }

  const logout = () => {
    localStorage.removeItem(SESSION_KEY)
    setSession(null)
  }

  return (
    <SessionContext.Provider value={{ session, login, logout }}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const ctx = useContext(SessionContext)
  if (!ctx) throw new Error('useSession must be used within SessionProvider')
  return ctx
}
