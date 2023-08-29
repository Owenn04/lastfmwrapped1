const CryptoJS = require("crypto-js");
const axios = require("axios");

exports.handler = async (event, context) => {
    const { token } = event.queryStringParameters;
    const apiKey = process.env.VITE_API_KEY;
    const method = 'auth.getSession';
    const sharedSecret = process.env.VITE_SHARED_SECRET;

    // Concatenate parameters and shared secret
    const concatenatedString = apiKey + "method" + method + "token" + token + sharedSecret;

    // Generate MD5 hash
    const apiSig = CryptoJS.MD5(concatenatedString).toString();

    // Construct the API endpoint
    const endpoint = `http://ws.audioscrobbler.com/2.0/?method=${method}&api_key=${apiKey}&token=${token}&api_sig=${apiSig}&format=json`;

    try {
        // Make API request
        const response = await axios.get(endpoint);
        const sessionInfo = response.data;
        const username = sessionInfo.session.key;

        // Handle the response or perform further operations
        return {
            statusCode: 200,
            body: JSON.stringify({ username }),
        };
    } catch (error) {
        // Handle errors
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "An error occurred." }),
        };
    }
};

