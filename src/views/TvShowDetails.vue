<script setup lang="ts">
import StarsRate from "@/components/StarsRate.vue";
import AppCarousel from "@/components/AppCarousel.vue";
import PersonCard from "@/components/PersonCard.vue";

import { query } from "@/api/fetch-wrapper";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import type { Show } from "@/api/types";

const route = useRoute();
const id = route.params.id as string;

const show = ref<Show | null>();

onMounted(async () => {
  show.value = await query.fetchShow(id, "cast");
});
</script>

<template>
  <div v-if="!!show">
    <div
      class="relative aspect-ratio-1/1 md:aspect-ratio-3/2 lg:aspect-ratio-25/9 bg-black"
    >
      <div class="absolute top-0 right-0 left-1/3" lt-lg="left-0" lg="bottom-0">
        <img
          width="400"
          height="225"
          :src="show.image?.original"
          :alt="show.name"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div
        class="h-full absolute bottom-0 left-0 pt-60 px-10 justify-center from-black via-black to-transparent"
        lt-lg="bg-gradient-to-t right-0 p10"
        lg="pl25 pr40 w-2/3 bg-gradient-to-r"
      >
        <h1 class="mt-2 text-4xl lg:text-5xl line-clamp-2">
          {{ show.name }}
        </h1>
        <div class="gap3 items-center mt4" flex="~ row wrap">
          <StarsRate class="w-25" :value="show.rating.average" />
          <div class="op50 hidden md:block">
            {{ show.rating.average }}
          </div>
          <div v-if="show.premiered" op50>
            {{ show.premiered.slice(0, 4) }}
          </div>
        </div>
        <p
          class="mt-2 op80 leading-relaxed of-hidden line-clamp-3 md:line-clamp-5 text-xs md:text-base"
          v-html="show.summary"
        ></p>
      </div>
    </div>
    <AppCarousel v-if="show._embedded.cast.length > 0" title="Cast"
      ><PersonCard
        v-for="i of show._embedded.cast"
        :key="i.person.id"
        :person="i.person"
    /></AppCarousel>
  </div>
</template>
