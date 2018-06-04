<template>
  <div id="app"><!-- v-bind:class="randomBackgroundClass()" -->
    <div class="container">
    <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/events">Events</router-link>
    <router-link to="/about">About</router-link>
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

nav {
  display: flex;
  width: 100%;
  background-color: #212121;
  justify-content: center;
  margin: 0;
  position: fixed;
  top: 0;
}

nav a {
  margin: 20px;
  color: white;
  text-decoration: none;
}

nav a:hover {
  color: #73b784;
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
  background: url(./assets/bg1.jpg);
}
.bg1 {
  background: url(./assets/bg1.jpg);
}
.bg2 {
  background: url(./assets/bg2.jpg);
}
.bg3 {
  background: url(./assets/bg3.jpg);
}
.bg4 {
  background: url(./assets/bg4.jpg);
}
.container {
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 60px;
}
.content {
  width: 60vw;
  max-width: 1000px;
  margin: auto;
}
</style>
