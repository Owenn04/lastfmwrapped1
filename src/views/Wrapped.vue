<script setup>
import { ref, onMounted } from 'vue';

const url = window.location.href;
const urlParams = new URLSearchParams(new URL(url).search);

const token = ref(urlParams.get('token'));

const username = ref(null);
const errorMessage = ref(null);
//?token=${token.value}


const getUserInfo = async () => {

  try {
    const response = await fetch(`/.netlify/functions/get-username?token=${token.value}`);

    const data = await response.json();
    console.log(data)

    username.value = data.username;
    console.log(username)
  } catch (error) {
    errorMessage.value = error.message;
    console.log(error)
  }
};

onMounted(() => {
  getUserInfo();
  console.log(token.value)
});
</script>


<template>
    <!-- <h1>{{ token }}</h1> -->
    <!-- <div class="nav-bar">
            <h1>12 Months</h1>
            <h1>6 months</h1>
            <h1>1 Week</h1>
    </div> -->

    <div class="container">
        <div class="container-content">
            <div class="container-content-top">
                <img class="logo" src="https://download.logo.wine/logo/Last.fm/Last.fm-Logo.wine.png"/>
                <div class="icon-container">
                    <font-awesome-icon class="icon" :icon="['fas', 'circle-half-stroke']" />
                    <font-awesome-icon class="icon" :icon="['fas', 'gear']"/> 
                </div>  
            </div>
            <div class="container-content-content">
                <h1>{{ username }}</h1>
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
    width: 80vh;
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
</style>