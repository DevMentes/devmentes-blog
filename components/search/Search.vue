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
  margin: 5px !important;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .search {
    max-width: 200px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .search {
    max-width: 400px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .search {
    max-width: 500px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .search {
    max-width: 500px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .search {
    max-width: 600px;
  }
}
</style>
