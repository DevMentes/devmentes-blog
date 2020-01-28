<template>
  <div class="md-layout">
    <div
      v-for="post in posts"
      :key="post.id"
      class="md-layout-item md-xsmall-size-100 md-small-size-50 md-medium-size-33 md-large-size-33"
    >
      <post-item :post="post"></post-item>
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem";

export default {
  name: "PostsItems",
  props: ["posts"],
  components: { PostItem },
  methods: {
    open(){
      alert("Abrir");
    }
  }
};
</script>

<style scoped></style>
