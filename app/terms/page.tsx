export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-teal-950 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
        <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
          Terms of Service
        </h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Services Overview</h2>
            <p>
              KevIsDev provides professional development services including but not limited to:
              web development, full-stack application development, API integration, UI/UX implementation,
              and technical consultation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Payment Terms</h2>
            <p>
              All payments are processed securely through our payment partners: Stripe, Cryptomus,
              and Coinbase Commerce. Payments are due before the commencement of services unless
              otherwise agreed upon in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Service Delivery</h2>
            <p>
              Upon confirmation of payment, services will be delivered according to the agreed-upon
              timeline and specifications. All deliverables will be provided digitally unless
              otherwise specified.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Refund Policy</h2>
            <p>
              Refund requests will be evaluated on a case-by-case basis. No refunds will be issued
              after the delivery of services or if work has already commenced, unless otherwise
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Intellectual Property</h2>
            <p>
              Upon full payment, clients receive all agreed-upon rights to the delivered work.
              KevIsDev retains the right to use non-confidential work in portfolios and marketing
              materials.
            </p>
          </section>

          {/* Add more sections as needed */}
        </div>

        <div className="mt-8 text-sm text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
} 