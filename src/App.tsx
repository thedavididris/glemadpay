import React from 'react';
import { PaymentForm } from './components/PaymentForm';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Logo />
          <p className="mt-2 text-sm text-gray-600">
            Secure international payments in USD, automatically converted to NGN
          </p>
        </div>
        
        <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
          <PaymentForm />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;