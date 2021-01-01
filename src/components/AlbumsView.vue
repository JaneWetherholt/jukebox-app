<template>
  <div>
    <h1 class="header">Albums</h1>
    <b-row class="justify-content-md-center">
        <b-col v-for="album in albums" v-bind:key="album.id" col md="2">
            <Album
            v-bind:title="album.title"
            v-bind:artist="album.artist"
            ></Album>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import Album from "./Album";

export default {
  name: "AlbumsView",
  components: {
    Album,
  },
  props: {
    albums: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.header {
    margin-top: 2rem;
    font-size: 3rem;
}
.row {
    width: 90%;
    margin: 0 auto;
}
</style>

