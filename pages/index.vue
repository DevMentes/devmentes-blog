<template>
  <section class="container">
    <posts-items :posts="posts"></posts-items>
  </section>
</template>

<script>
import PostsItems from "../components/posts/PostsList";
import { getPostsRequest } from "../requests/postsRequests";

export default {
  components: {
    PostsItems
  },
  data: () => ({
    posts: []
  }),
  mounted: async function() {
    this.posts = await getPostsRequest();
    console.log("POSTS", this.posts);
  }
};
</script>

<style>
.container {
  min-height: 100vh;
}
</style>
