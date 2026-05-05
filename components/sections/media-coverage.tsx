'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const articles = [
  {
    title: "JSTL Enters TMT Segment with a New Industry-First Approach",
    source: "Hindustan Metro",
    date: "",
    link: "https://hindustanmetro.com/jindal-steel-tubes-ltd-enters-tmt-bars-segment-in-collaboration-with-khyati-infra-mart-khyati-contech-pvt-ltd-under-the-brand-jstl-tmt-bars"
  },
  {
    title: "Jindal Steel Tubes Partners with Khyati Infra Mart to Launch JSTL TMT Bars",
    source: "UP18 News",
    date: "",
    link: "https://up18news.com/jindal-steel-tubes-ltd-enters-tmt-bars-segment-in-collaboration-with-khyati-infra-mart-khyati-contech-pvt-ltd-under-the-brand-jstl-tmt-bars/"
  },
  {
    title: "JSTL Introduces Transparent & Process-Driven TMT Distribution Model",
    source: "Loktej English",
    date: "",
    link: "https://english.loktej.com/article/26279/jindal-steel-tubes-ltd-enters-tmt-bars-segment-in-collaboration-with-khyati-infra-mart--khyati-contech-pvt-ltd--under-the-brand-jstl-tmt-bars"
  },
  {
    title: "JSTL Expands into TMT Bars with Focus on Quality, Testing & Trust",
    source: "Dailyhunt",
    date: "",
    link: "https://m.dailyhunt.in/news/india/english/loktej+english-epaper-loktejen/jindal+steel+tubes+ltd+enters+tmt+bars+segment+in+collaboration+with+khyati+infra+mart+khyati+contech+pvt+ltd+under+the+brand+jstl+tmt+bars-newsid-n711014743"
  },
 
];
// const articles = [
//   {
//     title: "JSTL TMT Bars Redefining Construction Strength with Superior Ductility",
//     source: "Steel Insider",
//     date: "April 2024",
//     link: "#"
//   },
//   {
//     title: "How Jindal Steel Tubes Ltd is Leading the Way in On-Site TMT Testing",
//     source: "Construction Week",
//     date: "March 2024",
//     link: "#"
//   },
//   {
//     title: "JSTL TMT: A Legacy of 50 Years in Building a Stronger India",
//     source: "Business Standard",
//     date: "February 2024",
//     link: "#"
//   },
//   {
//     title: "The Science Behind JSTL TMT's Earthquake-Resistant HYQST Technology",
//     source: "Tech Engineering",
//     date: "January 2024",
//     link: "#"
//   },
//   {
//     title: "JSTL TMT Expands its Footprint with Exclusive Brand Stores Across North India",
//     source: "Economic Times (Retail)",
//     date: "December 2023",
//     link: "#"
//   }
// ]

export default function MediaCoverage() {
  return (
    <section className="py-20 bg-background border-t border-border/50 overflow-hidden">
      {/* Full-width Banner Image */}
      <div className="w-full mb-16 px-0 md:px-4 lg:px-8 max-w-[1920px] mx-auto">
        <img
          src="/featuresIn.jpeg"
          alt="Featured In Media"
          className="w-full h-auto object-cover md:rounded-2xl shadow-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-4">
            JSTL IN THE MEDIA
          </h2>
          <div className="w-32 h-1.5 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-accent/5 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-2 py-1 rounded">
                    {article.source}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-snug mb-6">
                  {article.title}
                </h3>
                <a
                  href={article.link}
                  className="inline-flex items-center text-sm font-bold text-foreground hover:gap-2 transition-all duration-300"
                >
                  Read Article
                  <ExternalLink className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
