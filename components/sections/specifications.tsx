'use client'

import { useState } from 'react'
import { CheckCircle2, Ruler, Weight } from 'lucide-react'

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

  const weightChart = [
    { diameter: '8 mm', weight: '0.395 kg/m' },
    { diameter: '10 mm', weight: '0.617 kg/m' },
    { diameter: '12 mm', weight: '0.888 kg/m' },
    { diameter: '16 mm', weight: '1.58 kg/m' },
    { diameter: '20 mm', weight: '2.47 kg/m' },
    { diameter: '25 mm', weight: '3.85 kg/m' },
    { diameter: '28 mm', weight: '4.83 kg/m' },
    { diameter: '32 mm', weight: '6.31 kg/m' },
  ]

  return (
    <section id="specs" className="w-full bg-background py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
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
        <div className="flex overflow-x-auto gap-4 mb-8 border-b border-border no-scrollbar">
          <button
            onClick={() => setActiveTab('chemical')}
            className={`px-4 py-3 font-semibold text-sm transition border-b-2 whitespace-nowrap ${activeTab === 'chemical'
              ? 'text-accent border-accent'
              : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
          >
            Chemical Properties
          </button>
          <button
            onClick={() => setActiveTab('mechanical')}
            className={`px-4 py-3 font-semibold text-sm transition border-b-2 whitespace-nowrap ${activeTab === 'mechanical'
              ? 'text-accent border-accent'
              : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
          >
            Mechanical Properties
          </button>
          <button
            onClick={() => setActiveTab('weight')}
            className={`px-4 py-3 font-semibold text-sm transition border-b-2 whitespace-nowrap ${activeTab === 'weight'
              ? 'text-accent border-accent'
              : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
          >
            Weight & Length
          </button>
        </div>

        {/* Content */}
        <div className="">
          {activeTab === 'chemical' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {chemicalSpecs.map((spec, index) => (
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
              ))}
            </div>
          )}

          {activeTab === 'mechanical' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mechanicalSpecs.map((spec, index) => (
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
              ))}
            </div>
          )}

          {activeTab === 'weight' && (
            <div className="space-y-12">
              {/* Intro Text */}
              <div className="max-w-4xl">
                <h3 className="text-2xl font-bold text-foreground mb-4">Standard Weight & Length</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At JSTL, every TMT bar is manufactured and supplied in strict accordance with BIS Standard IS 1786,
                  ensuring precise weight, consistent strength, and dependable structural performance for every construction project.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Weight Chart Table */}
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-accent/10 p-4 border-b border-border">
                    <h4 className="font-bold flex items-center gap-2">
                      <Weight className="w-5 h-5 text-accent" />
                      Unit Weight Chart (Kg per Meter)
                    </h4>
                  </div>
                  <table className="w-full text-left">
                    <thead className="bg-muted/50 border-b border-border text-xs font-bold uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-4">Diameter</th>
                        <th className="px-6 py-4 text-right">Weight (Kg/Meter)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {weightChart.map((row, i) => (
                        <tr key={i} className="hover:bg-accent/5 transition-colors">
                          <td className="px-6 py-4 font-semibold text-foreground">{row.diameter}</td>
                          <td className="px-6 py-4 text-right text-accent font-bold">{row.weight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Variation & Length */}
                <div className="space-y-8">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Ruler className="w-6 h-6 text-accent" />
                      <h4 className="font-bold text-lg">Standard Length</h4>
                    </div>
                    <p className="text-foreground font-bold text-xl mb-2">12 meters (40 feet)</p>
                    <p className="text-sm text-muted-foreground italic">
                      (Custom lengths can be provided based on specific project requirements.)
                    </p>
                  </div>

                  <div className="bg-black text-white rounded-xl p-6 shadow-xl border border-accent/20">
                    <h4 className="font-bold text-accent mb-4 flex items-center gap-2">
                      <Weight className="w-5 h-5" />
                      Permissible Weight Variation
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span>Up to 10 mm</span>
                        <span className="font-bold text-accent">±7%</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span>Above 10 mm</span>
                        <span className="font-bold text-accent">±5%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                    <h4 className="font-bold text-foreground mb-4">Why Weight Accuracy Matters</h4>
                    <ul className="space-y-3">
                      {[
                        "Ensures structural strength as per engineering design",
                        "Prevents risks associated with underweight material",
                        "Maintains transparency in quantity and billing",
                        "Supports long-term durability and safety"
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* JSTL Assurance Footer */}
              <div className="bg-gradient-to-r from-black to-gray-900 text-white rounded-2xl p-8 border border-accent/30">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div>
                    <h4 className="text-accent font-bold text-2xl mb-4">JSTL Assurance</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        BIS-compliant manufacturing and sourcing
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        Strict quality checks on weight and dimensions
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        Reliable performance across all needs
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="flex items-center gap-3">
                      <img src="/logo5.png" alt="J Glob Logo" className="h-10 w-auto object-contain" />
                      <p className="text-3xl font-black tracking-tighter">JSTL TMT</p>
                    </div>
                    <p className="text-accent font-bold italic">Build What Truly Lasts.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Original Compliance Banner - Only show for Chemical/Mechanical */}
        {(activeTab === 'chemical' || activeTab === 'mechanical') && (
          <div className="mt-12 bg-accent border border-accent/40 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">
              Why BIS Certification Matters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm font-bold text-white mb-2">Quality Guarantee</p>
                <p className="text-sm text-white/90">
                  BIS standards ensure consistent quality across all production batches
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-2">Safety Assurance</p>
                <p className="text-sm text-white/90">
                  Meets all structural safety requirements for Indian construction codes
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-2">Market Trust</p>
                <p className="text-sm text-white/90">
                  Recognized and accepted by all major infrastructure and construction projects
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
