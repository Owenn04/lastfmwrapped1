// netlify-functions/get-data.js
exports.handler = async (event, context) => {
    // Your API logic here
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data fetched successfully' }),
    };
  };
  