'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Project inquiry submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
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
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base font-semibold"
              >
                Request Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-primary">
                  Thank you! We&apos;ve received your quote request. Our team will contact you with a detailed proposal.
                </p>
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
