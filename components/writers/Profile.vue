<template>
  <div class="profile-box with-hover">
    <simple-avatar class="avatar" :avatar="writer.avatar"></simple-avatar>
    <div class="data">
      <p class="owner-name">{{ writer.name }}</p>
      <p>{{ writer.followers }}</p>
    </div>
  </div>
</template>

<script>
import SimpleAvatar from "../ui/avatar/SimpleAvatar";

export default {
  name: "Profile",
  props: ["writer"],
  components: { SimpleAvatar }
};
</script>

<style scoped>
.profile-box {
  display: flex;
  align-items: center;
  min-width: 150px;
}
.avatar {
  display: block;
  margin-left: 0;
  margin-right: 0;
  width: 100px;
  height: 100px;
}
.data {
  padding: 10px;
}
.owner-name {
  font-size: 1.2em;
  color: black;
}
</style>
