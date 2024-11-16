'use client';

import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

interface SessionStatus {
  status: string;
  customer_email: string;
}

export default function Return() {
  const [sessionStatus, setSessionStatus] = useState<SessionStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    if (!sessionId) {
      setError('No session ID found');
      setLoading(false);
      return;
    }

    fetch(`/api/checkout-sessions?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setSessionStatus(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load session status');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (sessionStatus?.status === 'open') {
    redirect('/');
  }

  if (sessionStatus?.status === 'complete') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
          <p className="mb-4">
            We appreciate your business! A confirmation email will be sent to{' '}
            <span className="font-semibold">{sessionStatus.customer_email}</span>.
          </p>
          <p>
            If you have any questions, please email{' '}
            <a 
              href="mailto:your@email.com" 
              className="text-blue-600 hover:text-blue-800"
            >
              your@email.com
            </a>
          </p>
        </div>
      </div>
    );
  }

  return null;
}