<template>
  <md-avatar>
    <img :src="avatar" alt="Avatar" />
  </md-avatar>
</template>

<script>
export default {
  name: "SimpleAvatar",
  props: ["avatar"]
};
</script>

<style scoped></style>
