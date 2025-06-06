import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TherapyPage() {
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
    {
      title: "Trauma-Focused Therapy",
      description:
        "Specialized treatment designed to help individuals process and heal from traumatic experiences using evidence-based approaches.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/therapy/trauma-focused",
    },
    {
      title: "EMDR Therapy",
      description:
        "Eye Movement Desensitization and Reprocessing therapy that helps process traumatic memories and reduce their emotional impact.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/therapy/emdr",
    },
    {
      title: "Virtual Therapy",
      description:
        "Convenient online therapy sessions that provide the same quality care from the comfort of your own space.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/therapy/virtual",
    },
  ]

  const faqs = [
    {
      question: "How do I know which type of therapy is right for me?",
      answer:
        "During our initial consultation, we'll discuss your specific concerns, goals, and preferences. I'll help you understand which therapeutic approaches might be most beneficial for your situation. Often, we may combine multiple approaches as your therapy progresses.",
    },
    {
      question: "Can therapy approaches be combined?",
      answer:
        "I often integrate multiple therapeutic approaches to create a personalized treatment plan that addresses your unique needs. For example, we might combine trauma-focused therapy with mindfulness techniques and family systems work.",
    },
    {
      question: "How long does each type of therapy typically take?",
      answer:
        "The duration varies depending on your individual needs and goals. Some clients see significant improvement in 8-12 sessions, while others benefit from longer-term therapy. We'll regularly assess your progress and adjust our approach as needed.",
    },
    {
      question: "Do you provide therapy for children and adolescents?",
      answer:
        "I specialize in working with adults, couples, and families. For children and adolescents, I can provide family therapy that includes them, or I can refer you to colleagues who specialize in child and adolescent therapy.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Therapeutic <em className="text-purple-700">Services</em> & Approaches
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the range of evidence-based therapeutic approaches I use to help you heal, grow, and thrive. Each
            approach is tailored to your unique needs and goals.
          </p>
        </div>
      </section>

      {/* Therapy Types Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapyTypes.map((therapy, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                  <Image src={therapy.image || "/placeholder.svg"} alt={therapy.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{therapy.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{therapy.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={therapy.href}>Learn more</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">Common questions about our therapeutic approaches</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border-0">
                  <AccordionTrigger className="px-6 py-4 text-left font-serif font-semibold text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
