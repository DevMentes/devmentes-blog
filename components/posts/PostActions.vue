<template>
  <md-card-actions class="actions">
    <md-button class="md-icon-button">
      <md-icon>bookmark</md-icon>
    </md-button>
    <div @click="switchShow">
      <ul v-show="show" class="floating list hidden">
        <li>
          <md-button
            href="https://www.facebook.com/sharer/sharer.php?u=https://blog.devmentes.cl/posts/asdad"
            target="_blank"
            class="md-icon-button share"
          >
            F
          </md-button>
        </li>
        <li>
          <md-button
            href="https://twitter.com/share?url=https://blog.devmentes.cl/posts/akfnqa&text=Probando el compartir!"
            target="_blank"
            class="md-icon-button share"
          >
            T
          </md-button>
        </li>
      </ul>
      <md-button class="md-icon-button">
        <md-icon>share</md-icon>
      </md-button>
    </div>
  </md-card-actions>
</template>

<script>
export default {
  name: "PostActions",
  data: () => ({
    show: false
  }),
  methods: {
    switchShow: function() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.actions {
  position: relative;
  width: 30%;
}
.list {
  list-style: none;
}
.item {
  list-style: none;
}
.share {
  margin: 5px !important;
  background-color: rgba(201, 199, 197, 0.8);
  transition: 1s;
}
.floating {
  position: absolute;
  bottom: 40px;
  right: 3px;
}
.hidden {
}
</style>
