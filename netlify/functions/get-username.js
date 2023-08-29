// const fetch = require('node-fetch');

// exports.handler = async function (event, context) {
//   const { token } = event.queryStringParameters;
//   const apiKey = process.env.VITE_API_KEY; // Get the API key from your Netlify environment

//   const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getInfo&user=${token}&api_key=${apiKey}&format=json`;

//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       return {
//         statusCode: response.status,
//         body: 'Failed to fetch user data',
//       };
//     }
//     const data = await response.json();
//     console.log(data)
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ username: data.user.name }),
//     };
//   } catch (error) {
//     console.log(error)
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: error.message }),
//     };
//   }
// };

exports.handler = async (event, context) => {

    const data = {test: "test"}

    return{
        statusCode: 200,
        body: JSON.stringify(data),
    }
}