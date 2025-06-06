import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
                Ready to Begin Your <em className="text-purple-700">Healing Journey</em>?
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Take the first step toward lasting transformation. Book your consultation today and discover how therapy
                can help you thrive.
              </p>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-700 rounded-full"></div>
                  <span>Free 15-minute consultation call</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-700 rounded-full"></div>
                  <span>Flexible scheduling options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-700 rounded-full"></div>
                  <span>In-person and virtual sessions available</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Peaceful therapy setting"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">Scheduling Information</h2>
              <p className="text-lg text-gray-600">Here's what you need to know before booking your session</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Session Types</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-700 rounded-full mt-2"></div>
                      <span>
                        <strong>Individual Therapy:</strong> 50-minute sessions
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-700 rounded-full mt-2"></div>
                      <span>
                        <strong>Couples Therapy:</strong> 80-minute sessions
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-700 rounded-full mt-2"></div>
                      <span>
                        <strong>Family Therapy:</strong> 80-minute sessions
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Availability</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-700 rounded-full mt-2"></div>
                      <span>
                        <strong>Monday - Thursday:</strong> 9:00 AM - 7:00 PM
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-700 rounded-full mt-2"></div>
                      <span>
                        <strong>Friday:</strong> 9:00 AM - 3:00 PM
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-700 rounded-full mt-2"></div>
                      <span>
                        <strong>Weekend:</strong> Limited availability
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Integration Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">Schedule Your Consultation</h2>
            <p className="text-lg text-gray-600 mb-8">
              Choose a time that works best for you. We'll discuss your goals and how therapy can help.
            </p>

            {/* Calendly Embed Placeholder */}
            <div className="bg-white rounded-lg shadow-lg p-8 min-h-[600px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Calendly Integration</h3>
                <p className="text-gray-600 mb-4">This is where your Calendly booking widget would be embedded.</p>
                <Button asChild className="btn-primary">
                  <Link href="https://calendly.com/your-booking-link" target="_blank">
                    Open Booking Calendar
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
