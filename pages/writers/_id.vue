<template>
  <div>
    <cover-image :coverUrl="writer.cover"></cover-image>
    <writer-header :writer="writer"></writer-header>
    <writer-posts :posts="posts"></writer-posts>
  </div>
</template>

<script>
import { getWriterRequest } from "../../requests/writersRequests";
import CoverImage from "../../components/structure/CoverImage";
import WriterHeader from "../../components/writers/WriterHeader";
import { getWriterPostsRequest } from "../../requests/postsRequests";
import WriterPosts from "../../components/writers/WriterPosts";

export default {
  name: "_id",
  components: {
    CoverImage,
    WriterHeader,
    WriterPosts
  },
  data: () => ({
    writer: {
      id: "",
      name: "",
      avatar: "",
      cover: ""
    },
    posts: []
  }),
  mounted: async function() {
    this.writer = await getWriterRequest(this.$route.params.id);
    this.posts = await getWriterPostsRequest(this.$route.params.id);
  }
};
</script>

<style scoped></style>
