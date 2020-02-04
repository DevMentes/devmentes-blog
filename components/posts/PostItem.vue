<template>
  <md-card class="margin zoom">
    <post-thumbnail @click.native="open" :post="post"></post-thumbnail>
    <md-card-header-text class="with-hover"
      ><div @click="open" class="md-title title">
        {{ post.title }}
      </div></md-card-header-text
    >
    <md-card-content class="content">
      <post-owner class="profile" :profile="post.writer"></post-owner>
      <post-actions></post-actions>
    </md-card-content>
    <span class="date">Hace 1 día</span>
    <post-excerpt :excerpt="post.excerpt"></post-excerpt>
  </md-card>
</template>

<script>
import PostOwner from "./PostOwner";
import PostThumbnail from "./PostThumbnail";
import PostActions from "./PostActions";
import PostExcerpt from "./PostExcerpt";

export default {
  name: "PostItem",
  props: ["post"],
  components: { PostThumbnail, PostOwner, PostActions, PostExcerpt },
  methods: {
    open: function() {
      this.$router.push(`/posts/${this.post.id}`);
    }
  }
};
</script>

<style scoped>
.margin {
  margin: 10px;
}
.zoom {
  transition: transform 0.4s;
}

.zoom:hover {
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.02);
  box-shadow: 0 8px 10px -2px rgba(0, 0, 0, 0.2),
    0 8px 10px 0 rgba(0, 0, 0, 0.14), 0 8px 10px 0 rgba(0, 0, 0, 0.12);
  transition-delay: 0.1s;
}

.title {
  padding: 5px;
  font-size: 1.4em;
}
.content {
  display: flex;
  padding: 5px;
  align-items: center;
}
.date {
  margin-left: 10px;
  width: 100%;
  color: #7f828b;
  font-size: 1em;
  text-align: right;
}
.with-hover:hover {
  cursor: pointer;
}
.profile {
  width: 70%;
}
</style>
