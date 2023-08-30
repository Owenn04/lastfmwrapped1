<script setup>
import { ref, onMounted } from 'vue';

const url = window.location.href;
const urlParams = new URLSearchParams(new URL(url).search);
const token = urlParams.get('token');


const period = ref("12Months")

const username = ref('');



const getSessionInfo = async (token) => {
    console.log(token)
    try {
        const response = await fetch(`/.netlify/functions/get-session?token=${token}`);
        if (!response.ok) {
            throw new Error('Failed to fetch session info');
        }
        const data = await response.json();
        console.log(data.username)
        return data.username;
    } catch (error) {
        console.error('Error fetching session info:', error);
        throw error; 
    }
};


const tracks = ref([]);

onMounted(async () => {

    const storedUsername = sessionStorage.getItem('username');

    try {
        if (!storedUsername) {
            console.log("about to getSessionInfo")
            const fetchedUsername = await getSessionInfo(token);
            console.log("Fetched", fetchedUsername);
            sessionStorage.setItem('username', fetchedUsername);
            username.value = fetchedUsername
            tracks.value = await getTopTracks(fetchedUsername, period.value);
        } else {
            console.log("Stored", storedUsername);
            username.value = storedUsername;
            tracks.value = await getTopTracks(storedUsername, period.value);
        }

        for (const track of tracks.value) {
            const image = await getTrackImage(track.trackname, track.artistname);
            track.image = image;
            console.log('image', image);
        }
    } catch (error) {
        console.error('Error in mount call:', error);
    } finally {
        console.log("tracks finally", tracks.value);
    }
});


const getTopTracks = async (username, period) => {
    try {
        const response = await fetch(`/.netlify/functions/get-top-tracks?username=${username}&period=${period}`);
        if (!response.ok) {
            throw new Error('Failed to fetch track info');
        }
        const data = await response.json();
        //console.log(data)
        return data; 
        
    } catch (error) {
        console.error('Error fetching track info:', error);
        throw error;
    }
}

const getTrackImage = async (trackname, artistname) => {
    //console.log("getTrackImageVariables", trackname, artistname)
    try {
        const response = await fetch(`/.netlify/functions/get-track-image?track=${trackname}&artist=${artistname}`);
        if (!response.ok) {
            throw new Error('Failed to fetch track image');
        }
        const data = await response.json();
        console.log("image data", data)
        return data

    } catch (error) {
        console.error("Error fetching track image:", error);
        throw error;
    }
}




</script>




<template>
    <div class="container">
      <div class="container-content">
        <div class="container-content-top">
          <img class="logo" src="https://download.logo.wine/logo/Last.fm/Last.fm-Logo.wine.png" />
          <div class="icon-container">
            <font-awesome-icon class="icon" :icon="['fas', 'circle-half-stroke']" />
            <font-awesome-icon class="icon" :icon="['fas', 'gear']" />
          </div>
        </div>
        <div class="container-content-content">
          <h3 class="view-title">{{ username }}'s top tracks</h3>
          <div v-if="tracks.length" class="track-list">
            <div v-for="(track, index) in tracks" :key="index" class="item">
              <h1 class="track-number">{{ index + 1 }}</h1>
              <img class="track-image" :src="track.image" alt="Track Image" />
              <div class="song-info">
                <h5 class="track-name">{{ track.trackname }}</h5>
                <h5 class="track-artist">{{ track.artistname }}</h5>
              </div>
            </div>
          </div>
          <div v-else class="no-tracks">
            <p>No tracks available.</p>
          </div>
        </div>
      </div>
    </div>
  </template>

<style scoped>

.nav-bar{
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: small;
    border: 2px solid #bb0c0cce;
    border-radius: 20px;
}

.container{
    display: flex;
    width: 60vh;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    font-family: sans-serif;
    border: 2px solid #bb0c0cce;
    border-radius: 20px;

    animation: expand .8s ease forwards;
    position: relative;
    
    transition: all .8s ease;
}

.container-content-top {
    display: flex;
    justify-content: space-between;
}
.logo{
    display: flex;
    width: 10%;
    padding-left: 1vh;
}

.icon-container{
    display: flex;
    padding: 10px;
    justify-content: space-between;
}

.icon{
    margin-right: 5px;
}

.view-title{
    display: flex;
    align-items: left;
    padding-left: 30px;
    margin-bottom: -2vh;
    font-size: medium;
}

.item{
    display: flex;
    justify-content: left;
    align-items: center;
}

.track-number{
    display: flex;
    align-items: left;
    padding-left: 40px;
    font-size: 50px;
}

.track-image{
    margin-left: 25px;
    width: 10vh;
    height: 10vh;
    border: 2px solid black
}

.song-info {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    text-align: left;
}



.track-artist{
    margin-top: -20px;
    padding-bottom: 10px;
    font-weight: 200;
}


</style>