const axios = require("axios");

exports.handler = async (event, context) => {
    const { username, period } = event.queryStringParameters;

    const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&period=${period}&limit=5&api_key=efaaa8e498389379d0de403fa0dbaccf&format=json`;

    try {
        const apiResponse = await axios.get(apiUrl);
        const topTracks = apiResponse.data.toptracks.track;

        const formattedTracks = topTracks.map((track, index) => ({
            rank: index + 1,
            trackname: track.name,
            artistname: track.artist.name,
            image: track.image.find(img => img.size === "medium")["#text"]
            
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
