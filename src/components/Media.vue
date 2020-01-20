<template>
  <div class="hello">
    <h1>Media</h1>
    <!-- <h2>Youtube</h2> -->
    <!-- <h2>Bandcamp</h2> -->
    <div style="float:right;margin-bottom:20px;width:50%;min-width:300px">
      <img src="https://i.ibb.co/3N7k73b/Scan015.jpg" width="100%" />
      <img src="https://i.ibb.co/rfQxGBg/contact.jpg" width="100%" />
    </div>
    <iframe
      style="border: 0; width: 40%; height: 470px;margin-bottom:20px"
      src="https://bandcamp.com/EmbeddedPlayer/album=1287943275/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/transparent=true/"
      seamless
      ><a
        href="http://kapelle17.bandcamp.com/album/music-for-young-business-people"
        >Music For Young Business People by kapelle17</a
      ></iframe
    >
    <!-- https://soundcloud.com/johannes-mann/trepak-livekorridor -->

    <!-- <h2>Soundcloud</h2> -->
    <br />
    <iframe
      style="margin-bottom:20px"
      width="100%"
      height="300"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/546877041&color=%23414030&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    ></iframe>
    <br />

    <iframe
      style="margin-bottom:20px"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/videoseries?list=PLwBdrxA3ObS0TlK7ZUhwbh0YSjhh845wJ"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <!-- https://www.youtube.com/playlist?list=PLwBdrxA3ObS0TlK7ZUhwbh0YSjhh845wJ -->
    <br />
    <!-- https://www.youtube.com/watch?v=dGnipWz1sXY -->
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Media'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
