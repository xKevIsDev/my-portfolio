export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-teal-950 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
        <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p>
              We collect information necessary to provide our services, including:
              name, email address, payment information, and project requirements.
              Payment information is processed securely by our payment partners and
              is not stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p>
              Your information is used solely for:
              - Providing requested services
              - Processing payments
              - Communication regarding your project
              - Legal compliance
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data.
              All payments are processed through secure, encrypted connections by our
              authorized payment processors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Third-Party Services</h2>
            <p>
              We use trusted third-party services for payment processing:
              - Stripe
              - Cryptomus
              - Coinbase Commerce
              Each processor has their own privacy policy and terms of service.
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