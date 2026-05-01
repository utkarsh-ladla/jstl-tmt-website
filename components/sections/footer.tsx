'use client'

import { MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react'
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
                <p className="text-sm text-background/60">By Jindal Steel Tubes LTD</p>
              </div>
            </div>
            <p className="text-sm text-background/70 mb-6">
              Building India with high-strength TMT reinforcing bars and steel solutions.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/18M6SN1eHu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/jstljindal?igsh=a3d6eHY1aGJzaXho" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/918796185073" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg 
                  className="w-5 h-5 fill-current" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
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
                <a href="tel:+918796185073" className="text-background/70 hover:text-background transition">
                  +91 87961 85073
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:sales@jstltmt.com" className="text-background/70 hover:text-background transition">
                  sales.jstljindal@gmail.com
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <a href="https://wa.me/918796185073" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition">
                  Message on WhatsApp
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
