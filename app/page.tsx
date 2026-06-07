'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-113-9e0oVRtT5AH6Wuw6Npk31csXZzDEwL.jpg"
            alt="Salo Orgullo Festival"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-background/80 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <div className="bg-accent/20 border border-accent px-4 py-2 rounded-full text-sm font-medium text-accent flex items-center gap-2 w-fit mx-auto">
              <Sparkles size={16} />
              Premium Theatre & Events
            </div>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
            Theatre Production &<br />Live Event Promotion
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-pretty">
            UK & Spain | Salo Orgullo 5th Edition • 3–5 July 2026, Salobreña, Granada
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="https://salorgullo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              Get Tickets
              <ChevronRight size={20} />
            </a>
            <a
              href="https://www.youtube.com/watch?v=uT2kZmPCtLE&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-accent"
            >
              Watch Highlights
            </a>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">Our Focus Areas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence across three core pillars of artistic expression and cultural celebration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Theatre Production UK',
              description: 'High-quality theatre productions and cultural programming across the United Kingdom, building artistic legacy and cultural impact.',
              image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-1er-DIA-029-EBOObsK1v1I9AmpVSSrSaEwf3TPKlQ.jpg',
            },
            {
              title: 'Event Promotion Spain',
              description: 'International event management and promotion expertise, particularly through our flagship Salo Orgullo LGBTIQ+ Pride festival.',
              image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-087-nTX6cGTFf1arWmXhUFCNRMzLp0praG.jpg',
            },
            {
              title: 'About the Director',
              description: 'Led by Óscar Contreras Bárcena, with 15+ years of international theatre and event production expertise.',
              image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-024-zAeZFiQcyloXxUUpUsYVnNTgDqWmVu.jpg',
            },
          ].map((pillar, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-heading text-2xl font-bold text-primary">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Salo Orgullo Feature */}
      <section className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <div className="text-accent font-heading font-bold text-lg mb-2">5th Edition</div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold">
                  Salo Orgullo 2026
                </h2>
              </div>
              <p className="text-lg text-primary-foreground/90">
                Europe&apos;s most vibrant LGBTIQ+ Pride festival returns to Salobreña, Granada, Spain. Three days of world-class performances, cutting-edge artistry, and celebration.
              </p>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex gap-3">
                  <span className="text-accent font-bold">📅</span>
                  <span>3–5 July 2026</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent font-bold">📍</span>
                  <span>Salobreña, Granada, Spain</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent font-bold">✨</span>
                  <span>3,000+ international attendees expected</span>
                </div>
              </div>
              <a
                href="https://salorgullo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Discover More & Buy Tickets
              </a>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-102-4v4XAcCefU9AnZpJIY7Z5qzttfv4lh.jpg"
                alt="Salo Orgullo Main Stage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News / Highlights */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Festival Highlights
          </h2>
          <p className="text-lg text-muted-foreground">
            Witness the energy and artistry that defines Salo Orgullo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-029-NMKLFR8DqWFz3ZNnBPGGlmycR3gpF5.jpg',
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-038-lTsI3a25tMMOrfRvXTZ6sU4571qB7M.jpg',
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-079-XXWjVoRulTSeVd0wCaCjeWHg7xuztS.jpg',
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-111-v0grcn1yc42E4LfOT6c3ZKcfLOM3IQ.jpg',
          ].map((image, idx) => (
            <div
              key={idx}
              className="relative h-72 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <Image
                src={image}
                alt={`Salo Orgullo Highlight ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Ready to Experience Premium Theatre & Events?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Get in touch with our team to discuss your next theatrical or event production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contact Us Today
            </Link>
            <Link
              href="/about"
              className="bg-primary-foreground/20 text-primary-foreground border-2 border-accent px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/30 transition-all duration-300"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
