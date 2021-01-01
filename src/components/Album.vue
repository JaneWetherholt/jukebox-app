<template>
    <b-card
      v-bind:title="title"
      v-bind:sub-title="artist"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="album-card"
    >
    </b-card>
</template>

<script>
export default {
    name: 'Album',
    props: {
        title: {
            type: String,
            required: true
        },
        artist: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.album-card {
    margin: 1rem 2rem;
    min-height: 250px;
}
.album-card .card-title {
    font-size: 1.35rem;
}
</style>