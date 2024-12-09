import axios from 'axios';
import { EXCHANGE_API_KEY, EXCHANGE_API_BASE_URL } from '../config/constants';

interface ExchangeRateResponse {
  result: string;
  conversion_rates: {
    NGN: number;
  };
}

export const fetchExchangeRate = async (): Promise<number> => {
  try {
    const response = await axios.get<ExchangeRateResponse>(
      `${EXCHANGE_API_BASE_URL}/${EXCHANGE_API_KEY}/latest/USD`
    );
    return response.data.conversion_rates.NGN;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    throw new Error('Failed to fetch exchange rate');
  }
};