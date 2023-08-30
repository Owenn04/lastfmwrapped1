const axios = require("axios");

exports.handler = async (event, context) => {
    const { username, period } = event.queryStringParameters;
    const apiKey = process.env.VITE_API_KEY;

    const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&period=${period}&limit=5&api_key=${apiKey}&format=json`;

    try {
        const apiResponse = await axios.get(apiUrl);
        const topTracks = apiResponse.data.toptracks.track;

        const formattedTracks = topTracks.map((track, index) => ({
            rank: index + 1,
            trackname: track.name,
            artistname: track.artist.name
            
        }));
        return {
            statusCode: 200,
            body: JSON.stringify(formattedTracks)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "An error occurred while fetching data." })
        };
    }
};
