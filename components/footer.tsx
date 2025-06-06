import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Umbra <span className="text-purple-300">Therapy</span>
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Deep healing that works. Personalized, trauma-informed therapy to help you break patterns and thrive on
              your terms.
            </p>
            <p className="text-sm text-gray-400">Now taking new clients in Tennessee & North Carolina</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link href="/therapy" className="hover:text-purple-300 transition-colors">
                  All Therapies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-purple-300 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-purple-300 transition-colors">
                  Book Session
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link href="/about" className="hover:text-purple-300 transition-colors">
                  About Kelsey
                </Link>
              </li>
              <li>
                <Link href="/portal" className="hover:text-purple-300 transition-colors">
                  Client Portal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Umbra Therapy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-purple-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-purple-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
