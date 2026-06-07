'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function Sponsors() {
  const sponsors = [
    {
      name: 'Cervezas Victoria',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-07%20200807-3wnB6XRbSszSrEaFo4qK49eOz26ukE.png',
    },
    {
      name: 'Barceló Ron Dominicano',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-07%20200829-gXhP2J6l0kB9YMTGxxC2dmP5QMFku2.png',
    },
    {
      name: 'Nyoman',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-07%20200802-KwAZW0jp1ymMWXexQdgXdmC9PyHulN.png',
    },
    {
      name: 'Coca-Cola',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-07%20200919-BC0leCna2ahNGzFkB6XkK7oBfky8A5.png',
    },
    {
      name: 'Salobreña Municipality',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-07%20200812-ZgIKb650r7G6oYVbgJ7CsP4hqerf6v.png',
    },
    {
      name: 'Variete Quintana',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-07%20194357-dwPbxO6DfPpouygb1DJILuaogvlrWS.png',
    },
  ]

  const sponsorshipTiers = [
    {
      name: 'Platinum Partner',
      price: 'Custom Pricing',
      benefits: [
        'Premium branding on all materials',
        'VIP hospitality for 20 guests',
        'Exclusive naming rights to festival stage',
        'Speaking opportunity at festival',
        'Dedicated partnership manager',
      ],
    },
    {
      name: 'Gold Partner',
      price: 'Custom Pricing',
      benefits: [
        'Prominent branding on materials',
        'VIP hospitality for 10 guests',
        'Logo placement at festival venues',
        'Social media promotion',
        'Press release inclusion',
      ],
    },
    {
      name: 'Silver Partner',
      price: 'Custom Pricing',
      benefits: [
        'Brand recognition in materials',
        'VIP hospitality for 5 guests',
        'Logo on website and program',
        'Social media mentions',
        'Festival ticket benefits',
      ],
    },
  ]

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="relative w-full h-96 overflow-hidden flex items-center justify-center bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-102-4v4XAcCefU9AnZpJIY7Z5qzttfv4lh.jpg"
            alt="Sponsors & Partners"
            fill
            className="object-cover brightness-40"
          />
        </div>
        <div className="relative z-10 text-center space-y-4 px-6">
          <h1 className="font-heading text-5xl md:text-6xl font-bold">Our Partners</h1>
          <p className="text-xl text-primary-foreground/90">
            Supporting Excellence in Arts and Culture
          </p>
        </div>
      </section>

      {/* Featured Sponsors Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">Salo Orgullo Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading organizations partnering with HMCBP LTD
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-8 flex items-center justify-center min-h-40 hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-24">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">Partnership Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the package that best suits your organization&apos;s goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-8 space-y-6 hover:shadow-xl transition-shadow flex flex-col"
              >
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-accent font-bold text-lg">{tier.price}</p>
                </div>
                <ul className="space-y-4 flex-1">
                  {tier.benefits.map((benefit, hidx) => (
                    <li key={hidx} className="flex gap-3 items-start">
                      <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-12 space-y-8">
          <h2 className="font-heading text-3xl font-bold text-primary">Why Partner With HMCBP LTD?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'International Reach',
                description: '3,000+ attendees from across Europe and strategic global visibility.',
              },
              {
                title: 'Premium Brand Association',
                description: 'Align with world-class artistic programming and cultural excellence.',
              },
              {
                title: 'Comprehensive Exposure',
                description: 'Multi-platform visibility including media, digital, and live events.',
              },
              {
                title: 'Custom Solutions',
                description: 'Flexible partnership packages tailored to your organization&apos;s objectives.',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="font-heading text-lg font-bold text-primary">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-6 mt-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Become a Partner Today
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Contact us to discuss partnership opportunities and custom sponsorship packages.
          </p>
          <a
            href="mailto:info@hmcbpltd.net"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
