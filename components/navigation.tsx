"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/booking", label: "Book Session" },
    { href: "/pricing", label: "Pricing" },
    { href: "/therapy", label: "Services" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 bg-gray-900">
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-gray-200 hover:text-purple-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-stone-200">
                <p className="text-sm text-gray-400 mb-2">Contact</p>
                <p className="text-sm text-gray-300">hello@umbratherapy.com</p>
                <p className="text-sm text-gray-300">Charlotte, NC</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-serif font-bold text-white">
            Umbra <span className="text-purple-400">Therapy</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-200 hover:text-purple-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden sm:inline-flex border-gray-600 text-gray-200 hover:bg-gray-800 hover:text-white"
          >
            <Link href="/portal">Existing Clients</Link>
          </Button>
          <Button size="sm" asChild className="btn-primary">
            <Link href="/booking">Book a Consult</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
