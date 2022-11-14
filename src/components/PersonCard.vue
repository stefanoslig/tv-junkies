<script setup lang="ts">
import type { Person } from "@/api/types";

defineProps<{
  person: Person;
}>();
</script>

<template>
  <div class="w-60">
    <div
      class="pb2 block bg-gray4:10 p1 spect-10/16 transition duration-400"
      hover="scale-105 z10"
    >
      <img
        v-if="person.image?.medium"
        width="400"
        height="600"
        format="webp"
        :src="person.image?.medium"
        :alt="person.name"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div v-else class="op10">
        <div class="i-ph:question ma text-5xl h-81" />
      </div>
    </div>
    <div class="mt-2">
      {{ person.name }}
    </div>
  </div>
</template>
