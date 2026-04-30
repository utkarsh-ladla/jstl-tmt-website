'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is JSTL TMT Bars?',
    answer:
      'JSTL TMT Bars are high-strength Thermo-Mechanically Treated steel bars manufactured to deliver superior strength, flexibility, and durability for modern construction needs.',
  },
  {
    question: 'Who manufactures JSTL TMT Bars?',
    answer:
      'JSTL TMT Bars are a product of Jindal Steel Tubes Ltd. The brand is part of a trusted steel legacy focused on quality-driven construction materials.',
  },
  {
    question: 'Are JSTL TMT Bars BIS certified?',
    answer:
      'Yes, JSTL TMT Bars are manufactured as per BIS standards to ensure safety, quality, and compliance with Indian construction norms.',
  },
  {
    question: 'What sizes are available in JSTL TMT Bars?',
    answer:
      'JSTL TMT Bars are available in multiple diameters ranging from 8mm to 32mm, suitable for residential, commercial, and infrastructure projects.',
  },
  {
    question: 'What makes JSTL TMT Bars strong?',
    answer:
      'They are manufactured using advanced thermo-mechanical treatment processes that provide: High tensile strength, Excellent ductility, Earthquake resistance, and Superior bonding with concrete.',
  },
  {
    question: 'Where can JSTL TMT Bars be used?',
    answer:
      'They are widely used in residential buildings, commercial complexes, bridges & highways, and industrial structures.',
  },
  {
    question: 'How is quality ensured in JSTL TMT Bars?',
    answer:
      'Each batch undergoes strict quality testing including tensile strength, bend tests, and elongation checks to ensure consistent performance.',
  },
  {
    question: 'What is the role of Khyati Infra Mart and Khyati Contech Private Limited?',
    answer:
      'Khyati Infra Mart, operated under Khyati Contech Private Limited (CIN: U46632DL2026PTC464070), is involved in structured infrastructure distribution, branding, and supply ecosystem development for construction materials.',
  },
  {
    question: 'Is JSTL TMT available across India?',
    answer:
      'Yes, JSTL TMT Bars are being expanded across multiple regions in India through a growing distribution and partner network.',
  },
  {
    question: 'How can I become a distributor or partner?',
    answer:
      'Interested partners can connect through official JSTL or Khyati Infra Mart channels for dealership and distribution opportunities.',
  },
  {
    question: 'What is the brand philosophy of JSTL TMT?',
    answer:
      'JSTL TMT stands for strength, reliability, and trust in every bar delivered to construction sites across India.',
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing depends on market conditions, order volume, and regional logistics. JSTL focuses on competitive and transparent pricing.',
  },
  {
    question: 'How do I contact JSTL support?',
    answer:
      'Customers and partners can reach out via the official website contact form for sales, support, and partnership queries.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-black py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg">
            JSTL TMT Bars – Jindal Steel Tubes Ltd
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm px-6"
            >
              <AccordionTrigger className="text-white hover:text-accent py-6 text-lg md:text-xl font-semibold no-underline hover:no-underline transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base md:text-lg pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <p className="text-accent font-bold text-xl md:text-2xl italic">
            JSTL TMT Bars – Built Strong. Built to Last.
          </p>
        </div>
      </div>
    </section>
  )
}
