import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Kelsey, Licensed Marriage and Family Therapist"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <span className="text-sm font-medium text-purple-700 mb-4 block">ABOUT</span>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">Kelsey Thompson</h1>
              <div className="space-y-3 mb-6">
                <p className="text-gray-700 font-medium">• Licensed Marriage & Family Therapist</p>
                <p className="text-gray-700 font-medium">• Trauma Specialist</p>
                <p className="text-gray-700 font-medium">• Empowerment Advocate</p>
                <p className="text-gray-700 font-medium">• Telehealth to reach you where you are</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <p className="text-gray-600 leading-relaxed">
                  Kelsey is a seasoned Marriage and Family Therapist specializing in trauma recovery, attachment issues,
                  and family dynamics. With six years of experience in diverse therapeutic settings, Kelsey has
                  dedicated her career to helping clients heal from complex trauma, build healthier relationships, and
                  break generational cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Finding <em className="text-purple-700">balance</em> and peace of <em className="text-gray-600">mind</em>
            </h2>

            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-gray-600">
                  <p>
                    My approach to therapy is rooted in the belief that every person has an innate capacity for healing
                    and growth. I work from a trauma-informed, attachment-based perspective, understanding that our
                    early relationships and experiences shape how we navigate the world.
                  </p>

                  <p>
                    Whether you're struggling with anxiety, depression, relationship issues, or the lingering effects of
                    trauma, I'm here to walk alongside you on your journey toward healing. My goal is to create a safe,
                    non-judgmental space where you can explore your experiences, understand your patterns, and develop
                    new ways of being in the world.
                  </p>

                  <p>
                    I believe in the power of authentic connection and the importance of feeling truly seen and
                    understood. In our work together, we'll uncover your strengths, address the roots of your struggles,
                    and create lasting change that extends far beyond our sessions.
                  </p>
                </div>

                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Peaceful therapy environment"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">My Story</h2>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6 text-gray-600">
                <p>
                  My journey into therapy began with my own healing process. Like many of my clients, I understand what
                  it's like to feel stuck, overwhelmed, and unsure of how to move forward. My personal experiences with
                  therapy showed me the transformative power of having someone truly listen and help you make sense of
                  your story.
                </p>

                <p>
                  I earned my Master's degree in Marriage and Family Therapy from [University Name] and have spent the
                  last six years working in various settings, from community mental health centers to private practice.
                  This diverse experience has given me the opportunity to work with individuals, couples, and families
                  from all walks of life.
                </p>

                <p>
                  What drives me most is witnessing the moment when a client realizes their own strength and capacity
                  for change. There's something profound about helping someone rewrite their story from one of survival
                  to one of thriving. That's the work I'm passionate about, and it's why I do what I do.
                </p>

                <p>
                  When I'm not in session, you can find me hiking with my dog, practicing yoga, or curled up with a good
                  book. I believe in practicing what I preach when it comes to self-care and maintaining balance in
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Take the first step toward lasting transformation. I'm here to support you every step of the way.
          </p>
          <Button size="lg" asChild className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4">
            <Link href="/booking">Book a Session</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
