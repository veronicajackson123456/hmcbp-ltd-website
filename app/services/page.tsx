'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Music, Zap, Users, Globe, Sparkles, Mic2 } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Sparkles size={32} />,
      title: 'Theatre Production',
      description: 'Full-scale theatrical productions from concept to premiere, including contemporary drama, music theatre, and experimental work.',
      highlights: ['Direction & Creative Development', 'Venue Partnerships', 'Artistic Programming'],
    },
    {
      icon: <Music size={32} />,
      title: 'Event Promotion',
      description: 'Strategic promotion and management of cultural festivals, concerts, and special events across Europe.',
      highlights: ['Festival Curation', 'Artist Booking', 'Marketing & Promotion'],
    },
    {
      icon: <Globe size={32} />,
      title: 'Festival Management',
      description: 'End-to-end festival production including logistics, programming, sponsorship, and audience development.',
      highlights: ['Salo Orgullo Track Record', 'Multi-Day Coordination', 'International Partnerships'],
    },
    {
      icon: <Users size={32} />,
      title: 'Corporate Entertainment',
      description: 'Bespoke entertainment solutions for corporate events, gala dinners, and brand activations.',
      highlights: ['Artist Curation', 'Event Design', 'Production Management'],
    },
    {
      icon: <Zap size={32} />,
      title: 'International Co-Production',
      description: 'Collaborative production partnerships with international theatre and event organizations.',
      highlights: ['Cross-Border Projects', 'Cultural Exchange', 'Venue Networks'],
    },
    {
      icon: <Mic2 size={32} />,
      title: 'Artist & Talent Management',
      description: 'Representation and career development for performers, artists, and creative professionals.',
      highlights: ['Career Strategy', 'Tour Coordination', 'Contract Negotiation'],
    },
  ]

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="relative w-full h-96 overflow-hidden flex items-center justify-center bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-038-lTsI3a25tMMOrfRvXTZ6sU4571qB7M.jpg"
            alt="Services"
            fill
            className="object-cover brightness-40"
          />
        </div>
        <div className="relative z-10 text-center space-y-4 px-6">
          <h1 className="font-heading text-5xl md:text-6xl font-bold">Our Services</h1>
          <p className="text-xl text-primary-foreground/90">
            Comprehensive Theatre & Event Production Expertise
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
          From initial concept through premiere, HMCBP LTD provides world-class production services across theatre, festivals, and international events.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-card border border-border rounded-lg p-8 space-y-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="inline-flex p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                {service.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="pt-4 border-t border-border space-y-2">
                {service.highlights.map((highlight, hidx) => (
                  <p key={hidx} className="text-sm font-medium text-accent flex items-center gap-2">
                    <span>→</span> {highlight}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Capabilities */}
      <section className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-12">Our Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-accent">Creative Services</h3>
              <ul className="space-y-3">
                {[
                  'Artistic Direction & Curation',
                  'Script Development & Adaptation',
                  'Festival Programming',
                  'Visual & Scenic Design Partnerships',
                  'Lighting & Sound Design',
                  'Marketing & Brand Strategy',
                ].map((capability, idx) => (
                  <li key={idx} className="flex gap-3 items-center">
                    <span className="text-accent font-bold">✓</span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-accent">Operational Services</h3>
              <ul className="space-y-3">
                {[
                  'Full Event Production Management',
                  'Venue Negotiation & Partnerships',
                  'Artist Booking & Contracts',
                  'Sponsorship & Fundraising',
                  'Audience Development',
                  'Technical Coordination & Logistics',
                ].map((capability, idx) => (
                  <li key={idx} className="flex gap-3 items-center">
                    <span className="text-accent font-bold">✓</span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-primary mb-12 text-center">
          Why Choose HMCBP LTD
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-bold text-primary">Proven Track Record</h3>
              <p className="text-muted-foreground">
                Over 15 years of successful theatre productions and international event management, including partnerships with major institutions and artists.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-bold text-primary">International Network</h3>
              <p className="text-muted-foreground">
                Established relationships with artists, venues, sponsors, and cultural organizations across the UK, Spain, and Europe.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-bold text-primary">Artistic Excellence</h3>
              <p className="text-muted-foreground">
                Unwavering commitment to creative authenticity, high production standards, and culturally significant work.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-bold text-primary">Transparent Partnership</h3>
              <p className="text-muted-foreground">
                Honest, collaborative approach to production with clear communication and shared commitment to success.
              </p>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-095-mkvCMP4qUH08U0ry5DEDf3DYIjKM4L.jpg"
              alt="Service Excellence"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-primary mb-12 text-center">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'Consultation',
                desc: 'Understanding your vision, goals, and requirements.',
              },
              {
                num: '02',
                title: 'Strategy',
                desc: 'Developing a comprehensive production strategy and timeline.',
              },
              {
                num: '03',
                title: 'Execution',
                desc: 'Professional production management and coordination.',
              },
              {
                num: '04',
                title: 'Delivery',
                desc: 'Seamless execution and successful event delivery.',
              },
            ].map((step, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="text-5xl font-heading font-bold text-accent">{step.num}</div>
                <h3 className="font-heading text-xl font-bold text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Let&apos;s Bring Your Project to Life
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Contact our team to discuss how HMCBP LTD can support your theatrical or event goals.
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
