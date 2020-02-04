<template>
  <div class="md-layout header">
    <div class="md-layout-item md-small-hide md-large-size-20"></div>
    <div
      class="md-layout-item md-small-size-100 md-large-size-25 center-content"
    >
      <profile :writer="writer"></profile>
    </div>
    <div
      class="md-layout-item md-small-hide md-layout-item md-large-size-10"
    ></div>
    <div class="md-layout-item md-small-100 md-large-size-25"></div>
    <div class="md-layout-item md-small-hide md-large-size-20"></div>
  </div>
</template>

<script>
import Profile from "./Profile";

export default {
  name: "WriterHeader",
  props: ["writer"],
  components: {
    Profile
  }
};
</script>

<style scoped>
.header {
  height: 20vh;
}
.center-content {
  display: flex;
  align-items: center;
}
.title {
  text-align: center;
  margin: 40px;
}
</style>
