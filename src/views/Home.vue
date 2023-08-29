

<template>
    <div class="container">
      <div class="container-content">
        <div class="container-content-inner">
            <img src="https://download.logo.wine/logo/Last.fm/Last.fm-Logo.wine.png" />
          <div class="title">
            <h1 class="hide">Wrapped</h1>
          </div>
          <div class="par">
            <p class="hide">
              View your lastFm statistics with last.fm wrapped. Click the button below to connect.
            </p>
          </div>
          <div class="btns">
            <button @click="authenticateUser()" class="btns-more hide">Connect to LastFm</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>

const API_KEY = import.meta.env.VITE_API_KEY;
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;
//`http://www.last.fm/api/auth/?api_key=${API_KEY}&cb=${REDIRECT_URL}`;

//http://www.last.fm/api/auth/?api_key=efaaa8e498389379d0de403fa0dbaccf&cb=http://localhost:5173/wrapped


const authenticateUser = () => {
  const newUrl = `http://www.last.fm/api/auth/?api_key=${API_KEY}&cb=${REDIRECT_URL}`;
  window.location.href = newUrl;
  console.log(newUrl);
}





</script>
  
<style scoped>
  /* Reset and global styles */
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #242424;
  }

  template{
    background-color: #242424;
  }
  
  /* Additional styles */
  
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    animation: expand .8s ease forwards;
    position: relative;
    font-family: 'Raleway', sans-serif;
    transition: all .8s ease;
  }
  
  .container-content-inner {
    max-width: 100%;
    margin-left: 4vh; 
  }
  
  img {
    display: flex;
    align-items: center;
    max-width: 80vh;
    width: 80vh;
    margin-bottom: -14vh;
    padding-right: 200px;
    animation: slideIn 1.5s ease-in-out forwards;
    opacity: 0; 
    padding-bottom: 1vh;
    }
  
    .par p {
    display: flex;
    align-items: center;
    line-height: 28px;
    transform: translateY(300px);
    animation: slideUp .8s ease-in-out forwards .8s;
    opacity: 0; 
    font-size: 16;
    }
  
  .btns-more {
    display: flex;
    border: 2px solid var(--contrast-color, #bb0c0cce);
    border-radius: 50px;
    padding: 8px 12px;
    font-size: 16px;
    text-transform: uppercase;
    position: relative;
    margin-top: 15px;
    outline: none;
    transform: translateY(50px);
    animation: slideUp .8s ease-in-out forwards 1s;
    opacity: 0;
    color: #fff

  }
  
  .title h1 {
    font-size: var(--heading-font-size, 80px);
    margin-bottom: var(--heading-margin-bottom, 20px);
    transform: translateY(100px);
    animation: slideUp 0.8s ease forwards 0.5s;
    font-style: var(--heading-font-style, normal);
    font-weight: var(--heading-font-weight, 500);
    text-transform: var(--heading-font-text-transform, none);
    letter-spacing: var(--heading-font-letter-spacing, 0em);
    line-height: var(--heading-font-line-height, 1.5em);
    opacity: 0;
  }
  
  @keyframes slideIn {
    0% {
      transform: translateX(500px) scale(.2);
      opacity: 0;
    }
    100% {
      transform: translateX(0px) scale(1);
      opacity: 1;
    }
  }
  
  @keyframes slideUp {
    0% {
      transform: translateY(300px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  
  @keyframes expand {
    0% {
      transform: translateX(1400px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  </style>
  