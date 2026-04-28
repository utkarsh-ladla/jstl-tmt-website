'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface FormData {
  name: string
  firmName: string
  mobile: string
  city: string
  monthlyVolume: string
  currentBrands: string
  warehouse: string
}

export default function DealerInquiry() {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Dealer inquiry submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="w-full bg-gradient-to-b from-background to-primary/5 py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-accent/20 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-black">PARTNERSHIP OPPORTUNITY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Become a JSTL Partner
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our growing network of dealers and distributors across India
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="firmName" className="block text-sm font-semibold text-foreground mb-2">
                  Firm Name *
                </label>
                <input
                  id="firmName"
                  type="text"
                  name="firmName"
                  value={formData.firmName}
                  onChange={handleChange}
                  required
                  placeholder="ABC Steel Traders"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="mobile" className="block text-sm font-semibold text-foreground mb-2">
                  Mobile Number *
                </label>
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-foreground mb-2">
                  City / State *
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="Delhi, Delhi"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="monthlyVolume" className="block text-sm font-semibold text-foreground mb-2">
                  Monthly Volume (MT) *
                </label>
                <input
                  id="monthlyVolume"
                  type="number"
                  name="monthlyVolume"
                  value={formData.monthlyVolume}
                  onChange={handleChange}
                  required
                  placeholder="50"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="currentBrands" className="block text-sm font-semibold text-foreground mb-2">
                  Current Brands Selling
                </label>
                <input
                  id="currentBrands"
                  type="text"
                  name="currentBrands"
                  value={formData.currentBrands}
                  onChange={handleChange}
                  placeholder="Brand A, Brand B"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div>
              <label htmlFor="warehouse" className="block text-sm font-semibold text-foreground mb-2">
                Warehouse Availability
              </label>
              <select
                id="warehouse"
                name="warehouse"
                value={formData.warehouse}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select option</option>
                <option value="yes">Yes, warehouse available</option>
                <option value="no">No warehouse at present</option>
                <option value="planning">Planning to set up</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base font-semibold"
              >
                Submit Application
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-primary">
                  Thank you! Your inquiry has been submitted. Our team will contact you soon.
                </p>
              </div>
            )}
          </form>

          {/* Info Text */}
          <p className="text-xs text-muted-foreground text-center mt-6">
            Fields marked with * are required. We&apos;ll review your application and contact you within 2 business days.
          </p>
        </div>
      </div>
    </section>
  )
}
