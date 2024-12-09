import { PaymentFormData } from '../types/payment';
import { FlutterWaveButton } from 'flutterwave-react-v3';
import { FLUTTERWAVE_PUBLIC_KEY } from '../config/constants';

export const createFlutterwaveConfig = (data: PaymentFormData, ngnAmount: number) => {
  return {
    public_key: FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now().toString(),
    amount: ngnAmount,
    currency: 'NGN',
    payment_options: 'card,ussd,bank transfer',
    customer: {
      email: data.email,
    },
    customizations: {
      title: 'Glemad Pay',
      description: 'Payment for services',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };
};