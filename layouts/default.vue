<template>
  <div>
    <md-app>
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button
              class="md-icon-button"
              @click="toggleMenu"
              v-if="!menuVisible"
            >
              <md-icon>menu</md-icon>
            </md-button>
          </div>
          <search></search>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <simple-avatar :avatar="authUser.avatar"></simple-avatar>
            </md-button>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content> <nuxt /></md-app-content>
    </md-app>
  </div>
</template>

<script>
import Search from "../components/search/Search";
import SimpleAvatar from "../components/ui/avatar/SimpleAvatar";

export default {
  name: "Default",
  components: {
    Search,
    SimpleAvatar
  },
  data: () => ({
    menuVisible: false,
    authUser: {
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
    }
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  box-sizing: border-box;
}
</style>
