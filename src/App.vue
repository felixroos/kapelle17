<template>
  <div id="app" v-bind:class="randomBackgroundClass()">
    <div class="container">
      <img class="logo" src="https://image.ibb.co/cRKTXy/kapelle17logo.png">
    <nav>
      <div class="links">
    <router-link to="/">Start</router-link>
    <router-link to="/about">Info</router-link>
    <router-link to="/media">Media</router-link>
    <router-link to="/contact">Kontakt</router-link>
    </div>
    </nav>
    <div class="content">
    <router-view/>
    </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
  methods: {
    randomBackgroundClass: () => {
      return `bg${Math.floor(Math.random() * 4) + 1}`;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #212121;
}
.logo {
  position: fixed;
  left: 12px;
  top: 8px;
  height: 50px;
  margin-top: 8px;
}
nav .links {
  display: flex;
  width: 100%;
  background-color: #000000;
  justify-content: center;
  margin: 0;
  position: fixed;
  top: 0;
}

a {
  margin: 20px;
  color: #de771c;
  text-decoration: none;
}

nav a:hover {
  color: white;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 0;
  padding: 0;
  display: block;
  min-height: 100vh;
  background-size: cover;
  background-attachment: fixed;
}
h1 {
  color: white;
  font-weight: bold;
}
.bg1 {
  background: url(https://image.ibb.co/j0UidT/bg1.jpg);
}
.bg2 {
  background: url(https://image.ibb.co/jbYWXo/bg2.jpg);
}
.bg3 {
  background: url(https://preview.ibb.co/iORUJT/bg3.jpg);
}
.bg4 {
  background: url(https://image.ibb.co/gEpidT/bg4.jpg);
}
.bg5 {
  background: url(https://image.ibb.co/dwMUJT/bg5.jpg);
}
.container {
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 60px;
  background-color: rgba(50, 50, 50, 0.7);
  padding-top: 60px;
}
.content img {
  width: 60vw;
}
.content {
  width: 60vw;
  max-width: 1000px;
  margin: auto;
}
</style>
