export interface PaymentFormData {
  amount: number;
  email: string;
  gateway: 'Flutterwave' | 'Paystack';
}

export interface ConversionRate {
  USD: number;
  NGN: number;
}