import React from 'react';
import { DollarSign } from 'lucide-react';
import { formatNGN } from '../utils/currency';

interface AmountInputProps {
  amount: number;
  ngnAmount: number;
  rate: number | null;
  onChange: (amount: number) => void;
}

export function AmountInput({ amount, ngnAmount, rate, onChange }: AmountInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Amount (USD)</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <DollarSign className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="number"
          min="0"
          step="0.01"
          value={amount}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="0.00"
        />
      </div>
      <p className="mt-2 text-sm text-gray-600">
        NGN Equivalent: {formatNGN(ngnAmount)}
      </p>
      {rate && (
        <p className="mt-1 text-xs text-gray-500">
          Current Rate: 1 USD = {formatNGN(rate)}
        </p>
      )}
    </div>
  );
}