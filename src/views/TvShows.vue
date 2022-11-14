<script setup lang="ts">
import AppCarousel from "@/components/AppCarousel.vue";
import ShowCard from "@/components/ShowCard.vue";
import { query } from "@/api";
import type { Shows } from "@/api/types";
import { onMounted, ref } from "vue";
import { usebookmarksStore } from "@/stores/bookmarks";
import { storeToRefs } from "pinia";

const { isShowBookmarked } = storeToRefs(usebookmarksStore());
const { addBookmark, removeBookmark } = usebookmarksStore();
const dramaShows = ref<Shows>([]);
const comedyShows = ref<Shows>([]);
const sportsShows = ref<Shows>([]);

onMounted(async () => {
  dramaShows.value = await query.fetchShows("drama");
  comedyShows.value = await query.fetchShows("comedy");
  sportsShows.value = await query.fetchShows("sports");
});
</script>

<template>
  <AppCarousel title="Drama"
    ><ShowCard
      v-for="{ show } of dramaShows"
      :key="show.id"
      :show="show"
      :is-bookmarked="isShowBookmarked(show.id)"
      @add-bookmark="addBookmark"
      @remove-bookmark="removeBookmark"
    />
  </AppCarousel>
  <AppCarousel title="Comedy"
    ><ShowCard
      v-for="{ show } of comedyShows"
      :key="show.id"
      :show="show"
      :is-bookmarked="isShowBookmarked(show.id)"
      @add-bookmark="addBookmark"
      @remove-bookmark="removeBookmark"
  /></AppCarousel>
  <AppCarousel title="Sports"
    ><ShowCard
      v-for="{ show } of sportsShows"
      :key="show.id"
      :show="show"
      :is-bookmarked="isShowBookmarked(show.id)"
      @add-bookmark="addBookmark"
      @remove-bookmark="removeBookmark"
  /></AppCarousel>
</template>
