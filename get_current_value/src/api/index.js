import axios from 'axios';

export const getBitcoin = async () => {
  try {
    const call = await axios.get(
      'https://api.coinbase.com/v2/prices/BTC-USD/buy',
      {
        headers: {
          Authentization:
            process.env.BEARER_DATA,
        },
      }
    );
    const response = await call.data;
    return response;
  } catch (error) {
    console.log('GetBitcoin Error', error);
    return [];
  }
};
