<template>
  <div id="app" class="background">
    <!-- <div class="overlay"></div> -->
    <div class="container">
    <nav>
    <router-link to="/">Start</router-link>
    <router-link to="/dates">Termine</router-link>
    <router-link to="/about">Info</router-link>
    <router-link to="/media">Media</router-link>
    <router-link to="/contact">Kontakt</router-link>
      <img class="logo" src="https://image.ibb.co/cRKTXy/kapelle17logo.png">
    </nav>
    <div class="content">
    <router-view class="overlay"/>
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
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background-color: #212121;
}

h1,
h2 {
  font-weight: normal;
}
.logo {
  position: fixed;
  left: 12px;
  top: 0px;
  height: 50px;
  margin-top: 8px;
}
nav {
  display: flex;
  width: 100%;
  background-color: #000000;
  justify-content: center;
  margin: 0;
  position: fixed;
  top: 0;
}

a {
  color: #de771c;
  text-decoration: none;
}
nav a {
  padding: 20px;
}
nav a:hover {
  color: white;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin: 0;
  padding: 0;
  display: block;
  height: 100vh;
  overflow: auto;
  background-size: cover;
  background-attachment: fixed;
}
.background {
  background: url(https://image.ibb.co/gEpidT/bg4.jpg);
  z-index: -2;
}

.container {
  margin: 0;
  width: 100vw;
  padding-top: 60px;
  position: relative;
  /* background-color: rgba(0, 60, 70, 0.4); */
  /* height: 100vh;
  overflow: auto; */
}

.background:before {
  pointer-events: none;
  display: block;
  position: fixed;
  content: ' ';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 60, 70, 0.4);
  z-index: 0;
}

.content .center-img {
  width: 60vw;
}
.content {
  width: 60vw;
  max-width: 1000px;
  margin: auto;
}
.member {
  clear: both;
  margin-bottom: 20px;
  display: flex;
}
@media only screen and (max-width: 800px) {
  .member {
    flex-wrap: wrap;
  }
  nav {
    padding-top: 50px;
    justify-content: flex-start;
    left: 0;
    overflow: auto;
  }
  nav a {
    padding: 10px;
  }
  .container {
    padding-top: 90px;
  }
}

.member img {
  flex-shrink: 0;
  align-self: center;
  width: 200px !important;
  height: 200px !important;
  margin-bottom: 20px;
  margin: 10px;
  display: block;
}
</style>
