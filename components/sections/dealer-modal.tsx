'use client'

import { useState } from 'react'
import { X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DealerModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  firmName: string
  mobile: string
  city: string
  monthlyVolume: string
  currentBrands: string
  warehouse: string
}

export default function DealerModal({ isOpen, onClose }: DealerModalProps) {
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
    setTimeout(() => {
      setSubmitted(false)
      onClose()
      setFormData({
        name: '',
        firmName: '',
        mobile: '',
        city: '',
        monthlyVolume: '',
        currentBrands: '',
        warehouse: '',
      })
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Become a JSTL Dealer</h2>
              <p className="text-sm text-muted-foreground mt-1">Join our growing network across India</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition flex-shrink-0 ml-4"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-1">
            <div className="p-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
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
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
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
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="currentBrands" className="block text-sm font-semibold text-foreground mb-2">
                        Current Brands
                      </label>
                      <input
                        id="currentBrands"
                        type="text"
                        name="currentBrands"
                        value={formData.currentBrands}
                        onChange={handleChange}
                        placeholder="Brand A, Brand B"
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Warehouse */}
                  <div>
                    <label htmlFor="warehouse" className="block text-sm font-semibold text-foreground mb-2">
                      Warehouse Availability
                    </label>
                    <select
                      id="warehouse"
                      name="warehouse"
                      value={formData.warehouse}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes, warehouse available</option>
                      <option value="no">No warehouse at present</option>
                      <option value="planning">Planning to set up</option>
                    </select>
                  </div>

                  {/* Helper Text */}
                  <p className="text-xs text-muted-foreground">
                    Fields marked with * are required. We&apos;ll review your application and contact you within 2 business days.
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button
                      type="submit"
                      className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground h-11 text-base font-semibold"
                    >
                      Submit Application
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                      type="button"
                      onClick={onClose}
                      variant="outline"
                      className="flex-1 border-border text-foreground hover:bg-muted h-11"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-block bg-accent/20 rounded-full p-4 mb-4">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Application Submitted!</h3>
                  <p className="text-muted-foreground">Thank you for your interest. Our team will contact you soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
