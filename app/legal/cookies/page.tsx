'use client'

import Link from 'next/link'

export default function CookiePolicy() {
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
            Cookie Policy
          </h1>
          <p className="text-gray-400 text-sm">
            Last updated: January 2025
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, such as your preferences and browsing activity. Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies" (retained for a longer period).
            </p>
          </section>

          {/* Why We Use Cookies */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">2. Why Do We Use Cookies?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              HMCBP LTD uses cookies for the following purposes:
            </p>
            <div className="space-y-4">
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Essential Cookies</h3>
                <p className="text-gray-300 text-sm">
                  These cookies are necessary for the website to function properly. They include security cookies and functionality cookies that allow the site to work as intended. You cannot opt-out of essential cookies.
                </p>
              </div>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Analytics Cookies</h3>
                <p className="text-gray-300 text-sm">
                  We use analytics cookies to understand how visitors interact with our website. This helps us improve the site's functionality, identify popular content, and optimise user experience. These cookies are provided by third-party analytics services.
                </p>
              </div>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Preference Cookies</h3>
                <p className="text-gray-300 text-sm">
                  These cookies remember your choices and preferences, such as language and display settings, to provide a more personalised experience.
                </p>
              </div>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Marketing Cookies</h3>
                <p className="text-gray-300 text-sm">
                  We may use marketing cookies to track your interest in our services and deliver targeted content about our theatrical productions and the Salo Orgullo Festival.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Types */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">3. Types of Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-purple-500/30">
                    <th className="text-left py-3 px-3 font-semibold text-white">Cookie Name</th>
                    <th className="text-left py-3 px-3 font-semibold text-white">Purpose</th>
                    <th className="text-left py-3 px-3 font-semibold text-white">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-3">_ga, _gid, _gat</td>
                    <td className="py-3 px-3">Analytics (Google Analytics)</td>
                    <td className="py-3 px-3">2 years</td>
                  </tr>
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-3">session_id</td>
                    <td className="py-3 px-3">Session management</td>
                    <td className="py-3 px-3">Session</td>
                  </tr>
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-3">cookie_consent</td>
                    <td className="py-3 px-3">Remember cookie preferences</td>
                    <td className="py-3 px-3">1 year</td>
                  </tr>
                  <tr className="border-b border-purple-500/10">
                    <td className="py-3 px-3">utm_*</td>
                    <td className="py-3 px-3">Campaign tracking</td>
                    <td className="py-3 px-3">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use services from the following third parties that may set cookies:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Google Analytics:</strong> For website analytics and user behaviour tracking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Vercel Analytics:</strong> For performance monitoring and analytics</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Social Media Platforms:</strong> If you interact with social media elements</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              These third parties have their own privacy and cookie policies. We recommend reviewing them to understand how they use your data.
            </p>
          </section>

          {/* Cookie Consent */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">5. Cookie Consent & Your Choices</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you first visit our website, we will display a cookie consent banner. You can:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Accept all cookies:</strong> Agree to use of all cookies including analytics and marketing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Accept essential cookies only:</strong> Opt-out of analytics and marketing cookies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Customize:</strong> Choose which types of cookies you wish to accept</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              You can also disable cookies through your browser settings, though this may affect website functionality.
            </p>
          </section>

          {/* Browser Control */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">6. How to Control Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Most browsers allow you to control cookies through their settings:
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and other site data</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              You can also visit <a href="https://www.youronlinechoices.com" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300">youronlinechoices.com</a> to manage your online advertising preferences.
            </p>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">7. Data Protection & Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Cookie data is processed in accordance with our Privacy Policy and UK GDPR. For detailed information about how we use personal data, please see our Privacy Policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">8. Questions About Cookies?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact:
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
