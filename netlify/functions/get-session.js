const axios = require('axios');
const CryptoJS = require("crypto-js");

exports.handler = async (event, context) => {
  try {
    const { token } = event.queryStringParameters;
    const apiKey = process.env.VITE_API_KEY;
    const method = 'auth.getSession';
    const sharedSecret = process.env.VITE_SHARED_SECRET
    const concatenatedString = apiKey + method + token + sharedSecret;
    const apiSig = CryptoJS.MD5(concatenatedString).toString();
    
    const endpoint = `http://ws.audioscrobbler.com/2.0/?method=${method}&api_key=${apiKey}&token=${token}&api_sig=${apiSig}&format=json`;
    const response = await axios.get(endpoint);
    const sessionInfo = response.data
    const username = sessionInfo.session.key

    return {
      statusCode: 200,
      body: JSON.stringify({ username }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred' }),
    };
  }
};

