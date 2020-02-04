<template>
  <div class="md-layout">
    <div
      class="md-layout-item md-small-hide md-medium-size-15 md-large-size-15"
    ></div>
    <div
      class="md-layout-item md-small-size-100 md-medium-size-70 md-large-size-70"
    >
      <img class="cover" :src="coverUrl" alt="Cover" />
    </div>
    <div
      class="md-layout-item md-small-hide md-medium-size-15 md-large-size-15"
    ></div>
  </div>
</template>

<script>
export default {
  name: "CoverImage",
  props: ["coverUrl"]
};
</script>

<style scoped>
.cover {
  width: 100%;
  height: 50vh;
}
</style>
