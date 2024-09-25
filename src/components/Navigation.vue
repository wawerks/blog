<template>
  <div class="home">
    <v-app>
      <v-app-bar app color="#3C3D37" dark elevate-on-scroll>
        <v-toolbar-title>
          <span class="font-weight-light my-blog-title-light">My</span>
          <span class="font-weight-bold my-blog-title-bold">Blog</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- Toggle Button for Small Screens -->
        <v-btn icon @click="toggleDrawer" class="d-md-none" aria-label="Toggle navigation">
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <!-- Navigation Links for Medium and Large Screens -->
        <div class="d-none d-md-flex">
          <router-link to="/" custom v-slot="{ navigate }">
            <v-btn text class="mx-3" @click="navigate">Home</v-btn>
          </router-link>
          <router-link to="/about" custom v-slot="{ navigate }">
            <v-btn text class="mx-3" @click="navigate">About</v-btn>
          </router-link>
          <router-link to="/resume" custom v-slot="{ navigate }">
            <v-btn text class="mx-3" @click="navigate">Resume</v-btn>
          </router-link>
          <router-link to="/portfolio" custom v-slot="{ navigate }">
            <v-btn text class="mx-3" @click="navigate">Portfolio</v-btn>
          </router-link>
          <router-link to="/contact" custom v-slot="{ navigate }">
            <v-btn text class="mx-3" @click="navigate">Contact</v-btn>
          </router-link>
        </div>
      </v-app-bar>

      <!-- Navigation Drawer for Small Screens -->
      <v-navigation-drawer v-model="drawer" class="d-md-none">
        <v-list>
          <router-link to="/" custom v-slot="{ navigate }">
            <v-list-item @click="handleNavigation(navigate)">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/about" custom v-slot="{ navigate }">
            <v-list-item @click="handleNavigation(navigate)">
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/resume" custom v-slot="{ navigate }">
            <v-list-item @click="handleNavigation(navigate)">
              <v-list-item-title>Resume</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/portfolio" custom v-slot="{ navigate }">
            <v-list-item @click="handleNavigation(navigate)">
              <v-list-item-title>Portfolio</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/contact" custom v-slot="{ navigate }">
            <v-list-item @click="handleNavigation(navigate)">
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <!-- Main Content Section -->
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NavBar',
  setup() {
    const drawer = ref(false);

    const toggleDrawer = () => {
      drawer.value = !drawer.value;
    };

    const handleNavigation = (navigate) => {
      toggleDrawer();  // Close the drawer
      setTimeout(navigate, 200); // Allow some time for the drawer to close before navigating
    };

    return {
      drawer,
      toggleDrawer,
      handleNavigation,
    };
  },
});
</script>

<style scoped>
.v-app-bar {
  background-color: #1e1e1e; /* Adjust color to your preference */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  margin: 0;
  padding: 0;
}

.v-btn {
  font-weight: 500;
  font-size: 16px;
}

html {
  scroll-behavior: smooth; /* Enable smooth scrolling */
}
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.v-main {
  padding: 0 !important;
  margin: 0 !important;
}

.v-container {
  padding: 0 !important;
  margin: 0 !important;
  max-width: 100%;
}

.v-navigation-drawer {
  margin: 0;
  padding: 0;
}

.v-list-item {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}
.my-blog-title-light {
  font-size: 35px; /* Adjust this value */
}

.my-blog-title-bold {
  font-size: 35px; /* Adjust this value */
}
</style>
