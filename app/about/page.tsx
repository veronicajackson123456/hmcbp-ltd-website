'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Award, Globe, Heart, CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="relative w-full h-96 overflow-hidden flex items-center justify-center bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-1er-DIA-062-NuW0Rtg8eSLTwnVS5pLcux8LO8CUmh.jpg"
            alt="About HMCBP"
            fill
            className="object-cover brightness-40"
          />
        </div>
        <div className="relative z-10 text-center space-y-4 px-6">
          <h1 className="font-heading text-5xl md:text-6xl font-bold">About HMCBP LTD</h1>
          <p className="text-xl text-primary-foreground/90">
            Excellence in Theatre Production & International Event Promotion
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="font-heading text-4xl font-bold text-primary">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                HMCBP LTD is a UK-registered theatre production and international event promotion company founded on the principles of artistic excellence, cultural celebration, and professional integrity.
              </p>
              <p>
                With over a decade of experience in theatre production and international event management, we bridge the vibrant cultural landscapes of the UK and Spain. Our team brings together world-class expertise in theatrical production, festival management, and corporate entertainment.
              </p>
              <p>
                Our flagship event, Salo Orgullo—Europe&apos;s premier LGBTIQ+ Pride festival—attracts thousands of visitors annually to Salobreña, Granada, Spain, celebrating artistic expression, cultural diversity, and community.
              </p>
              <p>
                We are committed to creating transformative cultural experiences that inspire, entertain, and build lasting connections.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-095-mkvCMP4qUH08U0ry5DEDf3DYIjKM4L.jpg"
              alt="Festival Performance"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Director Profile */}
      <section className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl order-2 md:order-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-024-zAeZFiQcyloXxUUpUsYVnNTgDqWmVu.jpg"
                alt="Óscar Contreras Bárcena"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div>
                <h2 className="font-heading text-4xl font-bold mb-2">Óscar Contreras Bárcena</h2>
                <p className="text-accent font-semibold text-lg">Founder & Director</p>
              </div>
              <div className="space-y-4 text-primary-foreground/90 leading-relaxed">
                <p>
                  Óscar Contreras Bárcena is an accomplished theatre director and international event producer with over 15 years of experience in cultural programming, theatrical production, and event promotion across Europe and beyond.
                </p>
                <p>
                  His career encompasses diverse theatre productions, international artist collaborations, and the expansion of Salo Orgullo into one of Europe&apos;s most celebrated Pride festivals. Óscar founded Nyoman in 2010, a sister production company known for its work with contemporary performance, international co-productions, and high-impact cultural programming.
                </p>
                <p>
                  His productions have featured at major venues including the Alvin Ailey American Dance Theater, Teatros del Canal, and numerous international festivals. Óscar is recognized for combining artistic vision with operational excellence, creating culturally significant events that resonate globally.
                </p>
                <p>
                  With a deep commitment to LGBTIQ+ rights, cultural diversity, and artistic innovation, Óscar continues to lead HMCBP LTD and Salo Orgullo toward new heights of excellence.
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/oscarcontrerasb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="https://nyoman.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-foreground/20 border-2 border-accent text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary-foreground/30 transition-all"
                >
                  Visit Nyoman
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Ethos / Values */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">Our Ethos</h2>
          <p className="text-lg text-muted-foreground">
            Guiding principles that define our approach to theatre and events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Heart className="w-8 h-8" />,
              title: 'Artistic Integrity',
              description: 'Unwavering commitment to artistic excellence and creative authenticity in every production.',
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: 'Cultural Bridge',
              description: 'Connecting diverse communities across the UK and Spain through transformative cultural experiences.',
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: 'Professional Excellence',
              description: 'Delivering world-class production standards, attention to detail, and unforgettable experiences.',
            },
            {
              icon: <CheckCircle className="w-8 h-8" />,
              title: 'Inclusivity & Pride',
              description: 'Celebrating LGBTIQ+ rights, diversity, and the power of community expression.',
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-8 text-center space-y-4 hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex p-3 bg-accent/10 rounded-lg text-accent">
                {value.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Producciones Honestas */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-4xl font-bold text-primary">Producciones Honestas</h2>
            <p className="text-lg text-muted-foreground italic">
              &quot;Honest Productions&quot; — Our Philosophy
            </p>
          </div>
          <div className="bg-card border-2 border-accent rounded-lg p-8 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              At the heart of HMCBP LTD lies our commitment to <span className="font-semibold text-primary">Producciones Honestas</span> — honest, transparent, and ethical productions that prioritize artistry, community benefit, and cultural impact.
            </p>
            <p>
              We believe in:
            </p>
            <ul className="space-y-2 ml-6 list-disc">
              <li>Fair treatment and compensation for all artists and partners</li>
              <li>Transparent communication with audiences, sponsors, and stakeholders</li>
              <li>Sustainable event practices that benefit local communities</li>
              <li>Authentic representation and celebration of diverse cultures</li>
              <li>Environmental and social responsibility in all operations</li>
            </ul>
            <p>
              Every event we produce reflects these values, ensuring that our work leaves a positive, lasting impact on both the cultural landscape and the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">Our Track Record</h2>
          <p className="text-lg text-muted-foreground">
            15+ years of successful theatre and event production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-primary">Nyoman Productions</h3>
            <p className="text-muted-foreground mb-4">
              Founded in 2010, Nyoman has established itself as a leader in contemporary theatre and international co-productions:
            </p>
            <ul className="space-y-3">
              {[
                'Collaborations with Alvin Ailey American Dance Theater',
                'Major productions at Teatros del Canal, Madrid',
                'International artist development and promotion',
                'Cultural programming across Spain and Europe',
                'Award-winning contemporary theatre productions',
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-primary">Salo Orgullo Festival</h3>
            <p className="text-muted-foreground mb-4">
              Growing into Europe&apos;s leading LGBTIQ+ Pride festival:
            </p>
            <ul className="space-y-3">
              {[
                '3,000+ international attendees annually',
                '4 successful editions (2023–2026)',
                'Featured artists from 15+ countries',
                'Strategic partnerships with international brands',
                'Growing economic impact for Salobreña, Granada',
                '5th Edition set for July 2026 with expanded programming',
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Let's discuss how HMCBP LTD can bring your theatrical or event vision to life.
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
