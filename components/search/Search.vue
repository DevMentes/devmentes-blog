<template>
  <md-autocomplete
    class="search"
    v-model="selectedPost"
    :md-options="posts"
    md-layout="box"
  >
    <label>Buscar...</label>
  </md-autocomplete>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    selectedPost: null,
    posts: ["uno", "dos"]
  })
};
</script>

<style scoped>
.search {
  max-width: 500px;
}
</style>
