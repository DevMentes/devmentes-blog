<template>
  <div>
    <cover-image :coverUrl="post.cover"></cover-image>
    <post-header :post="post"></post-header>
    <post-body :post="post"></post-body>
  </div>
</template>

<script>
import CoverImage from "../../components/structure/CoverImage";
import { getPostRequest } from "../../requests/postsRequests";
import PostHeader from "../../components/posts/PostHeader";
import PostBody from "../../components/posts/PostBody";

export default {
  name: "vue",
  components: {
    CoverImage,
    PostHeader,
    PostBody
  },
  data: () => ({
    post: {
      id: "",
      title: "",
      thumbnail: "",
      cover: "",
      excerpt: "",
      content: "",
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
