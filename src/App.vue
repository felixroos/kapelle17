<template>
  <div id="app">
    <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/events">Events</router-link>
    <router-link to="/about">About</router-link>
    </nav>
    <img src="./assets/logo.png">
    <router-view/>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App'
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
nav {
  display: flex;
  width: 100%;
  background-color: darkcyan;
  justify-content: center;
}

nav a {
  margin: 20px;
  color: white;
  text-decoration: none;
}

nav a:hover {
  color: indigo;
}
</style>
