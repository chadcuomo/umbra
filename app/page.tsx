import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const therapyTypes = [
    {
      title: "Family Systems Therapy",
      description:
        "A therapy that focuses on resolving individual problems by understanding family dynamics, aiming to restore balance and improve relationships within the family unit.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/therapy/family-systems",
    },
    {
      title: "Mindfulness Therapy",
      description:
        "A practice that helps you stay present, reduce anxiety, and manage stress through awareness and acceptance.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/therapy/mindfulness",
    },
    {
      title: "Attachment-Based Therapy",
      description:
        "A form of therapy that helps you heal relational wounds and build stronger, healthier connections with others.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/therapy/attachment-based",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-purple-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block bg-gray-900 text-gray-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Now taking new clients in Tennessee & North Carolina
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Own Your Story. <br />
              <span className="text-purple-700">Heal</span> Your Shadows. <br />
              <em className="text-gray-700">Thrive</em> in Your Light.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Deep, transformative therapy that goes beyond coping. Break the patterns, heal the wounds, and step into
              your power.
            </p>
            <Button size="lg" asChild className="btn-primary text-lg px-8 py-4">
              <Link href="/booking">Book a Consult</Link>
            </Button>
          </div>
        </div>

        {/* Diverse people images */}
        <div className="mt-16 overflow-hidden">
          <div className="flex space-x-4 animate-scroll">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Diverse therapy clients"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Diverse therapy clients"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Diverse therapy clients"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Diverse therapy clients"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-purple-700 mb-4 block">What we do</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
                Therapy That <em className="text-purple-700">Works</em>: Because You Deserve More Than Just{" "}
                <em className="text-gray-600">Coping</em>
              </h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p>
                  You're a high achiever who's tired of spinning your wheels. Behind the success, you're battling
                  overthinking, perfectionism, and trauma that even the best self-help hacks can't fix.
                </p>
                <p>
                  <strong className="text-gray-900">That's where I come in</strong>: real, deep healing that works—no
                  band-aids, just breakthroughs. Whether it's toxic cycles, attachment issues, or life feeling like an
                  endless stress spiral, you don't have to navigate it alone.
                </p>
                <p>
                  With my personalized, trauma-informed approach, we'll tackle the roots of your struggles, break the
                  patterns holding you back, and empower you to thrive on your terms.
                </p>
                <p className="font-medium text-gray-900">No quick fixes—just lasting transformation.</p>
              </div>
              <Button asChild className="btn-accent">
                <Link href="/booking">Take the First Step</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Hands with flowers representing healing and growth"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Therapy Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Types of <em className="text-purple-700">therapy</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {therapyTypes.map((therapy, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                  <Image src={therapy.image || "/placeholder.svg"} alt={therapy.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{therapy.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{therapy.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={therapy.href}>Read more</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/therapy">View all therapies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Kelsey, therapist at Umbra Therapy"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <span className="text-sm font-medium text-purple-700 mb-4 block">About your therapist</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
                Meet <em className="text-purple-700">Kelsey</em>: Your Partner in{" "}
                <em className="text-gray-600">Healing & Growth</em>
              </h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p>
                  Kelsey is a licensed Marriage and Family Therapist specializing in trauma recovery, attachment issues,
                  and family dynamics. With years of experience in diverse therapeutic settings, she has dedicated her
                  career to helping clients heal from complex trauma, build healthier relationships, and break
                  generational cycles.
                </p>
                <p>
                  Her approach is holistic and deeply personalized because healing isn't just about feeling better—it's
                  about thriving in every part of your life.
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/about">Learn more about Kelsey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
          }}
        ></div>
        <div className="relative container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Supporting <em className="text-purple-300">you</em> every step <br />
            of the <em className="text-rose-300">way</em>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Your healing journey doesn't stop when you leave a session—you can reach out whenever it's needed.
          </p>
          <Button size="lg" asChild className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-4">
            <Link href="/booking">Book a Session</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
