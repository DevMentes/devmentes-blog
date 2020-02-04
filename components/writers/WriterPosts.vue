<template>
  <div>
    <h1 >Mis posts:</h1>
    <posts-list :posts="posts"></posts-list>
  </div>
</template>

<script>
import PostsList from "../posts/PostsList";

export default {
  name: "WriterPosts",
  components: { PostsList },
  props: ["posts"]
};
</script>

<style scoped></style>
