'use client'

import Link from 'next/link'

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              HMCBP LTD ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process your personal data in connection with this website and our services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We are the data controller responsible for your personal information. Our registered office is [TO BE INSERTED]. If you have any questions about our privacy practices, please contact us at the address provided in the "Contact Us" section below.
            </p>
          </section>

          {/* Data We Collect */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">2. What Personal Data Do We Collect?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We collect personal data in the following ways:
            </p>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 space-y-3">
              <div>
                <h3 className="font-semibold text-white mb-2">Contact Form Data</h3>
                <p className="text-gray-300 text-sm">
                  When you submit our contact form, we collect:
                </p>
                <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-1">
                  <li>Your full name</li>
                  <li>Email address</li>
                  <li>Company name</li>
                  <li>Enquiry type</li>
                  <li>Your message</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Automatically Collected Data</h3>
                <p className="text-gray-300 text-sm">
                  We automatically collect technical information about your visit:
                </p>
                <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-1">
                  <li>IP address and browser type</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and duration of visit</li>
                  <li>Referral source</li>
                  <li>Cookies and similar identifiers (see Cookie Policy)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Purpose of Processing */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">3. Purpose of Processing</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We process your personal data for the following purposes:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Contact Requests:</strong> To respond to enquiries submitted through our contact form and provide information about our services.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Business Purposes:</strong> To maintain and improve our website, understand user behaviour, and enhance user experience.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Legal Compliance:</strong> To comply with legal obligations and regulatory requirements, including UK tax and corporate law.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Business Administration:</strong> To facilitate Know Your Business (KYB) reviews with UK financial institutions.</span>
              </li>
            </ul>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">4. Legal Basis for Processing</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Under UK data protection law (UK GDPR), we process your data based on the following legal grounds:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Consent:</strong> You have given explicit consent by submitting the contact form.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Contract:</strong> Processing is necessary to fulfil your request or provide services you've requested.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Legal Obligation:</strong> Processing is necessary to comply with legal and regulatory obligations.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Legitimate Interest:</strong> We have a legitimate interest in maintaining and improving our website.</span>
              </li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">5. Who Do We Share Your Data With?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell your personal data. However, we may share it with:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Service Providers:</strong> Third-party vendors who assist with email delivery, hosting, and analytics (all under data processing agreements).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Legal Requirements:</strong> When required by law, court orders, or governmental authorities.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Business Partners:</strong> For theatrical productions and event promotion in accordance with your enquiry.</span>
              </li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">6. How Long Do We Keep Your Data?</h2>
            <p className="text-gray-300 leading-relaxed">
              We retain personal data only for as long as necessary for the purposes it was collected:
            </p>
            <ul className="space-y-3 text-gray-300 mt-4">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Contact Form Data:</strong> Retained for up to 3 years for business records and response purposes, unless you request deletion.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Technical Data:</strong> Analytics data is typically retained for up to 26 months.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Legal Obligations:</strong> Some data may be retained longer to comply with UK tax and corporate law requirements.</span>
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">7. Your Data Protection Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Under UK GDPR, you have the following rights:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Right of Access:</strong> You can request a copy of your personal data.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Right to Rectification:</strong> You can ask us to correct inaccurate data.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Right to Erasure:</strong> You can request deletion of your data (subject to legal obligations).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Right to Data Portability:</strong> You can request your data in a structured, portable format.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Right to Object:</strong> You can object to certain types of processing.</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise these rights, please contact us using the details below.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">8. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We take data security seriously and implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">9. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              As a UK company promoting events in Spain (Salo Orgullo Festival in Salobreña, Granada), we may transfer personal data to Spain for event coordination and promotional purposes. Such transfers are made in accordance with UK GDPR and appropriate safeguards are in place.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">10. Third-Party Links</h2>
            <p className="text-gray-300 leading-relaxed">
              This website may contain links to third-party websites. We are not responsible for their privacy practices. Ticketing for events is handled through external platforms (e.g., entradas.baila.fm), which have their own privacy policies.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">11. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or wish to exercise your data rights, please contact:
            </p>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 text-gray-300">
              <p><strong>HMCBP LTD</strong></p>
              <p>Director: Óscar Contreras Bárcena</p>
              <p className="mt-3">Email: [TO BE INSERTED]</p>
              <p>Registered Office: [TO BE INSERTED]</p>
              <p className="mt-4 text-sm">
                You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at ico.org.uk.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date.
            </p>
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
