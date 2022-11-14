<script setup lang="ts">
import ShowCard from "@/components/ShowCard.vue";
import AppGrid from "@/components/AppGrid.vue";
import { usebookmarksStore } from "@/stores/bookmarks";
import { storeToRefs } from "pinia";

const { bookmarkedShows, isShowBookmarked } = storeToRefs(usebookmarksStore());
const { removeBookmark } = usebookmarksStore();
</script>

<template>
  <div class="flex flex-col">
    <p v-if="bookmarkedShows?.length > 0" class="text-2xl py3 px10 mt5">
      Bookmarked shows
    </p>
    <p v-else class="pt40 px8 op20 text-8xl self-center">No bookmarks</p>

    <AppGrid>
      <ShowCard
        v-for="show of bookmarkedShows"
        :key="show.id"
        :show="show"
        :is-bookmarked="isShowBookmarked(show.id)"
        @remove-bookmark="removeBookmark"
      />
    </AppGrid>
  </div>
</template>
