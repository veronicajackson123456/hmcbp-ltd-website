'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function Sponsors() {
  const sponsors = [
    {
      name: 'Variete Quintana',
      category: 'Featured Partner',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-07%20194357-dwPbxO6DfPpouygb1DJILuaogvlrWS.png',
      description: 'Cultural venue and entertainment partner',
    },
    {
      name: 'Cervezas Victoria',
      category: 'Beverage Partner',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-07%20194357-dwPbxO6DfPpouygb1DJILuaogvlrWS.png',
      description: 'Official beverage sponsor of Salo Orgullo',
    },
    {
      name: 'Coca-Cola',
      category: 'Global Partner',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-07%20194357-dwPbxO6DfPpouygb1DJILuaogvlrWS.png',
      description: 'Premium refreshment partner',
    },
    {
      name: 'Barceló Ron Dominicano',
      category: 'Premium Partner',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-07%20194357-dwPbxO6DfPpouygb1DJILuaogvlrWS.png',
      description: 'Premium spirits and hospitality partner',
    },
    {
      name: 'Salobreña Municipality',
      category: 'Strategic Partner',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-07%20194420-rypc6Uv4KZU5qU84IiN3A2xx8vS7Ic.png',
      description: 'Host city and municipal partner',
    },
    {
      name: 'Nyoman Productions',
      category: 'Production Partner',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-07%20194420-rypc6Uv4KZU5qU84IiN3A2xx8vS7Ic.png',
      description: 'Creative production partner',
    },
  ]

  const sponsorshipTiers = [
    {
      name: 'Platinum Partner',
      price: 'Custom',
      benefits: [
        'Premium branding on all materials',
        'VIP hospitality for 20 guests',
        'Exclusive naming rights to festival stage',
        'Digital and print advertising',
        'Speaking opportunity at festival',
        'Year-round partnership visibility',
        'Dedicated partnership manager',
      ],
    },
    {
      name: 'Gold Partner',
      price: 'Custom',
      benefits: [
        'Prominent branding on materials',
        'VIP hospitality for 10 guests',
        'Logo placement at festival venues',
        'Social media promotion',
        'Press release inclusion',
        'Partnership documentation',
        'Festival pass allocations',
      ],
    },
    {
      name: 'Silver Partner',
      price: 'Custom',
      benefits: [
        'Brand recognition in materials',
        'VIP hospitality for 5 guests',
        'Logo on website and program',
        'Social media mentions',
        'Partnership recognition',
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
          <h1 className="font-heading text-5xl md:text-6xl font-bold">Promote & Sponsor</h1>
          <p className="text-xl text-primary-foreground/90">
            Partner with Salo Orgullo and HMCBP LTD
          </p>
        </div>
      </section>

      {/* Featured Sponsors */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">Our Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted organizations supporting excellence in arts and culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-8 space-y-4 hover:shadow-lg transition-shadow"
            >
              <div className="h-20 relative mb-4">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded text-xs font-semibold mb-2">
                  {sponsor.category}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary">{sponsor.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{sponsor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 px-6 bg-primary/5 rounded-lg mx-6 md:mx-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">Partnership Tiers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Customize your sponsorship to match your organization&apos;s objectives and reach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-8 space-y-6 hover:shadow-xl transition-shadow"
              >
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-accent font-bold text-lg">{tier.price}</p>
                </div>
                <ul className="space-y-4">
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
        <div className="bg-card border border-border rounded-lg p-12 space-y-6">
          <h2 className="font-heading text-3xl font-bold text-primary">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Reach & Impact',
                description:
                  'Access to 3,000+ international attendees and extensive media coverage across Europe and beyond.',
              },
              {
                title: 'Premium Association',
                description:
                  'Align your brand with world-class artistic programming and cultural excellence.',
              },
              {
                title: 'Hospitality & VIP Access',
                description:
                  'Exclusive VIP experiences, premium seating, and exclusive festival events.',
              },
              {
                title: 'Multi-Market Exposure',
                description:
                  'Visibility across UK theatre programming and international event platforms.',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-primary">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Let&apos;s discuss how we can create a mutually beneficial partnership that elevates your brand.
          </p>
          <a
            href="mailto:info@hmcbpltd.net"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
