'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star, Handshake, Globe } from 'lucide-react'

export default function Sponsors() {
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
          <h1 className="font-heading text-5xl md:text-6xl font-bold">Sponsors & Partners</h1>
          <p className="text-xl text-primary-foreground/90">
            Supporting Excellence in Culture and Performance
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="font-heading text-4xl font-bold text-primary">
            Partnership Opportunities
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            HMCBP LTD collaborates with leading organizations, brands, and institutions to bring world-class theatre and cultural events to life. As a partner, your organization gains visibility, cultural impact, and alignment with premium artistic programming.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Star size={32} />,
              title: 'Sponsorship Benefits',
              items: [
                'Brand visibility at major events',
                'Association with premium cultural programming',
                'VIP access and hospitality packages',
                'Marketing and promotional opportunities',
                'Digital and on-site branding',
              ],
            },
            {
              icon: <Handshake size={32} />,
              title: 'Partnership Tiers',
              items: [
                'Platinum Partners',
                'Gold Partners',
                'Silver Partners',
                'Media Partners',
                'Cultural Partners',
              ],
            },
            {
              icon: <Globe size={32} />,
              title: 'Our Reach',
              items: [
                '3,000+ annual festival attendees',
                'International audience base',
                'Multi-market theatre programming',
                'Media coverage and digital platforms',
                'Cultural influencer network',
              ],
            },
          ].map((section, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div className="inline-flex p-3 bg-accent/10 rounded-lg text-accent">
                {section.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, hidx) => (
                  <li key={hidx} className="flex gap-3 items-start">
                    <span className="text-accent font-bold mt-0.5">→</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Sponsors */}
      <section className="bg-primary/5 py-20 px-6 rounded-lg mx-6 md:mx-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-primary mb-4 text-center">
            Featured Partners
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We are proud to work with internationally recognized brands and organizations that share our commitment to artistic excellence and cultural impact.
          </p>

          {/* Platinum Partners */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-accent rounded-full"></span>
              Platinum Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[
                { name: 'Coca-Cola', logo: '🥤' },
                { name: 'Partner 2', logo: '🎭' },
                { name: 'Partner 3', logo: '🎵' },
                { name: 'Partner 4', logo: '✨' },
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-card border-2 border-accent rounded-lg p-8 w-full h-32 flex items-center justify-center text-center hover:shadow-lg transition-shadow"
                >
                  <div className="space-y-2">
                    <div className="text-4xl">{partner.logo}</div>
                    <p className="font-heading font-bold text-primary text-sm">{partner.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Partners */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-accent rounded-full"></span>
              Gold Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-items-center">
              {[
                { name: 'Cultural Partner 1', logo: '🎪' },
                { name: 'Cultural Partner 2', logo: '🎨' },
                { name: 'Cultural Partner 3', logo: '🎬' },
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg p-6 w-full h-28 flex items-center justify-center text-center hover:shadow-lg transition-shadow"
                >
                  <div className="space-y-2">
                    <div className="text-3xl">{partner.logo}</div>
                    <p className="font-heading font-bold text-primary text-xs">{partner.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Partners */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-accent rounded-full"></span>
              Silver & Media Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center">
              {[
                { name: 'Partner A', logo: '📻' },
                { name: 'Partner B', logo: '📺' },
                { name: 'Partner C', logo: '📱' },
                { name: 'Partner D', logo: '🎙️' },
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg p-4 w-full h-24 flex items-center justify-center text-center hover:shadow-lg transition-shadow"
                >
                  <div className="space-y-1">
                    <div className="text-2xl">{partner.logo}</div>
                    <p className="font-heading font-bold text-primary text-xs">{partner.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-primary mb-12 text-center">
          Strategic Partners
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: 'Cultural Partners',
              description: 'Leading cultural institutions and theatre organizations.',
              partners: [
                'Salobreña Cultural Council',
                'Granada Tourism',
                'Spanish Theatre Association',
                'European Pride Network',
              ],
            },
            {
              title: 'Media Partners',
              description: 'Broadcasting and digital media organizations.',
              partners: [
                'Major broadcast networks',
                'Digital streaming platforms',
                'Entertainment publications',
                'Online media outlets',
              ],
            },
          ].map((section, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  {section.title}
                </h3>
                <p className="text-muted-foreground">{section.description}</p>
              </div>
              <ul className="space-y-3">
                {section.partners.map((partner, pidx) => (
                  <li key={pidx} className="flex gap-3 items-start">
                    <span className="text-accent font-bold mt-0.5">→</span>
                    <span className="text-muted-foreground">{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="bg-primary/5 py-20 px-6 rounded-lg mx-6 md:mx-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-primary mb-12 text-center">
            Sponsorship Opportunities
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                tier: 'Platinum',
                investment: 'Custom',
                benefits: [
                  'Exclusive naming rights',
                  'Premium branding',
                  'VIP hospitality',
                  'Board representation',
                  'Strategic partnership',
                ],
              },
              {
                tier: 'Gold',
                investment: '[TBD]',
                benefits: [
                  'Major event branding',
                  'Significant visibility',
                  'VIP packages',
                  'Media recognition',
                  'Cross-promotion',
                ],
              },
              {
                tier: 'Silver',
                investment: '[TBD]',
                benefits: [
                  'Event branding',
                  'On-site presence',
                  'VIP access',
                  'Digital promotion',
                  'Press mentions',
                ],
              },
              {
                tier: 'Media Partner',
                investment: 'In-kind',
                benefits: [
                  'Content access',
                  'Exclusive coverage',
                  'Branded content',
                  'Artist interviews',
                  'Festival highlights',
                ],
              },
            ].map((tier, idx) => (
              <div
                key={idx}
                className="bg-card border-2 border-border rounded-lg p-6 space-y-6 hover:shadow-lg transition-shadow"
              >
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    {tier.tier}
                  </h3>
                  <p className="text-sm text-accent font-semibold">{tier.investment}</p>
                </div>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex gap-2 items-start text-sm">
                      <span className="text-accent font-bold mt-0.5">✓</span>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-primary mb-12 text-center">
          Why Partner With HMCBP LTD
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Cultural Impact',
              description: 'Association with premium artistic programming and internationally recognized events.',
            },
            {
              title: 'International Reach',
              description: 'Access to diverse, engaged audiences across the UK, Spain, and Europe.',
            },
            {
              title: 'Brand Alignment',
              description: 'Partnership with organizations committed to artistic excellence and community values.',
            },
            {
              title: 'Marketing Value',
              description: 'Significant media coverage, digital presence, and promotional opportunities.',
            },
            {
              title: 'Networking',
              description: 'Connection with artists, cultural leaders, and international partners.',
            },
            {
              title: 'Custom Solutions',
              description: 'Tailored partnership packages designed to meet your specific objectives.',
            },
          ].map((reason, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-8 space-y-3">
              <h3 className="font-heading text-xl font-bold text-primary">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Ready to Partner With HMCBP LTD?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Contact us to discuss sponsorship and partnership opportunities that align with your brand.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
