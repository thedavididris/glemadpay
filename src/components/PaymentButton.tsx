import React from 'react';
import { PaymentFormData } from '../types/payment';
import { FlutterWaveButton } from 'flutterwave-react-v3';
import { createFlutterwaveConfig } from '../services/payment';

interface PaymentButtonProps {
  formData: PaymentFormData;
  ngnAmount: number;
}

export function PaymentButton({ formData, ngnAmount }: PaymentButtonProps) {
  const handleSuccess = (response: any) => {
    console.log("Payment successful!", response);
    // Additional success handling
  };

  const handleClose = () => {
    console.log("Payment modal closed");
  };

  return (
    <div className="mt-6">
      <FlutterWaveButton
        {...createFlutterwaveConfig(formData, ngnAmount)}
        className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        text={`Pay with ${formData.gateway}`}
        callback={handleSuccess}
        onClose={handleClose}
      />
      <p className="mt-2 text-xs text-center text-gray-500">
        Secure payment powered by {formData.gateway}
      </p>
    </div>
  );
}