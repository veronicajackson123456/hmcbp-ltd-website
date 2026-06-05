'use client'

import Link from 'next/link'

export default function Accessibility() {
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
            Accessibility Statement
          </h1>
          <p className="text-gray-400 text-sm">
            Last updated: January 2025
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">1. Our Commitment to Accessibility</h2>
            <p className="text-gray-300 leading-relaxed">
              HMCBP LTD is committed to ensuring that this website is accessible to everyone, including people with disabilities. We strive to provide an inclusive digital experience and comply with international accessibility standards.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              This Accessibility Statement describes the accessibility features of our website and how users with disabilities can access our services. We are continuously working to improve accessibility and welcome feedback from users.
            </p>
          </section>

          {/* WCAG Compliance */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">2. Web Content Accessibility Guidelines (WCAG)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. WCAG is the international standard for web accessibility, developed by the W3C Web Accessibility Initiative (WAI).
            </p>
            <p className="text-gray-300 leading-relaxed">
              WCAG 2.1 Level AA standards address accessibility for:
            </p>
            <ul className="space-y-2 text-gray-300 mt-4">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Visual impairments:</strong> Colour contrast, text sizing, and screen reader compatibility</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Hearing impairments:</strong> Captions and transcripts for audio/video content</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Motor impairments:</strong> Keyboard navigation and voice control compatibility</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Cognitive disabilities:</strong> Clear language, logical structure, and consistent navigation</span>
              </li>
            </ul>
          </section>

          {/* Accessibility Features */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">3. Accessibility Features of Our Website</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our website includes the following accessibility features:
            </p>
            <div className="space-y-4">
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Semantic HTML Structure</h3>
                <p className="text-gray-300 text-sm">
                  We use proper HTML semantic elements (headings, lists, landmarks) to ensure proper document structure and screen reader compatibility.
                </p>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Keyboard Navigation</h3>
                <p className="text-gray-300 text-sm">
                  All interactive elements are accessible via keyboard. Users can navigate the website using Tab, Shift+Tab, Enter, and Arrow keys without requiring a mouse.
                </p>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Screen Reader Support</h3>
                <p className="text-gray-300 text-sm">
                  Our website is compatible with major screen readers including JAWS, NVDA, VoiceOver, and TalkBack. All images have descriptive alt text.
                </p>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Colour Contrast</h3>
                <p className="text-gray-300 text-sm">
                  Text and interactive elements meet WCAG AA standards for colour contrast ratios (4.5:1 for normal text, 3:1 for large text).
                </p>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Resizable Text</h3>
                <p className="text-gray-300 text-sm">
                  Users can resize text using browser controls without loss of functionality. We use relative units (em, rem) for responsive text sizing.
                </p>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Skip Links</h3>
                <p className="text-gray-300 text-sm">
                  A "Skip to content" link is available on every page to bypass repetitive navigation elements.
                </p>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Focus Indicators</h3>
                <p className="text-gray-300 text-sm">
                  All interactive elements have clear focus indicators for keyboard navigation.
                </p>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Form Accessibility</h3>
                <p className="text-gray-300 text-sm">
                  Contact forms have properly associated labels, error messages, and instructions. Form validation is accessible to all users.
                </p>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Responsive Design</h3>
                <p className="text-gray-300 text-sm">
                  Our website is fully responsive and works on devices of all sizes, including smartphones, tablets, and desktop computers.
                </p>
              </div>
            </div>
          </section>

          {/* Known Accessibility Limitations */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">4. Known Accessibility Limitations</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              While we strive for full accessibility, we acknowledge the following limitations:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Third-party content:</strong> External websites (ticketing platforms, social media) may not meet accessibility standards. We are not responsible for their accessibility.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>Embedded media:</strong> Video content may not include captions or transcripts. We are working to add these features.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>PDF documents:</strong> Older PDF files may not be fully accessible. New documents will include accessibility features.</span>
              </li>
            </ul>
          </section>

          {/* Accessibility Standards & Regulations */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">5. Accessibility Standards & Regulations</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our website complies with:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>WCAG 2.1 Level AA:</strong> International web accessibility standards</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>UK Equality Act 2010:</strong> UK legislation requiring accessible websites for people with disabilities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span><strong>EN 301 549:</strong> European accessibility standard for digital products</span>
              </li>
            </ul>
          </section>

          {/* Assistive Technology Compatibility */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">6. Assistive Technology Compatibility</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our website is compatible with the following assistive technologies:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Screen Readers</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• JAWS (Windows)</li>
                  <li>• NVDA (Windows, free)</li>
                  <li>• VoiceOver (macOS, iOS)</li>
                  <li>• TalkBack (Android)</li>
                </ul>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Voice Control</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Windows Speech Recognition</li>
                  <li>• macOS Dictation</li>
                  <li>• Apple Siri</li>
                  <li>• Google Voice Control</li>
                </ul>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Browser Extensions</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• High Contrast Mode</li>
                  <li>• Text Scaling Extensions</li>
                  <li>• Dark Mode</li>
                  <li>• Reading Mode</li>
                </ul>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Operating System Features</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Windows Accessibility Options</li>
                  <li>• macOS Accessibility</li>
                  <li>• iOS Accessibility Features</li>
                  <li>• Android Accessibility Settings</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Event Accessibility */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">7. Event and Venue Accessibility</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For information about the accessibility of specific events and venues, please:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Contact the event organisers directly</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Check the venue's accessibility information on their website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Contact HMCBP LTD for recommendations and assistance</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We encourage all users with accessibility needs to inform us of any requirements when purchasing tickets or enquiring about events.
            </p>
          </section>

          {/* Accessibility Testing */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">8. Accessibility Testing & Improvements</h2>
            <p className="text-gray-300 leading-relaxed">
              Our website undergoes regular accessibility testing using:
            </p>
            <ul className="space-y-2 text-gray-300 mt-4">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Automated accessibility scanning tools</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Manual testing with assistive technologies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>User testing with people with disabilities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Continuous monitoring and updates</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We are committed to ongoing accessibility improvements and regularly update our website based on feedback and accessibility standards.
            </p>
          </section>

          {/* Feedback & Support */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">9. Accessibility Support & Feedback</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We welcome feedback about the accessibility of our website. If you experience any accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 text-gray-300">
              <p><strong>HMCBP LTD - Accessibility</strong></p>
              <p className="mt-2">Email: [TO BE INSERTED]</p>
              <p className="mt-3 text-sm">
                Please include:
              </p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li>A description of the accessibility issue</li>
                <li>The page URL or specific feature affected</li>
                <li>The assistive technology you use (if applicable)</li>
                <li>How we can assist you</li>
              </ul>
              <p className="mt-4 text-sm">
                We aim to respond to accessibility enquiries within 5 business days.
              </p>
            </div>
          </section>

          {/* Alternative Formats */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">10. Alternative Formats</h2>
            <p className="text-gray-300 leading-relaxed">
              If you require information in an alternative format (large print, Braille, audio, or plain language), please contact us and we will make every effort to provide it.
            </p>
          </section>

          {/* Legal Rights */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">11. Your Legal Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              Under the UK Equality Act 2010, you have the right to expect websites to be accessible. If you believe our website fails to meet accessibility standards and we have not resolved your concerns, you can lodge a complaint with the Equality and Human Rights Commission.
            </p>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 text-gray-300 mt-4">
              <p><strong>Equality and Human Rights Commission</strong></p>
              <p className="mt-2">Website: <a href="https://www.equalityhumanrights.com" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300">www.equalityhumanrights.com</a></p>
              <p className="mt-3">Phone: 0808 800 0082</p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">12. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For questions about accessibility, please contact:
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
