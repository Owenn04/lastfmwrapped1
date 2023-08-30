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
            <div class = 'content-one'>
                <h2>About</h2>
                <p>Last.Fm wrapped was developed by Owenn04 with hate because of the wack api</p>
            </div>
            <div class = 'content-two'>
                <h2>Privacy</h2>
                <p>This application uses a session token to get access to your last.fm account. Information stored is stored in the client for a maxiumum of 30 minutes. Nothing is externally stored. It is safe as long as you session doesnt get hacked.</p>
            </div>
            <div class = 'content-three'>
                <h2>Socials</h2>
                <p>This application is soon to be open-souce. Feel free to make a contribution.</p>
                <a href = 'https://github.com/Owenn04/lastfmwrapped1'>
                    <font-awesome-icon class="social-icons"  :icon="['fab', 'github']" ></font-awesome-icon>
                </a>
                <font-awesome-icon class="social-icons"  :icon="['fab', 'twitter']" />
                <font-awesome-icon class="social-icons"  :icon="['fab', 'instagram']" />
            </div>
        </div>
      </div>
    </div>
</template>

<style scoped>


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

.container-content-content{
    display: flex;
    flex-direction: column; 
}

h2{
    display: flex;
    justify-content: left;
    padding-left: 2vh;
    font-size: medium;
    margin: -0.1vh;
}

p{
    display: flex;
    justify-content: left;
    font-size: small;
    font-weight: 200;
    padding-left: 4vh;
    text-align: left;
    padding-right: 4vh;
}

.social-icons{
    align-items: center;
    font-size: 1.5rem;
    margin-right: 20px;
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
