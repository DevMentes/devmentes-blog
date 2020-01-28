<template>
  <div>
    <post-cover :coverUrl="post.cover"></post-cover>
    <post-header :post="post"></post-header>
  </div>
</template>

<script>
import { getPostRequest } from "../../requests/postsRequests";
import PostCover from "../../components/posts/PostCover";
import PostHeader from "../../components/posts/PostHeader";

export default {
  name: "vue",
  components: {
    PostCover,
    PostHeader
  },
  data: () => ({
    post: {
      id: "",
      title: "",
      thumbnail: "",
      cover: "",
      excerpt: "",
      writer: {
        id: "",
        name: "",
        avatar: ""
      },
      createdAt: ""
    }
  }),
  mounted: async function() {
    this.post = await getPostRequest(this.$route.params.id);
  }
};
</script>

<style scoped></style>
