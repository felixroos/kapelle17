<template>
  <div class="hello">
    <h1>Termine</h1>
  <h3 v-for="(item, index) in events" v-bind:key="index">
    {{item}}
  </h3>
  </div>
</template>

<script>
/* eslint-disable */
// https://gist.github.com/felixroos/bb2d9e64d7f887e5535f1b7a95acd735
export default {
  name: 'Termine',
  mounted() {
    fetch(
      'https://gist.githubusercontent.com/felixroos/bb2d9e64d7f887e5535f1b7a95acd735/raw/kapelle17.dates.json'
    )
      .then(response => response.json())
      .then(body => {
        this.events = body;
      });
  },
  data() {
    return {
      events: ['Termine laden...']
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
