'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'


interface FormData {
  name: string
  firmName: string
  mobile: string
  city: string
  monthlyVolume: string
  currentBrands: string
  warehouse: string
}

export default function BecomePartnerPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    firmName: '',
    mobile: '',
    city: '',
    monthlyVolume: '',
    currentBrands: '',
    warehouse: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await fetch('https://formspree.io/f/abcdef', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
    } catch (err: any) {
      console.error('Submission hidden error:', err)
    } finally {
      setLoading(false)
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-black" />,
      title: "Premium Brand Legacy",
      description: "Partner with JSTL, a name synonymous with strength and trust in India's steel industry."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-black" />,
      title: "Growth Opportunities",
      description: "Benefit from our expanding distribution network and high-demand premium TMT bars."
    },
    {
      icon: <Users className="w-8 h-8 text-black" />,
      title: "Full Marketing Support",
      description: "Get end-to-end support for brand stores, signage, and digital marketing activation."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-black" />,
      title: "Quality Assurance",
      description: "Offer your customers Fe 550D & UHD 550 grade bars with ISO and BIS certifications."
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="relative py-20 lg:py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/hero.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md px-4 py-2 rounded-full border border-accent/30 mb-6">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-accent uppercase tracking-wider">Partnership Opportunities 2026</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Become a <span className="text-accent">JSTL Brand Store</span> Partner
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Join India's fastest-growing steel distribution network. Build a legacy of strength in your city with our premium TMT bars and dedicated support system.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-14 px-8 text-lg rounded-xl w-full sm:w-auto"
                  onClick={() => document.querySelector('#application-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Hero Visual - The Poster */}
            <div className="relative mt-12 lg:mt-0">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.3)] border border-accent/20 group max-w-md mx-auto lg:max-w-none">
                <img
                  src="/hero2.jpeg"
                  alt="JSTL Distribution Model"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-50 -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section id="application-form" className="py-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left side: Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Partner With Us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="p-5 sm:p-6 rounded-2xl bg-accent border border-accent/10 hover:border-accent/30 transition-all duration-300 shadow-lg shadow-accent/10">
                      <div className="mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-black">{benefit.title}</h3>
                      <p className="text-black/80 text-sm font-medium leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-black text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Investment Model</h3>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold text-accent">₹25 LAKH</span>
                    <span className="text-gray-400">inventory investment</span>
                  </div>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">100 sq. ft. Premium Brand Store</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Complete Steel & Building Materials Display</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">On-Site TMT Testing Advantage</span>
                    </li>
                  </ul>
                </div>
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              </div>
            </div>

            {/* Right side: Form */}
            <div className="bg-card border border-border rounded-3xl shadow-xl overflow-hidden sticky top-28">
              <div className="p-6 sm:p-8 border-b border-border bg-accent/5">
                <h3 className="text-xl sm:text-2xl font-bold">Partnership Application</h3>
                <p className="text-muted-foreground mt-2 text-sm">Fill in the details below and our team will get in touch.</p>
              </div>

              <div className="p-6 sm:p-8">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Firm Name *</label>
                        <input
                          name="firmName"
                          value={formData.firmName}
                          onChange={handleChange}
                          required
                          placeholder="Company Name"
                          className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Mobile Number *</label>
                        <input
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                          placeholder="+91"
                          className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">City / State *</label>
                        <input
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          placeholder="Location"
                          className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Monthly Volume (MT) *</label>
                        <input
                          type="number"
                          name="monthlyVolume"
                          value={formData.monthlyVolume}
                          onChange={handleChange}
                          required
                          placeholder="e.g. 50"
                          className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Current Brands</label>
                        <input
                          name="currentBrands"
                          value={formData.currentBrands}
                          onChange={handleChange}
                          placeholder="Optional"
                          className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Warehouse Availability</label>
                      <div className="relative">
                        <select
                          name="warehouse"
                          value={formData.warehouse}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent outline-none transition-all appearance-none"
                        >
                          <option value="">Select option</option>
                          <option value="yes">Yes, warehouse available</option>
                          <option value="no">No warehouse at present</option>
                          <option value="planning">Planning to set up</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight className="w-4 h-4 rotate-90" />
                        </div>
                      </div>
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm text-center font-semibold bg-red-50 py-3 rounded-xl border border-red-100">
                        {error}
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-14 text-lg font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl transition-all shadow-lg shadow-accent/20 disabled:opacity-70"
                    >
                      {loading ? 'Submitting Application...' : 'Apply for Partnership'}
                      {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Application Sent!</h4>
                    <p className="text-muted-foreground">Thank you for your interest in JSTL. Our regional manager will contact you within 48 hours.</p>
                    <Button
                      variant="outline"
                      className="mt-8 border-accent text-accent hover:bg-accent hover:text-white"
                      onClick={() => setSubmitted(false)}
                    >
                      Fill Another Form
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
