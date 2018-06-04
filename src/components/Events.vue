<template>
  <div class="hello">
    <h2>Events</h2>
    {{events}}
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Events',
  data() {
    return {
      events: ['A', 'B', 'C']
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
