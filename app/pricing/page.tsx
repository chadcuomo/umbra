import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Individual Therapy",
      price: "$150",
      duration: "50 minutes",
      description: "One-on-one sessions focused on your personal healing journey",
      features: [
        "Personalized treatment plan",
        "Trauma-informed approach",
        "Flexible scheduling",
        "Between-session support",
        "Progress tracking",
      ],
      popular: false,
    },
    {
      name: "Couples Therapy",
      price: "$200",
      duration: "80 minutes",
      description: "Relationship healing and strengthening for couples",
      features: [
        "Relationship assessment",
        "Communication skills training",
        "Conflict resolution techniques",
        "Attachment-focused approach",
        "Homework assignments",
        "Progress check-ins",
      ],
      popular: true,
    },
    {
      name: "Family Therapy",
      price: "$220",
      duration: "80 minutes",
      description: "Family systems approach to healing generational patterns",
      features: [
        "Family dynamics assessment",
        "Generational pattern work",
        "Communication improvement",
        "Boundary setting support",
        "Individual and group sessions",
        "Family homework exercises",
      ],
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        "Currently, I operate as an out-of-network provider. I can provide you with a superbill that you can submit to your insurance company for potential reimbursement. Many clients find that the investment in quality care is worth the out-of-pocket cost.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "I accept cash, check, and all major credit cards. Payment is due at the time of service. I also offer payment plans for those who need financial flexibility.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "I require 24 hours notice for cancellations. Late cancellations or no-shows will be charged the full session fee. Emergency situations are handled on a case-by-case basis.",
    },
    {
      question: "How often should I attend therapy sessions?",
      answer:
        "Most clients benefit from weekly sessions initially. As progress is made, we may adjust to bi-weekly or monthly sessions. The frequency depends on your individual needs and goals.",
    },
    {
      question: "Do you offer sliding scale fees?",
      answer:
        "I have a limited number of sliding scale spots available for those experiencing financial hardship. Please reach out to discuss your situation and we can explore options together.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Transparent <em className="text-purple-700">Pricing</em> for Quality Care
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Investing in your mental health is one of the most important decisions you can make. Our pricing reflects
            the quality, expertise, and personalized care you deserve.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg ${plan.popular ? "ring-2 ring-purple-600" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-purple-700">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/ {plan.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${plan.popular ? "btn-primary" : "btn-secondary"}`}>
                    <Link href="/booking">Book Session</Link>
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
              <p className="text-lg text-gray-600">Everything you need to know about pricing and policies</p>
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
