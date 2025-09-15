"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface User {
  username: string
  businessName?: string
  email?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (username: string, businessName?: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for existing authentication on mount
    const checkAuth = () => {
      const isAuth = localStorage.getItem("isAuthenticated")
      const username = localStorage.getItem("username")
      const businessName = localStorage.getItem("businessName")

      if (isAuth === "true" && username) {
        setUser({
          username,
          businessName: businessName || undefined,
        })
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = (username: string, businessName?: string) => {
    const userData = { username, businessName }
    setUser(userData)
    localStorage.setItem("isAuthenticated", "true")
    localStorage.setItem("username", username)
    if (businessName) {
      localStorage.setItem("businessName", businessName)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("username")
    localStorage.removeItem("businessName")
    router.push("/")
  }

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
