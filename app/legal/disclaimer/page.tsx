'use client'

import Link from 'next/link'

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <div className="border-b border-purple-500/20 bg-black/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/legal" className="text-white hover:text-purple-400 transition-colors text-sm">
            ← Back to Legal Hub
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Disclaimer
          </h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* General Disclaimer */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">1. General Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              This website and all content provided by HMCBP LTD are for informational and promotional purposes only. While we make every effort to provide accurate and up-to-date information, we do not warrant that the information is complete, accurate, or suitable for any particular purpose.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              The information on this website is provided "as is" without warranty of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          {/* No Professional Advice */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">2. Not Professional Advice</h2>
            <p className="text-gray-300 leading-relaxed">
              The content on this website does not constitute legal, financial, tax, or professional advice of any kind. If you require professional advice regarding our services, theatrical productions, or any other matter, please consult with a qualified professional.
            </p>
          </section>

          {/* Links to Third-Party Sites */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">3. Third-Party Links and Content</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This website may contain links to third-party websites, including:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Event ticketing platforms (e.g., entradas.baila.fm)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Social media networks</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Partner websites and promotional partners</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              HMCBP LTD is not responsible for the content, accuracy, legality, or practices of these external websites. We do not endorse or affiliate with these third parties. Your use of third-party websites is at your own risk and governed by their own terms of service and privacy policies.
            </p>
          </section>

          {/* Event and Production Disclaimer */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">4. Events and Productions</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              HMCBP LTD promotes theatrical productions and cultural events, including the Salo Orgullo LGBTIQ+ Pride Festival. We disclaim liability for:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Event cancellations, postponements, or changes due to unforeseen circumstances</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Performer unavailability or schedule changes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Injuries or accidents occurring during events (subject to applicable law)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Weather-related disruptions or force majeure events</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Venue restrictions or governmental orders</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              For ticketing, refunds, and event-specific terms, please refer to the ticketing platform's terms of service.
            </p>
          </section>

          {/* Intellectual Property Disclaimer */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">5. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content on this website, including text, graphics, logos, images, photographs, videos, and software, is the intellectual property of HMCBP LTD or its content suppliers and is protected by copyright law.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Photographs from theatrical productions and the Salo Orgullo Festival are the exclusive property of HMCBP LTD or the photographers and may not be reproduced, distributed, or used without explicit written permission.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              You are not permitted to download, copy, modify, or distribute any content without permission.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To the fullest extent permitted by law, HMCBP LTD shall not be liable for:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Any indirect, incidental, special, or consequential damages</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Loss of profits, revenue, data, or business opportunity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Business interruption</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Personal injury or property damage (subject to legal limitations)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Errors, omissions, or inaccuracies in website content</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              This limitation applies even if HMCBP LTD has been advised of the possibility of such damages.
            </p>
          </section>

          {/* Website Availability */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">7. Website Availability</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not warrant that this website will be available at all times without interruption or error. We may perform maintenance, upgrades, or modifications that may temporarily affect website availability. We are not liable for any downtime or unavailability of the website.
            </p>
          </section>

          {/* Accuracy of Information */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">8. Accuracy of Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              While we strive to provide accurate information about our theatrical productions and events, we do not warrant that:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>All information is complete or current</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Dates, venues, or performers are final and will not change</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Pricing or ticket availability information is current</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Please check the official event website or ticketing platform for the most up-to-date information.
            </p>
          </section>

          {/* User-Generated Content */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">9. User-Generated Content</h2>
            <p className="text-gray-300 leading-relaxed">
              Any content you submit through our contact form or any other channel becomes the property of HMCBP LTD. We reserve the right to use, publish, or distribute such content without compensation or liability to you. By submitting content, you represent that you own the rights to that content.
            </p>
          </section>

          {/* Health and Safety */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">10. Health and Safety</h2>
            <p className="text-gray-300 leading-relaxed">
              Event attendees are responsible for their own health and safety. If you have medical conditions, disabilities, or accessibility requirements, please contact the event organisers directly. HMCBP LTD is not liable for any health-related incidents or complications arising from event attendance.
            </p>
          </section>

          {/* Changes to Disclaimer */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">11. Changes to This Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify this disclaimer at any time. Changes will be posted on this page. Your continued use of the website constitutes acceptance of the modified disclaimer.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">12. Questions?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about this disclaimer, please contact:
            </p>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 text-gray-300">
              <p><strong>HMCBP LTD</strong></p>
              <p>Director: Óscar Contreras Bárcena</p>
              <p className="mt-3">Email: [TO BE INSERTED]</p>
              <p>Registered Office: [TO BE INSERTED]</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-purple-500/20 mt-16 pt-8 text-center text-sm text-gray-500">
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
