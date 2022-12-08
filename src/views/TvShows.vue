<script setup lang="ts">
import AppCarousel from "@/components/AppCarousel.vue";
import ShowCard from "@/components/ShowCard.vue";
import { query } from "@/api";
import { type Show, QUERY_LIST } from "@/api";
import { computed, onMounted, ref } from "vue";
import { usebookmarksStore } from "@/stores/bookmarks";
import { storeToRefs } from "pinia";

const { isShowBookmarked } = storeToRefs(usebookmarksStore());
const { addBookmark, removeBookmark } = usebookmarksStore();

const shows = ref<Array<Show>>([]);
const loading = ref<boolean>(false);

const showsFilteredByGenre = computed(() => (genre: string) => {
  return shows.value.filter((show) => show.genres.includes(genre)).slice(0, 20);
});

const queries = computed(() => [QUERY_LIST.movie[0], QUERY_LIST.tv[0]]);

onMounted(async () => {
  loading.value = true;
  shows.value = await query.fetchShows();
  loading.value = false;
});
</script>

<template>
  <div v-if="!loading">
    <AppCarousel
      v-for="item of queries"
      :key="item.type + item.query"
      :title="item.title"
      ><ShowCard
        v-for="show of showsFilteredByGenre(genre)"
        :key="show.id"
        :show="show"
        :is-bookmarked="isShowBookmarked(show.id)"
        @add-bookmark="addBookmark"
        @remove-bookmark="removeBookmark"
      />
    </AppCarousel>
  </div>
  <p v-else class="pt40 px8 op20 text-8xl self-center">Loading...</p>
</template>
