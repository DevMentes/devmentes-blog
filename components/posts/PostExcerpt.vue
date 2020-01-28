<template>
  <div class="content">
    <p class="excerpt">{{excerpt}}</p>
  </div>
</template>

<script>
  export default {
    name: 'PostExcerpt',
    props: ["excerpt"]
  }
</script>

<style scoped>
  .content {
    padding: 10px;
    box-sizing: border-box;
  }
.excerpt {
  font-size: 1.1em;
}
</style>
