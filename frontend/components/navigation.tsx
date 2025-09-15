"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogOut } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="container mx-auto">
        <div className="bg-card/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg dark:shadow-black/20">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-display text-2xl font-bold text-foreground">Opous</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {isAuthenticated && (
                <>
                  <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                    Dashboard
                  </Link>
                  <Link href="/tools" className="text-muted-foreground hover:text-foreground transition-colors">
                    Tools
                  </Link>
                  <Link href="/chat" className="text-muted-foreground hover:text-foreground transition-colors">
                    Chat
                  </Link>
                  <Link href="/settings" className="text-muted-foreground hover:text-foreground transition-colors">
                    Settings
                  </Link>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                  <a href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </>
              )}
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />

              <div className="hidden md:flex items-center space-x-2">
                {isAuthenticated ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="rounded-full flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {user?.username}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48 rounded-3xl">
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard" className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={logout} className="flex items-center gap-2 text-red-600">
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                    <Link href="/signin">
                      <Button variant="ghost" className="rounded-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button className="rounded-full">Get Started</Button>
                    </Link>
                  </>
                )}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-card/90 backdrop-blur-md border border-border rounded-3xl p-6 shadow-lg dark:shadow-black/20">
            <nav className="flex flex-col space-y-4">
              {isAuthenticated ? (
                <>
                  <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                    Dashboard
                  </Link>
                  <Link href="/tools" className="text-muted-foreground hover:text-foreground transition-colors">
                    Tools
                  </Link>
                  <Link href="/chat" className="text-muted-foreground hover:text-foreground transition-colors">
                    Chat
                  </Link>
                  <Link href="/settings" className="text-muted-foreground hover:text-foreground transition-colors">
                    Settings
                  </Link>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {user?.username}
                    </div>
                    <Button
                      onClick={logout}
                      variant="outline"
                      className="w-full rounded-full text-red-600 bg-transparent"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                  <a href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </a>
                  <Link href="/chat">
                    <Button className="w-full rounded-full">Try Demo</Button>
                  </Link>
                  <div className="pt-4 border-t border-border space-y-2">
                    <Link href="/signin">
                      <Button variant="ghost" className="w-full rounded-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button className="w-full rounded-full">Get Started</Button>
                    </Link>
                  </div>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
