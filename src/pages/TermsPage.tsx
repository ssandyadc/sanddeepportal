import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/15 rounded-2xl mb-5">
            <FileText size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">Terms &amp; Conditions</h1>
          <p className="text-blue-100 text-sm">By using GemPortalAssist.in you agree to these terms</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">

          <Section title="Acceptance of Terms">
            <p className="text-gray-600">
              By using GemPortalAssist.in, you agree to comply with these Terms &amp; Conditions. If you do not agree, please discontinue use of the website.
            </p>
          </Section>

          <Section title="Services">
            <p className="text-gray-600 mb-3">GemPortalAssist.in provides:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>GeM category intelligence reports</li>
              <li>Catalog management guidance</li>
              <li>Product research data</li>
              <li>Digital reports and consulting support</li>
              <li>Seller assistance services</li>
            </ul>
          </Section>

          <Section title="Intellectual Property">
            <p className="text-gray-600">
              All reports, content, data, graphics, and materials are the intellectual property of GemPortalAssist.in and may not be copied, resold, redistributed, or reproduced without written permission.
            </p>
          </Section>

          <Section title="User Responsibility">
            <p className="text-gray-600 mb-3">Users are responsible for:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Providing accurate information</li>
              <li>Maintaining confidentiality of downloaded materials</li>
              <li>Using reports ethically and legally</li>
            </ul>
          </Section>

          <Section title="Limitation of Liability">
            <p className="text-gray-600">
              We do not guarantee government orders, tender wins, sales growth, or specific business results. The information provided is for research and business assistance purposes only.
            </p>
          </Section>

          <Section title="Service Availability">
            <p className="text-gray-600">
              We reserve the right to modify, suspend, or discontinue services without prior notice.
            </p>
          </Section>

          <Section title="Governing Law">
            <p className="text-gray-600">
              These terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Hyderabad, Telangana.
            </p>
          </Section>

          <Section title="Contact Us">
            <div className="text-gray-600 space-y-1">
              <p className="font-semibold text-gray-800">GemPortalAssist</p>
              <p>Email: <a href="mailto:sales@gemportalassist.in" className="text-blue-600 hover:underline">sales@gemportalassist.in</a></p>
              <p>Phone: <a href="tel:+918520082707" className="text-blue-600 hover:underline">+91 8520082707</a></p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">{title}</h2>
      {children}
    </div>
  );
}
