'use client'

import Link from 'next/link'

export default function DataProtection() {
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
            Data Protection & GDPR Compliance
          </h1>
          <p className="text-gray-400 text-sm">
            Last updated: January 2025
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">1. Our Commitment to Data Protection</h2>
            <p className="text-gray-300 leading-relaxed">
              HMCBP LTD is committed to complying with the UK General Data Protection Regulation (UK GDPR) and all applicable UK data protection laws. We take your privacy seriously and implement robust measures to protect your personal data from unauthorised access, processing, and loss.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              This Data Protection Statement provides detailed information about how we comply with UK GDPR and other data protection regulations.
            </p>
          </section>

          {/* GDPR Overview */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">2. UK GDPR Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The UK General Data Protection Regulation (UK GDPR) is the UK's principal data protection law that governs how organisations process personal data. As a UK company, HMCBP LTD is subject to UK GDPR and the Data Protection Act 2018 (as amended).
            </p>
            <p className="text-gray-300 leading-relaxed">
              Key principles of UK GDPR that we follow:
            </p>
            <ul className="space-y-3 text-gray-300 mt-4">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Lawfulness, fairness, transparency:</strong> We process data lawfully and transparently</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Purpose limitation:</strong> Data is collected only for specified, explicit purposes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Data minimisation:</strong> We collect only the data necessary for our purposes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Accuracy:</strong> We maintain accurate and up-to-date personal data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Storage limitation:</strong> Data is retained only as long as necessary</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Integrity and confidentiality:</strong> We maintain secure processing of data</span>
              </li>
            </ul>
          </section>

          {/* Data Controller */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">3. Data Controller Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              HMCBP LTD is the data controller for all personal data collected through this website.
            </p>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 text-gray-300">
              <p><strong>Data Controller:</strong> HMCBP LTD</p>
              <p className="mt-2">Director: Óscar Contreras Bárcena</p>
              <p className="mt-3">Registered in England & Wales</p>
              <p>Company Number: [TO BE INSERTED]</p>
              <p>Registered Office: [TO BE INSERTED]</p>
              <p className="mt-3">Email: [TO BE INSERTED]</p>
            </div>
          </section>

          {/* Data Processing Activities */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">4. Data Processing Activities</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We process personal data in the following contexts:
            </p>
            
            <div className="space-y-4">
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Website Contact Forms</h3>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Data Collected:</strong> Name, email address, company name, enquiry type, message
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Purpose:</strong> To respond to enquiries and maintain business records
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Retention:</strong> Up to 3 years
                </p>
                <p className="text-gray-300 text-sm">
                  <strong>Legal Basis:</strong> Consent and legitimate interest
                </p>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Website Analytics</h3>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Data Collected:</strong> IP address, device type, pages visited, referral source
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Purpose:</strong> To understand website usage and improve user experience
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Retention:</strong> Up to 26 months
                </p>
                <p className="text-gray-300 text-sm">
                  <strong>Legal Basis:</strong> Legitimate interest
                </p>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Cookie-Based Tracking</h3>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Data Collected:</strong> Cookie identifiers, browsing behaviour
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Purpose:</strong> To remember preferences and track analytics
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Retention:</strong> As per Cookie Policy
                </p>
                <p className="text-gray-300 text-sm">
                  <strong>Legal Basis:</strong> Consent for non-essential cookies
                </p>
              </div>
            </div>
          </section>

          {/* Data Subject Rights */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">5. Data Subject Rights Under UK GDPR</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the following rights regarding your personal data:
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-semibold text-white mb-2">Right of Access (Subject Access Request)</h3>
                <p className="text-gray-300 text-sm">
                  You can request a copy of all personal data we hold about you. We will provide this within 30 days of receiving a valid request.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-semibold text-white mb-2">Right to Rectification</h3>
                <p className="text-gray-300 text-sm">
                  You can request that we correct inaccurate or incomplete personal data about you.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-semibold text-white mb-2">Right to Erasure ("Right to be Forgotten")</h3>
                <p className="text-gray-300 text-sm">
                  You can request deletion of your personal data, subject to certain legal exceptions (e.g., legal retention requirements).
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-semibold text-white mb-2">Right to Restrict Processing</h3>
                <p className="text-gray-300 text-sm">
                  You can request that we limit how we process your personal data in certain circumstances.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-semibold text-white mb-2">Right to Data Portability</h3>
                <p className="text-gray-300 text-sm">
                  You can request your personal data in a structured, commonly-used format that can be transferred to another service provider.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-semibold text-white mb-2">Right to Object</h3>
                <p className="text-gray-300 text-sm">
                  You can object to processing of your personal data for marketing purposes and in certain other circumstances.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-semibold text-white mb-2">Right Not to be Subject to Automated Decision Making</h3>
                <p className="text-gray-300 text-sm">
                  You have the right not to be subject to decisions made solely by automated means that produce legal or similarly significant effects.
                </p>
              </div>
            </div>
          </section>

          {/* Exercising Rights */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">6. How to Exercise Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To exercise any of the rights listed above, please submit a written request to:
            </p>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 text-gray-300">
              <p><strong>HMCBP LTD - Data Subject Rights</strong></p>
              <p className="mt-2">Email: [TO BE INSERTED]</p>
              <p className="mt-4 text-sm">
                Please provide sufficient information to identify you (e.g., name, email address used for contact). We will verify your identity before responding. You are not required to pay a fee, unless your request is manifestly unfounded or excessive. We will respond within 30 days (extendable to 60 days for complex requests).
              </p>
            </div>
          </section>

          {/* Data Breaches */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">7. Data Breach Notification</h2>
            <p className="text-gray-300 leading-relaxed">
              In the event of a confirmed data breach affecting your personal data, we will notify you and the Information Commissioner's Office (ICO) without undue delay, as required by UK GDPR. We maintain a data breach log and will provide all necessary details about the breach, its impact, and remedial measures taken.
            </p>
          </section>

          {/* Data Protection Impact */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">8. Data Protection Impact Assessment</h2>
            <p className="text-gray-300 leading-relaxed">
              We carry out Data Protection Impact Assessments (DPIA) for high-risk processing activities to identify and mitigate risks to your data. Our website and contact form processing is low-risk, but we remain vigilant about data protection.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">9. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              HMCBP LTD transfers personal data to Spain for the coordination and promotion of the Salo Orgullo Festival in Salobreña, Granada. Such transfers are made:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>In compliance with UK GDPR Chapter 5 (International Transfers)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>With appropriate safeguards, such as Standard Contractual Clauses</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Only to recipients with adequate data protection standards</span>
              </li>
            </ul>
          </section>

          {/* Data Retention Schedule */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">10. Data Retention Schedule</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-purple-500/30">
                    <th className="text-left py-3 px-3 font-semibold text-white">Data Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-white">Retention Period</th>
                    <th className="text-left py-3 px-3 font-semibold text-white">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-3">Contact Form Submissions</td>
                    <td className="py-3 px-3">3 years</td>
                    <td className="py-3 px-3">Business records</td>
                  </tr>
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-3">Analytics Data</td>
                    <td className="py-3 px-3">26 months</td>
                    <td className="py-3 px-3">Website improvement</td>
                  </tr>
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-3">Email Communications</td>
                    <td className="py-3 px-3">3 years</td>
                    <td className="py-3 px-3">Business records & evidence</td>
                  </tr>
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-3">Tax/Legal Records</td>
                    <td className="py-3 px-3">6 years</td>
                    <td className="py-3 px-3">UK tax law requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Supervisory Authority */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">11. Information Commissioner's Office (ICO)</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have concerns about our data protection practices or believe your rights have been violated, you have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's independent authority for data protection.
            </p>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 text-gray-300 mt-4">
              <p><strong>Information Commissioner's Office</strong></p>
              <p className="mt-2">Wycliffe House<br />Water Lane<br />Wilmslow<br />Cheshire SK9 5AF</p>
              <p className="mt-3">Phone: 0303 123 1113</p>
              <p>Email: casework@ico.org.uk</p>
              <p className="mt-3">Website: <a href="https://www.ico.org.uk" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300">www.ico.org.uk</a></p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">12. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about our data protection practices, please contact:
            </p>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 text-gray-300">
              <p><strong>HMCBP LTD - Data Protection</strong></p>
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
