// const CryptoJS = require("crypto-js");
// const axios = require("axios");

// exports.handler = async (event, context) => {
//     const { token } = event.queryStringParameters;
//     const apiKey = process.env.VITE_API_KEY;
//     const method = 'auth.getSession';
//     const sharedSecret = process.env.VITE_SHARED_SECRET;

//     const concatenatedString = apiKey + "method" + method + "token" + token + sharedSecret;
//     const apiSig = CryptoJS.MD5(concatenatedString).toString();
//     const endpoint = `http://ws.audioscrobbler.com/2.0/?method=${method}&api_key=${apiKey}&token=${token}&api_sig=${apiSig}&format=json`;

//     try {
//         const response = await axios.get(endpoint);
//         const sessionInfo = response.data;
//         const username = sessionInfo.session.key;
//         return {
//             statusCode: 200,
//             body: JSON.stringify({ username }),
//         };
//     } catch (error) {
//         return {
//             statusCode: 500,
//             body: JSON.stringify({ error: "An error occurred." }),
//         };
//     }
// };

// efaaa8e498389379d0de403fa0dbaccfmethodauth.getSessiontokenhJw-TDI17fEVxpbi3tuPAhd2qrutwdvD73a0fb3c5ccf9a47ca97057da846de16
// http://ws.audioscrobbler.com/2.0/?method=auth.getSession&api_key=efaaa8e498389379d0de403fa0dbaccf&token=hJw-TDI17fEVxpbi3tuPAhd2qrutwdvD&api_sig=2fe5b7b50c283420a1a96a4092e6ff52&format=json

const CryptoJS = require("crypto-js");
const axios = require("axios");

exports.handler = async (event, context) => {
    const { token } = event.queryStringParameters;
    const apiKey = process.env.VITE_API_KEY;
    const method = 'auth.getSession';
    const publicKeySecret = process.env.VITE_PUBLIC_KEY_SECRET;

    try {
        // Create a dictionary of parameters
        const parameters = {
            api_key: apiKey,
            method,
            token,
            format: 'json'
        };

        // If you're generating a signature, sort and construct the signature
        const queryParams = Object.keys(parameters)
            .filter(key => key !== 'format') // Remove 'format' from signature
            .sort()
            .map(key => key + parameters[key])
            .join('');

        const apiSig = CryptoJS.MD5(queryParams + publicKeySecret).toString();

        // Construct the endpoint
        const endpoint = `http://ws.audioscrobbler.com/2.0/?${new URLSearchParams(parameters).toString()}&api_sig=${apiSig}`;
        console.log(endpoint)

        // Make the API request
        const response = await axios.get(endpoint);
        const sessionInfo = response.data;

        return {
            statusCode: 200,
            body: JSON.stringify({ sessionInfo }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "An error occurred." }),
        };
    }
};
