<template>
  <div class="hello">
    <h1>Dates</h1>
    <!-- https://www.youtube.com/watch?v=dGnipWz1sXY -->
  <h3 v-for="(item, index) in events" v-bind:key="index">
    {{item}}
  </h3>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dGnipWz1sXY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Kapelle17',
  data() {
    return {
      events: [
        '18.8. Jazzfestival im Stiftspark, Klingenmünster',
        '19.8. Musikschule, Waghäusel',
        '26.8. Jazz am Weintor, Schweigen-Rechtenbach',
        '11.10. Jazzclub Karlsruhe ',
        '23.10. Jazz ohne Stress am Waldsee, Freiburg',
        '25.10. Kiste, Stuttgart (noch nicht sicher!)',
        '26.10. Luke, Ludwigsburg',
        '29.10. Schon Schön, Mainz',
        '30.10. Ella & Louis, Mannheim',
        '31.10. Salon de Jazz, Köln',
        '09.11. Germersheim'
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
