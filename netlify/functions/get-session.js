const axios = require("axios");
const { createHash } = require("crypto");
const CryptoJS = require("crypto-js");

exports.handler = async (event, context) => {
    const { token } = event.queryStringParameters;
    const apiKey = process.env.VITE_API_KEY;
    console.log(apiKey)
    const method = 'auth.getSession';
    const sharedSecret = process.env.VITE_SHARED_SECRET;

    // const concatenatedString = `api_key${apiKey}method${method}token${token}${sharedSecret}`;
    const concatenatedString = `api_keybd6bf9516e5039a9837aeeb96f2c4a9cmethod${method}token${token}2ad9a87d606fa9662e5329542dc44366`;
    const apiSig = createHash('md5').update(concatenatedString, 'utf-8').digest('hex');
    const baseURL = 'https://ws.audioscrobbler.com/2.0';

    try {
        const response = await axios.get(baseURL, {
            params: {
                method: 'auth.getSession',
                api_key: apiKey,
                api_sig: apiSig,
                token: token,
                format: 'json'
            }
        });

        const sessionInfo = response.data;
        console.log(sessionInfo)
        const username = sessionInfo.session.name;
        //can get key with session.key
        return {
            statusCode: 200,
            body: JSON.stringify({ username }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
