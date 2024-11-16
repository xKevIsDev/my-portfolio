'use client'

import { useState } from 'react';
import { Appearance, loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { TbBrandCoinbase } from "react-icons/tb";
import { BiQuestionMark } from 'react-icons/bi';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Custom appearance for Stripe Elements
const appearance: Appearance = {
  theme: 'night',
  variables: {
    colorPrimary: '#20A49B',
    colorBackground: '#1F2937',
    colorText: '#F9FAFB',
    colorDanger: '#EF4444',
    fontFamily: 'system-ui, sans-serif',
    borderRadius: '8px',
    spacingUnit: '4px',
  },
  rules: {
    '.Input': {
      backgroundColor: '#374151',
      border: '1px solid #4B5563',
    },
    '.Input:focus': {
      border: '2px solid #0D9488',
      boxShadow: '0 0 0 1px #0D9488',
    },
    '.Label': {
      color: '#E5E7EB',
    },
  }
};

function PaymentSummary({ amount }: { amount: number }) {
  return (
    <div className="bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-xl p-4 border border-gray-800/50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-200">Payment Summary</h2>
        <span className="text-sm px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full">
          Secure Payment
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Total Amount</span>
        <span className="text-2xl font-bold text-white">${amount.toFixed(2)}</span>
      </div>
    </div>
  );
}

function CheckoutForm({ amount }: { amount: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment/return`,
      },
    });

    if (submitError) {
      setError(submitError.message ?? 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentSummary amount={amount} />
      <div className="flex flex-col space-y-2">
        {/* For Coinbase or other crypto payments (COMING SOON) */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            disabled
            onClick={() => window.open('YOUR_COINBASE_COMMERCE_CHECKOUT_URL', '_blank')}
            className="flex flex-col w-full items-start justify-center gap-1.5 px-3 py-2 border border-gray-700/70 text-sm font-semibold bg-[#1F2937] text-neutral-400 rounded-[8px] hover:text-white transition-colors"
          >
            <TbBrandCoinbase className="w-4 h-4 fill-white p-0.5 text-white bg-blue-500 rounded-[4px]" />
            Coinbase (unavailable)
          </button>

          <button
            type="button"
            disabled
            onClick={() => window.open('YOUR_COINBASE_COMMERCE_CHECKOUT_URL', '_blank')}
            className="flex flex-col w-full items-start justify-center gap-1.5 px-3 py-2 border border-gray-700/70 text-sm font-semibold bg-[#1F2937] text-neutral-400 rounded-[8px] hover:text-white transition-colors"
          >
            <BiQuestionMark className="w-4 h-4 fill-white p-0.5 text-white rounded-[4px]" />
            Coming Soon
          </button>
          {/* Add more alternative payment methods here */}
        </div>
        <PaymentElement 
            options={{
            layout: "tabs",
            defaultValues: {
                billingDetails: {
                name: '',
                email: '',
                }
            },
            wallets: {
                googlePay: 'auto',
                applePay: 'auto',
            }
            }}
        />
     </div>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={loading || !stripe}
        className="w-full px-6 py-4 bg-gradient-to-r from-teal-500 to-purple-500 text-white rounded-xl font-medium 
          hover:from-teal-600 hover:to-purple-600 transform hover:scale-[0.99] transition-all duration-200 
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
          relative overflow-hidden group"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </>
          ) : (
            <>
              <span>Pay ${amount.toFixed(2)}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </>
          )}
        </span>
      </button>
    </form>
  );
}

export default function PaymentPage() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setError('Please enter a valid amount');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: numAmount,
          description: description || 'Freelance Service'
        }),
      });

      const data = await response.json();
      
      if (data.error) {
        setError(data.error);
      } else {
        setClientSecret(data.clientSecret);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-purple-950 via-slate-900 to-teal-950 gap-2 p-4 md:p-8">

            <div className="w-auto h-auto hidden md:block bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-2xl">
                <div className="w-auto h-full flex flex-col items-center justify-between text-center">
                    <h1 className="text-4xl md:text-3xl font-bold mb-3">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                        KevIsDev Payment Gateway
                        </span>
                    </h1>
                    <p className="text-gray-400 text-sm text-center">Complete your transaction securely with Stripe</p>
                </div>
            </div>
    
      <div className="w-full my-auto mx-auto">
        <div className="w-full mx-auto">
          {!clientSecret ? (
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Payment Details</h2>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                  Step 1 of 2
                </span>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Amount (USD)
                  </label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-teal-400 transition-colors">
                      $
                    </span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      className="w-full pl-10 pr-4 py-3 bg-black/20 border border-gray-700 rounded-xl text-white 
                        placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
                        transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Description (optional)
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Project details or additional notes"
                    className="w-full px-4 py-3 bg-black/20 border border-gray-700 rounded-xl text-white 
                      placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
                      transition-all duration-200"
                    rows={3}
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {error}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-4 bg-gradient-to-r from-teal-500 to-purple-500 text-white rounded-xl font-medium 
                    hover:from-teal-600 hover:to-purple-600 transform hover:scale-[0.99] transition-all duration-200 
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                    relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Continue to Payment
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Complete Payment</h2>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                  Step 2 of 2
                </span>
              </div>
              
              <Elements 
                stripe={stripePromise} 
                options={{
                  clientSecret,
                  appearance,
                }}
              >
                <CheckoutForm amount={parseFloat(amount)} />
              </Elements>

              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Protected by Stripe secure payment processing
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}