import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/15 rounded-2xl mb-5">
            <Shield size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">Privacy Policy</h1>
          <p className="text-blue-100 text-sm">Effective Date: 16 May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">

          <p className="text-gray-600 leading-relaxed">
            Welcome to GemPortalAssist.in. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
          </p>

          <Section title="1. Information We Collect">
            <p className="text-gray-600 mb-3">We may collect the following information:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Name</li>
              <li>Mobile number</li>
              <li>Email address</li>
              <li>Billing details</li>
              <li>Business / GST details</li>
              <li>Payment transaction details</li>
              <li>Device / IP information</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <p className="text-gray-600 mb-3">We use the information to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Provide digital products and services</li>
              <li>Process payments</li>
              <li>Share reports, files, and updates</li>
              <li>Respond to customer support requests</li>
              <li>Improve our services and website experience</li>
              <li>Send important notifications related to purchases</li>
            </ul>
          </Section>

          <Section title="3. Payment Information">
            <p className="text-gray-600">
              Payments on this website are processed through secure third-party payment gateways. We do not store your debit/credit card or banking details on our servers.
            </p>
          </Section>

          <Section title="4. Digital Product Delivery">
            <p className="text-gray-600">
              Our products are delivered digitally through email, downloadable links, WhatsApp, or member access after successful payment.
            </p>
          </Section>

          <Section title="5. Data Protection">
            <p className="text-gray-600">
              We implement reasonable security measures to protect your information from unauthorized access, misuse, or disclosure.
            </p>
          </Section>

          <Section title="6. Sharing of Information">
            <p className="text-gray-600">
              We do not sell or rent your personal information to third parties. Information may only be shared with payment gateway providers or service partners strictly for business operations.
            </p>
          </Section>

          <Section title="7. Cookies">
            <p className="text-gray-600">
              Our website may use cookies to improve user experience and analyze website traffic.
            </p>
          </Section>

          <Section title="8. Third-Party Links">
            <p className="text-gray-600">
              Our website may contain links to external websites. We are not responsible for the privacy practices of third-party websites.
            </p>
          </Section>

          <Section title="9. Changes to Policy">
            <p className="text-gray-600">
              We reserve the right to update this Privacy Policy at any time without prior notice.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <div className="text-gray-600 space-y-1">
              <p className="font-semibold text-gray-800">GemPortalAssist</p>
              <p>Email: <a href="mailto:sales@gemportalassist.in" className="text-blue-600 hover:underline">sales@gemportalassist.in</a></p>
              <p>Phone: <a href="tel:+918520082707" className="text-blue-600 hover:underline">+91 8520082707</a></p>
              <p>Website: <span className="text-gray-800">gemportalassist.in</span></p>
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
