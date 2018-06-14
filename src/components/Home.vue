<template>
  <div class="hello">
    <h1>Kapelle 17</h1>
    {{events}}<!-- https://www.youtube.com/watch?v=dGnipWz1sXY -->
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Kapelle 17',
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
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
