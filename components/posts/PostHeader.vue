<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-hide md-large-size-25"></div>
    <div class="md-layout-item md-small-size-100 md-large-size-50">
      <h1 class="title">{{ post.title }}</h1>
      <post-owner :profile="post.writer"></post-owner>
      <span>Hace 1 día</span>
    </div>
    <div class="md-layout-item md-small-hide md-large-size-25"></div>
  </div>
</template>

<script>
import PostOwner from "./PostOwner";

export default {
  name: "PostHeader",
  props: ["post"],
  components: { PostOwner }
};
</script>

<style scoped>
.title {
  text-align: center;
  margin: 40px;
}
</style>
