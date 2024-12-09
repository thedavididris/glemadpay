import { useState, useEffect } from 'react';
import { fetchExchangeRate } from '../services/currency';

export const formatUSD = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const formatNGN = (amount: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
  }).format(amount);
};

export const useExchangeRate = () => {
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRate = async () => {
      try {
        const newRate = await fetchExchangeRate();
        setRate(newRate);
        setError(null);
      } catch (err) {
        setError('Failed to fetch exchange rate');
      } finally {
        setLoading(false);
      }
    };

    getRate();
  }, []);

  return { rate, loading, error };
};

export const convertUSDToNGN = (usdAmount: number, rate: number): number => {
  return usdAmount * rate;
};