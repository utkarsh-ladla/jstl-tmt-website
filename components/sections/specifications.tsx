'use client'

import { useState } from 'react'

export default function Specifications() {
  const [activeTab, setActiveTab] = useState('chemical')

  const chemicalSpecs = [
    { element: 'Carbon', value: '≤ 0.25%', standard: 'IS 1786:2008' },
    { element: 'Sulphur', value: '≤ 0.040%', standard: 'IS 1786:2008' },
    { element: 'Phosphorus', value: '≤ 0.040%', standard: 'IS 1786:2008' },
    { element: 'S + P', value: '≤ 0.075%', standard: 'IS 1786:2008' },
  ]

  const mechanicalSpecs = [
    { property: 'Yield Strength', value: '≥ 550 MPa', grade: 'Fe 550D' },
    { property: 'Tensile Strength', value: '≥ 600 MPa', grade: 'Fe 550D' },
    { property: 'Elongation', value: '≥ 14.5%', grade: 'Fe 550D' },
    { property: 'UTS/YS Ratio', value: '≥ 1.08', grade: 'Fe 550D' },
  ]

  return (
    <section id="specs" className="w-full bg-background py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-accent/20 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-black">QUALITY ASSURANCE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            BIS Standards Compliance
          </h2>
          <p className="text-lg text-muted-foreground">
            Compliant with IS 1786:2008 — Indian Standard for TMT Reinforcing Bars
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab('chemical')}
            className={`px-4 py-3 font-semibold text-sm transition border-b-2 ${
              activeTab === 'chemical'
                ? 'text-accent border-accent'
                : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
          >
            Chemical Properties
          </button>
          <button
            onClick={() => setActiveTab('mechanical')}
            className={`px-4 py-3 font-semibold text-sm transition border-b-2 ${
              activeTab === 'mechanical'
                ? 'text-accent border-accent'
                : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
          >
            Mechanical Properties
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeTab === 'chemical' ? (
            chemicalSpecs.map((spec, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground text-lg">
                    {spec.element}
                  </h4>
                  <span className="text-accent font-bold text-xl">
                    {spec.value}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {spec.standard}
                </p>
              </div>
            ))
          ) : (
            mechanicalSpecs.map((spec, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground text-lg">
                    {spec.property}
                  </h4>
                  <span className="text-accent font-bold text-xl">
                    {spec.value}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {spec.grade}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Compliance Banner */}
        <div className="mt-12 bg-gradient-to-r from-accent/15 to-background border border-accent/40 rounded-xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Why BIS Certification Matters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-semibold text-black mb-2">Quality Guarantee</p>
              <p className="text-sm text-muted-foreground">
                BIS standards ensure consistent quality across all production batches
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-black mb-2">Safety Assurance</p>
              <p className="text-sm text-muted-foreground">
                Meets all structural safety requirements for Indian construction codes
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-black mb-2">Market Trust</p>
              <p className="text-sm text-muted-foreground">
                Recognized and accepted by all major infrastructure and construction projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
