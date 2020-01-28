<template>
  <md-card-media class="with-hover"
  ><img class="thumbnail" :src="post.thumbnail" alt="Thumbnail" />
  </md-card-media>
</template>

<script>
  export default {
    name: 'PostThumbnail',
    props: ["post"]
  }
</script>

<style scoped>
  .thumbnail {
    height: 180px;
    width: 100%;
  }
</style>
