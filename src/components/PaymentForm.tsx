import React, { useState } from 'react';
import { AmountInput } from './AmountInput';
import { LoadingState } from './LoadingState';
import { PaymentButton } from './PaymentButton';
import { convertUSDToNGN, useExchangeRate } from '../utils/currency';
import type { PaymentFormData } from '../types/payment';

export function PaymentForm() {
  const [formData, setFormData] = useState<PaymentFormData>({
    amount: 0,
    email: '',
    gateway: 'Flutterwave'
  });

  const { rate, loading, error } = useExchangeRate();
  const ngnAmount = rate ? convertUSDToNGN(formData.amount, rate) : 0;

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <div className="text-red-600 text-center py-4">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <AmountInput
        amount={formData.amount}
        ngnAmount={ngnAmount}
        rate={rate}
        onChange={(amount) => setFormData({ ...formData, amount })}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Payment Gateway</label>
        <select
          value={formData.gateway}
          onChange={(e) => setFormData({ ...formData, gateway: e.target.value as 'Flutterwave' | 'Paystack' })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="Flutterwave">Flutterwave</option>
          <option value="Paystack">Paystack</option>
        </select>
      </div>

      {formData.amount > 0 && formData.email && (
        <PaymentButton formData={formData} ngnAmount={ngnAmount} />
      )}
    </div>
  );
}

export default PaymentForm;