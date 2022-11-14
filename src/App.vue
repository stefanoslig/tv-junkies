<script setup lang="ts">
import { RouterView } from "vue-router";
import "@unocss/reset/tailwind.css";
import Navbar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
import { usebookmarksStore } from "@/stores/bookmarks";
import { storeToRefs } from "pinia";

const { bookmarkedShows } = storeToRefs(usebookmarksStore());
</script>

<template>
  <Navbar :bookmarks-count="bookmarkedShows.length" />
  <RouterView />
  <AppFooter />
</template>

<style>
html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #111;
  color: white;
  color-scheme: dark;
}
</style>
