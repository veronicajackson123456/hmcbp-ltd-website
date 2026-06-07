'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <Image
                src="/logo-gold.png"
                alt="HMCBP LTD"
                width={140}
                height={60}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Premium theatre production and international event promotion company with UK and Spanish operations.
            </p>
            <div className="text-sm text-primary-foreground/80">
              <p>www.hmcbpltd.net</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/productions" className="hover:text-accent transition-colors">
                  Productions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="hover:text-accent transition-colors">
                  Sponsors & Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-accent">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 items-start">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@hmcbpltd.net" className="hover:text-accent transition-colors">
                  info@hmcbpltd.net
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+441234567890" className="hover:text-accent transition-colors">
                  +44 (0) 123 456 7890
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>London, United Kingdom</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-accent">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal" className="hover:text-accent transition-colors">
                  Legal Hub
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-accent transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>
              &copy; {currentYear} HMCBP LTD. All rights reserved. | Company registration: [TO BE INSERTED]
            </p>
            <p className="text-xs">
              Crafted with precision and elegance
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
