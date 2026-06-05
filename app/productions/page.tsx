'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Users, ExternalLink, Star } from 'lucide-react'

export default function Productions() {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="relative w-full h-96 overflow-hidden flex items-center justify-center bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-122-BxLKaFpvtwQWmipZwXngD7nUBSqOC3.jpg"
            alt="Salo Orgullo Pyrotechnics"
            fill
            className="object-cover brightness-40"
          />
        </div>
        <div className="relative z-10 text-center space-y-4 px-6">
          <h1 className="font-heading text-5xl md:text-6xl font-bold">Productions & Events</h1>
          <p className="text-xl text-primary-foreground/90">
            Current & Upcoming Theatre Productions and Festival Events
          </p>
        </div>
      </section>

      {/* Salo Orgullo 5th Edition - Featured */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Star size={16} />
            <span className="font-semibold">Flagship Event</span>
          </div>
          <h2 className="font-heading text-5xl font-bold text-primary mb-4">
            Salo Orgullo 5th Edition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Europe&apos;s Premier LGBTIQ+ Pride Festival celebrating art, diversity, and community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start bg-card rounded-lg border border-border p-8 mb-12">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="border-l-4 border-accent pl-4 space-y-1">
                <div className="text-sm text-muted-foreground">Dates</div>
                <div className="font-heading font-bold text-lg text-primary">3–5 July 2026</div>
              </div>
              <div className="border-l-4 border-accent pl-4 space-y-1">
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-heading font-bold text-lg text-primary">
                  Salobreña, Granada<br />Spain
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading text-xl font-bold text-primary">About the Festival</h3>
              <p className="text-muted-foreground leading-relaxed">
                Salo Orgullo is an internationally recognized LGBTIQ+ Pride festival combining world-class performance, cutting-edge artistry, cultural celebration, and community solidarity. Attracting over 3,000 attendees from across Europe and beyond, it has become a cornerstone event in the European Pride calendar.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold text-primary">Festival Highlights</h3>
              <ul className="space-y-2">
                {[
                  'International DJ lineup and live performances',
                  'Theatre and dance productions',
                  'Visual art installations and exhibitions',
                  'Cultural workshops and community events',
                  'Sponsorship from major international brands',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-accent font-bold mt-0.5">→</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="https://salorgullo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Buy Tickets
                <ExternalLink size={18} />
              </a>
              <a
                href="https://salorgullo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Visit Website
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-102-4v4XAcCefU9AnZpJIY7Z5qzttfv4lh.jpg',
              'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-098-T96mBQDLkoYKr7x94T6yGPOI1JCxdV.jpg',
              'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-1er-DIA-075-yV9Mhp9BZ9dl76TjOGVVXUyHZknc6E.jpg',
              'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-104-3VhKCt0bRspErwmw76p3gOegATrxrd.jpg',
            ].map((img, idx) => (
              <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={img}
                  alt={`Salo Orgullo ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Editions */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-primary/5 rounded-lg">
        <h2 className="font-heading text-4xl font-bold text-primary mb-12">
          Previous Editions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              year: '2023',
              title: 'Salo Orgullo Inaugural',
              description: 'The celebration that started it all, establishing Salo Orgullo as a premier Pride festival.',
              stats: '1,200+ attendees',
            },
            {
              year: '2024',
              title: 'Salo Orgullo 2nd Edition',
              description: 'Rapid expansion with doubled attendance and international artist lineups.',
              stats: '2,500+ attendees',
            },
            {
              year: '2025',
              title: 'Salo Orgullo 3rd Edition',
              description: 'Establishing itself as Europe\'s leading LGBTIQ+ Pride festival.',
              stats: '3,000+ attendees',
            },
          ].map((edition, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-8 space-y-4 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-accent font-heading">{edition.year}</div>
              <h3 className="font-heading text-2xl font-bold text-primary">{edition.title}</h3>
              <p className="text-muted-foreground">{edition.description}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-primary">{edition.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nyoman Productions */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-primary mb-4">
          Nyoman Productions
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Sister production company with a track record of acclaimed theatre productions and international collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-primary">Notable Works</h3>
            <ul className="space-y-4">
              {[
                {
                  title: 'Alvin Ailey Collaborations',
                  desc: 'International dance-theatre co-productions',
                },
                {
                  title: 'Teatros del Canal Madrid',
                  desc: 'Major contemporary theatre programming',
                },
                {
                  title: 'European Festival Circuit',
                  desc: 'Performances at leading international venues',
                },
                {
                  title: 'Artist Development',
                  desc: 'Nurturing emerging and established talent',
                },
              ].map((work, idx) => (
                <div key={idx} className="border-l-4 border-accent pl-4 space-y-1">
                  <p className="font-semibold text-primary">{work.title}</p>
                  <p className="text-sm text-muted-foreground">{work.desc}</p>
                </div>
              ))}
            </ul>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-1er-DIA-082-gNktoziyYqbSNY9Vth5cOIRjLACKtl.jpg"
              alt="Nyoman Production"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* UK Theatre Programme */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-accent/5 rounded-lg">
        <h2 className="font-heading text-4xl font-bold text-primary mb-4">
          UK Theatre Programme
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Developing and promoting high-quality theatre productions across the United Kingdom.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Contemporary Theatre',
              description: 'Cutting-edge productions exploring modern themes and innovative stagecraft.',
            },
            {
              title: 'Cultural Programming',
              description: 'Curated seasons celebrating diverse artistic voices and cultural narratives.',
            },
            {
              title: 'International Co-Productions',
              description: 'Collaborations with European and international theatre companies.',
            },
            {
              title: 'Community Engagement',
              description: 'Workshops, education, and community-centered theatrical experiences.',
            },
          ].map((prog, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-8 space-y-3 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-heading text-xl font-bold text-primary">{prog.title}</h3>
              <p className="text-muted-foreground">{prog.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card border-2 border-accent rounded-lg p-8 text-center space-y-4">
          <p className="text-lg text-muted-foreground">
            <em>Coming soon: Announcement of our 2026/2027 UK Theatre Season</em>
          </p>
          <p className="text-muted-foreground">
            Subscribe to our newsletter for updates and exclusive previews.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-primary mb-12 text-center">
          Festival Moments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-060-1300x867-ARv9nWxn8AflqCd1FaRu9BCYgGPI4x.jpg',
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-029-NMKLFR8DqWFz3ZNnBPGGlmycR3gpF5.jpg',
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-038-lTsI3a25tMMOrfRvXTZ6sU4571qB7M.jpg',
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-054-sVpYWwIgbodHFeqh2dhrskxzaZhTdu.jpg',
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-2oDIA-081-G8CU8oV4cHsUKcqAHyPrY6UfRblPO5.jpg',
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-1er-DIA-093-g49ouATbf8g5ugdV5LGSLX5VKIlYqc.jpg',
          ].map((img, idx) => (
            <div
              key={idx}
              className="relative h-72 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <Image
                src={img}
                alt={`Festival moment ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Get Your Tickets Now
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Don&apos;t miss Salo Orgullo 5th Edition – Europe&apos;s premier LGBTIQ+ Pride festival.
          </p>
          <a
            href="https://salorgullo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Buy Tickets Here
          </a>
        </div>
      </section>
    </div>
  )
}
