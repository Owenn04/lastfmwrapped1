<template>
  <nav>
      <router-link :to="{ name: 'home' }" class = 'link'>Home</router-link>
      <router-link :to="{ name: 'wrapped' }" class = 'link'>Wrapped</router-link>
      <router-link :to="{ name: 'about' }" class = 'link'>About</router-link>
  </nav>

  <router-view />
</template>

<script setup>
</script>

<style scoped>

nav{
  display: flex;
  justify-content: center;
  padding: 20px;
  list-style: none;
}

.link {
  margin-right: 20px; /* Adjust the value to control the space */
}

/* Remove the margin from the last router-link to avoid extra space */
.link:last-child {
  margin-right: 0;
}





</style>



