'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { submitInquiry } from '@/lib/api'

interface ProjectFormData {
  companyName: string
  contact: string
  pincode: string
  quantity: string
  sizes: string
  timeline: string
}

export default function ProjectInquiry() {
  const [formData, setFormData] = useState<ProjectFormData>({
    companyName: '',
    contact: '',
    pincode: '',
    quantity: '',
    sizes: '',
    timeline: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
      await submitInquiry({
        type: 'project',
        details: {
          nameCompany: formData.companyName,
          contact: formData.contact,
          locationPin: formData.pincode,
          quantity: formData.quantity,
          sizes: formData.sizes,
          timeline: formData.timeline
        }
      })
      setSubmitted(true)
      // Success state reset handled by UI conditional or timer
    } catch (err: any) {
      setError(err.message || 'Submission failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full bg-background py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-black">BULK REQUIREMENTS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Request a Project Quote
          </h2>
          <p className="text-lg text-muted-foreground">
            For large-scale construction and infrastructure projects
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-semibold text-foreground mb-2">
                  Company / Project Name *
                </label>
                <input
                  id="companyName"
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  placeholder="ABC Construction Ltd."
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-semibold text-foreground mb-2">
                  Contact Number *
                </label>
                <input
                  id="contact"
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="pincode" className="block text-sm font-semibold text-foreground mb-2">
                  Project Location (PIN Code) *
                </label>
                <input
                  id="pincode"
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  placeholder="110092"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-semibold text-foreground mb-2">
                  Quantity Required (MT) *
                </label>
                <input
                  id="quantity"
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  placeholder="1000"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="sizes" className="block text-sm font-semibold text-foreground mb-2">
                  Sizes Required (e.g., 8mm, 12mm, 16mm) *
                </label>
                <input
                  id="sizes"
                  type="text"
                  name="sizes"
                  value={formData.sizes}
                  onChange={handleChange}
                  required
                  placeholder="8mm, 12mm, 16mm, 20mm"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold text-foreground mb-2">
                  Delivery Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select delivery timeline</option>
                  <option value="immediate">Within 1 week</option>
                  <option value="2weeks">2-3 weeks</option>
                  <option value="1month">1 month</option>
                  <option value="flexible">Flexible timeline</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-14 text-lg font-bold rounded-xl transition-all disabled:opacity-70"
              >
                {loading ? 'Sending Request...' : 'Request Project Quote'}
                {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
              </Button>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm text-center font-semibold bg-red-50 py-3 rounded-xl border border-red-100">
                {error}
              </p>
            )}

            {/* Success Message */}
            {submitted && (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1">Quote Request Sent!</h4>
                <p className="text-sm text-muted-foreground">
                  Thank you! We&apos;ve received your bulk requirement. Our project sales team will contact you with a customized proposal within 24 hours.
                </p>
                <Button 
                  variant="link" 
                  className="text-accent mt-4"
                  onClick={() => setSubmitted(false)}
                >
                  Send another request
                </Button>
              </div>
            )}
          </form>

          {/* Info Text */}
          <p className="text-xs text-muted-foreground text-center mt-6">
            All fields marked with * are required. Our sales team will provide you with a competitive quote tailored to your project requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
