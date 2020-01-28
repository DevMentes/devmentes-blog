<template>
  <div>
    <h1>{{ writer.name }}</h1>
  </div>
</template>

<script>
import { getWriterRequest } from "../../requests/writersRequests";

export default {
  name: "_id",
  data: () => ({
    writer: {
      id: "",
      name: "",
      avatar: ""
    }
  }),
  mounted: async function() {
    this.writer = await getWriterRequest(this.$route.params.id);
  }
};
</script>

<style scoped></style>
