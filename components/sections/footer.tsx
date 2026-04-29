'use client'

import { MapPin, Mail, Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <footer className="w-full bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-12 border-b border-background/20">
          {/* Brand */}
          <div>
            <div className="flex flex-col items-start gap-3 mb-6">
              <div className="bg-white p-2 rounded-xl inline-flex items-center justify-center">
                <img src="/logo5.png" alt="JSTL Logo" className="h-16 sm:h-20 w-auto object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg">JSTL TMT Bars</h3>
                <p className="text-sm text-background/60">By Jindal Steel Ltd</p>
              </div>
            </div>
            <p className="text-sm text-background/70">
              Building India with high-strength TMT reinforcing bars and steel solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={isHomePage ? "#legacy" : "/#legacy"} className="text-background/70 hover:text-background transition">
                  Our Legacy
                </Link>
              </li>
              <li>
                <Link href={isHomePage ? "#products" : "/#products"} className="text-background/70 hover:text-background transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href={isHomePage ? "#tmt" : "/#tmt"} className="text-background/70 hover:text-background transition">
                  TMT Bars
                </Link>
              </li>
              <li>
                <Link href={isHomePage ? "#specs" : "/#specs"} className="text-background/70 hover:text-background transition">
                  Specifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/70">
                  G-81 & 82, Old G-23A, 201, 2nd Floor, Laxmi Nagar, East Delhi, Delhi – 110092
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+918006666444" className="text-background/70 hover:text-background transition">
                  1800-666-6444
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:sales@jstltmt.com" className="text-background/70 hover:text-background transition">
                  sales.jstljindal@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Company</h4>
            <div className="space-y-4 text-xs text-background/70">
              <div>
                <p className="font-semibold text-background mb-1">Jindal Steel Tubes Limited</p>
                <p>CIN: U27109TG1973PLC001662</p>
                <p>Reg. Office: Hyderabad, Telangana</p>
              </div>
              <div>
                <p className="font-semibold text-background mb-1">Khyati Contech Private Limited</p>
                <p>CIN: U46632DL2026PTC464070</p>
                <p>Reg. Office: Laxmi Nagar, Delhi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-6">
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-background/20">
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold mb-1 text-background">BIS Certified</p>
              <p className="text-xs text-background/60">IS 1786:2008 Compliant</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold mb-1 text-background">5 States</p>
              <p className="text-xs text-background/60">Manufacturing Network</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-semibold mb-1 text-background">50+ Years</p>
              <p className="text-xs text-background/60">Steel Industry Legacy</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs text-background/50 text-center">
              © {currentYear} JSTL TMT Bars. All rights reserved. |
              <a href="#" className="text-background/70 hover:text-background transition ml-1">
                Privacy Policy
              </a>
              {' | '}
              <a href="#" className="text-background/70 hover:text-background transition">
                Terms of Service
              </a>
              {' | '}
              <a href="#" className="text-background/70 hover:text-background transition">
                Contact Us
              </a>
            </p>
            <div className="max-w-2xl mx-auto">
              <p className="text-[10px] text-background/40 text-center leading-relaxed">
                <span className="font-semibold">TRANSPARENCY NOTE:</span> JSTL TMT Bars are manufactured by Jindal Steel Tubes Limited.
                Branding, distribution, and market operations are managed by Khyati Infra Mart (Khyati Contech Private Limited).
              </p>
            </div>
          </div>

          {/* Brand Statement */}
          <div className="text-center border-t border-background/20 pt-6">
            <p className="text-sm italic text-background/80">
              "Legacy builds trust. Testing builds proof. JSTL delivers both."
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
