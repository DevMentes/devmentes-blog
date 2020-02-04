<template>
  <div class="body" v-html="post.html_body"></div>
</template>

<script>
export default {
  name: "PostBody",
  props: ["post"],
  content: "# Hola mierda"
};
</script>

<style scoped>
.body {
  box-sizing: border-box;
}
</style>
