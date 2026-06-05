'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function LegalHub() {
  const legalDocuments = [
    {
      title: 'Privacy Policy',
      description: 'Learn how we collect, use, and protect your personal data.',
      href: '/legal/privacy',
      icon: '🔒',
    },
    {
      title: 'Terms & Conditions',
      description: 'Our terms of use and conditions for using this website.',
      href: '/legal/terms',
      icon: '📋',
    },
    {
      title: 'Cookie Policy',
      description: 'Information about cookies and how we use them.',
      href: '/legal/cookies',
      icon: '🍪',
    },
    {
      title: 'Data Protection',
      description: 'Our commitment to data protection and GDPR compliance.',
      href: '/legal/data-protection',
      icon: '🛡️',
    },
    {
      title: 'Disclaimer',
      description: 'Important legal disclaimers and limitations of liability.',
      href: '/legal/disclaimer',
      icon: '⚠️',
    },
    {
      title: 'Accessibility Statement',
      description: 'Our accessibility commitment and WCAG compliance information.',
      href: '/legal/accessibility',
      icon: '♿',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <div className="border-b border-purple-500/20 bg-black/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/" className="text-white hover:text-purple-400 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Legal Documents
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            HMCBP LTD is committed to transparency and compliance. Here you'll find all our legal documents and policies.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {legalDocuments.map((doc, index) => (
            <Link
              key={index}
              href={doc.href}
              className="group relative overflow-hidden rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-transparent p-8 transition-all hover:border-purple-500/60 hover:bg-purple-900/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-gold-500/0 opacity-0 group-hover:opacity-10 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-4xl mb-3">{doc.icon}</div>
                <h2 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {doc.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{doc.description}</p>
                
                <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                  Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-purple-900/20 to-transparent border border-purple-500/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-3">Questions?</h2>
          <p className="text-gray-300 mb-6">
            If you have questions about any of our policies or need clarification, please contact us.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-purple-500/20 bg-black/40 backdrop-blur-sm mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
          <p>
            HMCBP LTD. Registered in England & Wales. Company Number: [TO BE INSERTED]. 
            <br />
            Registered Office: [TO BE INSERTED].
          </p>
        </div>
      </div>
    </div>
  )
}
