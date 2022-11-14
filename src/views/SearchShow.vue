<script setup lang="ts">
import ShowCard from "@/components/ShowCard.vue";
import AppGrid from "@/components/AppGrid.vue";
import { query } from "@/api";
import type { SearchShow } from "@/api/types";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usebookmarksStore } from "@/stores/bookmarks";
import { storeToRefs } from "pinia";
import { debounce } from "@/composables/debounce";

const { isShowBookmarked } = storeToRefs(usebookmarksStore());
const { addBookmark, removeBookmark } = usebookmarksStore();

const route = useRoute();
const router = useRouter();
const input = ref((route.query.s || "").toString());

let shows = ref<Array<SearchShow>>([]);

function search() {
  shows.value = [];
  router.replace({ query: { s: input.value } });
  searchShows();
}

async function searchShows() {
  const data = await query.searchShows(input.value);
  shows.value.push(...data);
}

const vFocus = {
  mounted: (el: HTMLElement) => el.focus(),
};

const debouncedSearch = debounce(search, 200);

watch(
  () => input.value,
  () => debouncedSearch()
);

onMounted(async () => {
  search();
});
</script>

<template>
  <div class="flex flex-col">
    <div class="flex bg-gray:10 items-center px6 py4 gap3 sticky">
      <div class="i-ph:magnifying-glass text-xl op50" />
      <input
        v-model="input"
        v-focus
        type="text"
        class="text-2xl bg-transparent outline-none"
        placeholder="Type to search..."
        @keyup.enter="search"
      />
    </div>
    <p v-if="!shows.length" class="pt40 px8 op20 text-8xl self-center">
      No results
    </p>
    <p v-if="shows.length > 0" class="pt10 px8 op50">Search Results</p>
    <AppGrid>
      <ShowCard
        v-for="{ show } of shows"
        :key="show.id"
        :show="show"
        :is-bookmarked="isShowBookmarked(show.id)"
        @add-bookmark="addBookmark"
        @remove-bookmark="removeBookmark"
      />
    </AppGrid>
  </div>
</template>
