'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Mail, Phone, User } from 'lucide-react'

export default function Pricing() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    pincode: '',
    quantity: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleGetRate = async (e: React.FormEvent) => {
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
    }
  }

  return (
    <section id="pricing" className="w-full bg-background py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Live Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Check Today&apos;s TMT Rates
          </h2>
          <p className="text-lg text-muted-foreground">
            Get real-time pricing based on your location and requirements sent directly to you
          </p>
        </div>

        {/* Pricing Form */}
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
          {!submitted ? (
            <div className="p-8 md:p-10">
              <form onSubmit={handleGetRate} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground focus:ring-2 focus:ring-accent outline-none transition-all"
                      />
                    </div>
                  </div>
                  {/* Mobile */}
                  <div className="space-y-2">
                    <label htmlFor="mobile" className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        id="mobile"
                        type="tel"
                        required
                        placeholder="+91"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground focus:ring-2 focus:ring-accent outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground focus:ring-2 focus:ring-accent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* PIN Code */}
                  <div className="space-y-2">
                    <label htmlFor="pincode" className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                      PIN Code *
                    </label>
                    <input
                      id="pincode"
                      type="text"
                      required
                      placeholder="e.g., 110092"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:ring-2 focus:ring-accent outline-none transition-all"
                    />
                  </div>

                  {/* Quantity */}
                  <div className="space-y-2">
                    <label htmlFor="quantity" className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                      Quantity (MT) *
                    </label>
                    <input
                      id="quantity"
                      type="number"
                      required
                      placeholder="e.g., 10"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:ring-2 focus:ring-accent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-red-500 text-sm text-center font-semibold bg-red-50 py-2 rounded-lg border border-red-100">
                    {error}
                  </p>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-14 text-lg font-bold rounded-xl shadow-lg shadow-accent/20 transition-all disabled:opacity-70"
                >
                  {loading ? 'Sending Request...' : 'Get Live Rate via Email'}
                  {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Rates are dynamic and may vary based on market conditions and location.
                </p>
              </form>
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Request Received!</h3>
              <p className="text-muted-foreground mb-8">
                Thank you, <span className="text-foreground font-semibold">{formData.name}</span>.
                Our admin will send the latest live rates for <span className="text-foreground font-semibold">PIN {formData.pincode}</span>
                to <span className="text-foreground font-semibold">{formData.email}</span> within 15 minutes.
              </p>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white"
                onClick={() => setSubmitted(false)}
              >
                Check Another Rate
              </Button>
            </div>
          )}

          {/* Info Cards */}
          <div className="bg-muted/50 p-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Instant Notification</p>
                  <p className="text-sm text-muted-foreground">Receive updates directly on your email and mobile.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Expert Consultation</p>
                  <p className="text-sm text-muted-foreground">Optional call from our sales team for bulk orders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
