'use client'

import Link from 'next/link'

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
          <p className="text-gray-400 text-sm">
            Last updated: January 2025
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms & Conditions ("Terms") govern your access to and use of the website operated by HMCBP LTD ("we", "our", "us", or "Company"). By accessing this website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the website.
            </p>
          </section>

          {/* Use License */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">2. Use License</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable license to access and use this website for personal, non-commercial purposes. This license does not permit you to:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Modify or copy the materials on this website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Use the materials for commercial purposes or for public display</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Attempt to reverse engineer, decompile, or disassemble the website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Remove any copyright or proprietary notices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Transfer the materials to another person or entity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Use automated tools to access, scrape, or download content</span>
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">3. Intellectual Property Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of HMCBP LTD or its content suppliers and is protected by international copyright laws. Unauthorised reproduction or distribution is prohibited.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Photographs, artwork, and documentation related to theatrical productions and the Salo Orgullo Festival are the intellectual property of HMCBP LTD or their respective creators and may not be reproduced without permission.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">4. Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This website and all materials are provided on an "as-is" and "as-available" basis. HMCBP LTD makes no warranties, expressed or implied, regarding:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>The accuracy, completeness, or reliability of website content</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>The uninterrupted or error-free operation of the website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>The absence of viruses or harmful code</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>The fitness of the website for any particular purpose</span>
              </li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              To the fullest extent permitted by law, HMCBP LTD shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business, arising from your use of or inability to use this website, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">6. Contact Form</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By submitting information through our contact form, you agree that:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>You are providing truthful and accurate information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>We may use your information to respond to your enquiry</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>We may contact you via the provided email address or phone number</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Your submission is non-confidential unless otherwise agreed</span>
              </li>
            </ul>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">7. Third-Party Links</h2>
            <p className="text-gray-300 leading-relaxed">
              This website may contain links to third-party websites, including ticketing platforms (e.g., entradas.baila.fm). We are not responsible for the content, accuracy, or practices of these external sites. Your use of third-party websites is governed by their own terms and conditions and privacy policies.
            </p>
          </section>

          {/* User Conduct */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">8. User Conduct</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Use the website for illegal or unethical purposes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Engage in harassment, defamation, or threats</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Transmit malware, viruses, or harmful code</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Attempt to gain unauthorised access to website systems</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Interfere with website functionality or security</span>
              </li>
            </ul>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">9. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify, defend, and hold harmless HMCBP LTD, its directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of this website, breach of these Terms, or violation of any law or third-party rights.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">10. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to terminate or restrict your access to this website at any time, without notice or cause, if we believe you have violated these Terms or engaged in harmful conduct.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">11. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any legal action or proceeding relating to these Terms shall be brought exclusively in the courts of England and Wales.
            </p>
          </section>

          {/* Entire Agreement */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">12. Entire Agreement</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms, along with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and HMCBP LTD regarding your use of this website. If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in effect.
            </p>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">13. Modifications</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Your continued use of the website constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">14. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about these Terms, please contact:
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
