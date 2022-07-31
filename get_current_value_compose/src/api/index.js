import axios from 'axios';

export const getBitcoin = async () => {
  try {
    const call = await axios('https://api.coinbase.com/v2/prices/BTC-USD/buy', {
      headers: {
        Authorization: process.env.BEARER_DATA,
      },
    });
    const response = await call.data;
    return response;
  } catch (error) {
    console.log('getBitcoin error', error);
    return [];
  }
};
