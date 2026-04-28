import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-12 border-b border-background/20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-background/20 rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg">J</span>
              </div>
              <div>
                <h3 className="font-bold">JSTL TMT Bars</h3>
                <p className="text-xs text-background/60">By Jindal Steel</p>
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
                <a href="#legacy" className="text-background/70 hover:text-background transition">
                  Our Legacy
                </a>
              </li>
              <li>
                <a href="#products" className="text-background/70 hover:text-background transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#tmt" className="text-background/70 hover:text-background transition">
                  TMT Bars
                </a>
              </li>
              <li>
                <a href="#specs" className="text-background/70 hover:text-background transition">
                  Specifications
                </a>
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
                  H-No 8-2-684/1/1, Flat No. 202, Valley View Residency, Banjara Hills, Hyderabad – 500034
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
                  sales@jstltmt.com
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
              </div>
              <div>
                <p className="font-semibold text-background mb-1">Khyati Contech Pvt. Ltd.</p>
                <p>CIN: U46632DL2026PTC464070</p>
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
              <p className="text-sm font-semibold mb-1 text-background">4 States</p>
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
          </div>

          {/* Brand Statement */}
          <div className="text-center border-t border-background/20 pt-6">
            <p className="text-sm italic text-background/80">
              "Legacy Builds Trust. Testing Builds Proof. JSTL Builds Both."
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
