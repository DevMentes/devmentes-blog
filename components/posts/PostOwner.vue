<template>
  <div @click="openProfile" class="profile-box with-hover">
    <simple-avatar class="avatar" :avatar="profile.avatar"></simple-avatar>
    <div class="owner-name">
      {{ profile.name }}
    </div>
  </div>
</template>

<script>
import SimpleAvatar from "../ui/avatar/SimpleAvatar";

export default {
  name: "PostOwner",
  props: ["profile"],
  components: {
    SimpleAvatar
  },
  methods: {
    openProfile: function() {
      this.$router.push(`/writers/${this.profile.id}`);
    }
  }
};
</script>

<style scoped>
.profile-box {
  display: flex;
  align-items: center;
  min-width: 150px;
}
.with-hover:hover {
  cursor: pointer;
}
.avatar {
  display: block;
  margin-left: 0;
  margin-right: 0;
}
.owner-name {
  margin-left: 5px;
  font-size: 1.2em;
  color: black;
}
</style>
