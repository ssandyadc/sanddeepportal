import { Package } from 'lucide-react';

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/15 rounded-2xl mb-5">
            <Package size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">Shipping &amp; Delivery Policy</h1>
          <p className="text-blue-100 text-sm">All products on GemPortalAssist.in are delivered digitally</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-blue-800 text-sm font-medium leading-relaxed">
              All products available on GemPortalAssist.in are <strong>digital products</strong>. There is no physical shipping involved.
            </p>
          </div>

          <Section title="Delivery Method">
            <p className="text-gray-600 mb-4">Products are delivered through one or more of the following channels:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Email' },
                { label: 'Download Links' },
                { label: 'WhatsApp' },
                { label: 'Cloud / Shared Files' },
              ].map(({ label }) => (
                <div key={label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <p className="text-sm font-semibold text-gray-700">{label}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Delivery Time">
            <p className="text-gray-600">
              Most digital products are delivered <strong>instantly or within 24 hours</strong> after successful payment confirmation. In certain cases, delivery may take longer due to technical verification or support requirements.
            </p>
          </Section>

          <Section title="Failed Delivery">
            <p className="text-gray-600 mb-4">
              If you do not receive your digital product within the expected timeframe, contact us immediately:
            </p>
            <div className="text-gray-600 space-y-1">
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
