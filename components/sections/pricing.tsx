'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Pricing() {
  const [pincode, setPincode] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleGetRate = () => {
    if (pincode && quantity) {
      console.log('Getting rate for:', { pincode, quantity })
      // Integrate with pricing API here
    }
  }

  return (
    <section id="pricing" className="w-full bg-background py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-accent/20 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-black">LIVE PRICING</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Check Today&apos;s TMT Rates
          </h2>
          <p className="text-lg text-muted-foreground">
            Get real-time pricing based on your location and requirements
          </p>
        </div>

        {/* Pricing Form */}
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-8">
          <div className="space-y-6">
            {/* PIN Code Input */}
            <div>
              <label htmlFor="pincode" className="block text-sm font-semibold text-foreground mb-2">
                Enter PIN Code
              </label>
              <input
                id="pincode"
                type="text"
                placeholder="e.g., 110092"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Enter your location PIN code for location-specific rates
              </p>
            </div>

            {/* Quantity Input */}
            <div>
              <label htmlFor="quantity" className="block text-sm font-semibold text-foreground mb-2">
                Select Quantity (MT)
              </label>
              <input
                id="quantity"
                type="number"
                placeholder="e.g., 10"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Enter required quantity in metric tonnes
              </p>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleGetRate}
              disabled={!pincode || !quantity}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base font-semibold disabled:opacity-50"
            >
              Get Live Rate
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground text-center">
              Rates are dynamic and may vary based on market conditions, quantity, and location
            </p>
          </div>

          {/* Info Cards */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <p className="text-xs font-semibold text-primary mb-1">BULK PRICING</p>
                <p className="text-sm text-foreground">
                  Special rates available for large volume orders
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-xs font-semibold text-primary mb-1">DELIVERY OPTIONS</p>
                <p className="text-sm text-foreground">
                  Flexible delivery timelines available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
