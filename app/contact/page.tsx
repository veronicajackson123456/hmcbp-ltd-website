'use client'

import Image from 'next/image'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // In a real app, this would send to a backend or service like Resend
    alert('Thank you for your message. We will get back to you shortly.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="relative w-full h-96 overflow-hidden flex items-center justify-center bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SALORGULLO-1er-DIA-062-NuW0Rtg8eSLTwnVS5pLcux8LO8CUmh.jpg"
            alt="Contact HMCBP"
            fill
            className="object-cover brightness-40"
          />
        </div>
        <div className="relative z-10 text-center space-y-4 px-6">
          <h1 className="font-heading text-5xl md:text-6xl font-bold">Get In Touch</h1>
          <p className="text-xl text-primary-foreground/90">
            Let&apos;s discuss your next theatre or event project
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">Contact Information</h2>
              <p className="text-lg text-muted-foreground">
                Reach out to HMCBP LTD to discuss your theatrical production, event, or partnership opportunity.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">Email</h3>
                  <a
                    href="mailto:contact@hmcbp.co.uk"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    contact@hmcbp.co.uk
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">Phone</h3>
                  <a
                    href="tel:+441234567890"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +44 (0) 123 456 7890
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">Office Address</h3>
                  <p className="text-muted-foreground">
                    London, United Kingdom<br />
                    <span className="text-sm">Company Registration: [TO BE INSERTED]</span>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday – Friday: 9:00 AM – 6:00 PM GMT<br />
                    Saturday – Sunday: By appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Social/Links */}
            <div className="pt-8 border-t border-border">
              <h3 className="font-heading font-bold text-primary mb-4">Connect With Us</h3>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/company/hmcbp-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-accent transition-colors"
                >
                  → LinkedIn
                </a>
                <a
                  href="https://salorgullo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-accent transition-colors"
                >
                  → Salo Orgullo Website
                </a>
                <a
                  href="https://nyoman.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-accent transition-colors"
                >
                  → Nyoman Productions
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium text-primary">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium text-primary">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block font-medium text-primary">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="+44 (0) 123 456 7890"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block font-medium text-primary">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                >
                  <option value="">Select a subject...</option>
                  <option value="theatre-production">Theatre Production Inquiry</option>
                  <option value="event-promotion">Event Promotion</option>
                  <option value="salo-orgullo">Salo Orgullo Sponsorship</option>
                  <option value="booking">Artist/Talent Booking</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium text-primary">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>

              <p className="text-sm text-muted-foreground text-center">
                We typically respond within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-primary/5 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-primary mb-12 text-center">
            What We&apos;re Looking For
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Theatre Partners',
                desc: 'Venues, production companies, and cultural organizations interested in collaborations.',
              },
              {
                title: 'Event Clients',
                desc: 'Corporations, festivals, and cultural institutions seeking professional event management.',
              },
              {
                title: 'Sponsors & Partners',
                desc: 'Brands aligned with our values and interested in supporting Salo Orgullo or other initiatives.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-8 text-center space-y-3">
                <h3 className="font-heading text-xl font-bold text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Contact us today and let&apos;s start the conversation about your next project.
          </p>
          <a
            href="mailto:contact@hmcbp.co.uk"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Email Us Now
          </a>
        </div>
      </section>
    </div>
  )
}
