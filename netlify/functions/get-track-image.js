const axios = require("axios");

exports.handler = async (event, context) => {
    try {
        const { track, artist } = event.queryStringParameters;
      
        const apiKey = process.env.VITE_API_KEY;
      
        const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=${artist}&track=${track}&format=json`;
      
        const response = await axios.get(apiUrl);
        const data = response.data;
      
        if (data.track && data.track.album && data.track.album.image) {
          const imageArray = data.track.album.image;
        //   console.log(imageArray)
      
          const desiredSize = "large"; // Set the desired size here
      
          let imageUrl = null;
      
          for (const imageObj of imageArray) {
            if (imageObj.size === desiredSize) {
              imageUrl = imageObj["#text"];
              break;
            }
          }
          if (imageUrl) {
            console.log("Image URL (", desiredSize, "):", imageUrl);
            return {
                statusCode: 200,
                body: JSON.stringify(imageUrl)
            };
          } else {
            return {
                statusCode: 200,
                body: JSON.stringify("https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png")
            };
          }
        } else {
          return {
            statusCode: 200,
            body: JSON.stringify("https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png")
        };
        }
      } catch (error) {
        return {
            statusCode: 200,
            body: JSON.stringify("https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png")
        };
      }
};
