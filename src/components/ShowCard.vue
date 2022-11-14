<script setup lang="ts">
import StarsRate from "@/components/StarsRate.vue";
import type { Show } from "@/api/types";

defineProps<{
  show: Show;
  isBookmarked: boolean;
}>();

const emit = defineEmits<{
  (e: "removeBookmark", id: number): void;
  (e: "addBookmark", show: Show): void;
}>();
</script>

<template>
  <RouterLink :to="`/tv-shows/${show.id}`" class="w-60">
    <div
      class="pb2 block bg-gray4:10 p1 spect-10/16 transition duration-400"
      hover="scale-105 z10"
    >
      <img
        v-if="show.image?.medium"
        width="400"
        height="600"
        format="webp"
        :src="show.image?.medium"
        :alt="show.name"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div v-else class="op10">
        <div class="i-ph:question ma text-5xl h-81" />
      </div>
    </div>
    <div class="mt-2">
      {{ show.name }}
    </div>
    <div class="flex text-sm gap-2 items-center justify-between">
      <StarsRate class="w-20" :value="show.rating.average" />
      <div class="op60">
        {{ show.rating.average }}
      </div>
      <button
        v-if="isBookmarked"
        class="text-lg mr-5 i-ph-bookmark-simple-fill text-primary"
        @click.prevent="emit('removeBookmark', show.id)"
      ></button>
      <button
        v-else
        class="text-lg mr-5 i-ph-bookmark-simple"
        @click.prevent="emit('addBookmark', show)"
      ></button>
    </div>
  </RouterLink>
</template>
