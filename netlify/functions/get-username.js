// const axios = require('axios');

// exports.handler = async (event, context) => {
//   try {
//     const { token } = event.queryStringParameters;
//     const apiKey = process.env.VITE_API_KEY;
    
//     const endpoint = `https://ws.audioscrobbler.com/2.0/?method=user.getInfo&user=${token}&api_key=${apiKey}&format=json`;
    
//     const response = await axios.get(endpoint);
//     const userInfo = response.data.user;
//     const username = userInfo.name;

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ username }),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'An error occurred' }),
//     };
//   }
// };


// // http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=rj&api_key=efaaa8e498389379d0de403fa0dbaccf&format=json
// // https://ws.audioscrobbler.com/2.0/?method=user.getInfo&user=y65rGl-IkvtZ4WfDqkFjZO9fVuoR4dJmapi_key=efaaa8e498389379d0de403fa0dbaccf