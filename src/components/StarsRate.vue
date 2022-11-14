<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  value?: number;
}>();

const style = computed(() => ({
  "clip-path": `inset(0 ${(10 - (props?.value || 0)) * 10}% 0 0)`,
}));
</script>

<template>
  <div relative aspect="11/2" filter-hue-rotate-320deg>
    <img src="../assets/stars.webp" absolute inset-0 aria-hidden="true" />
    <img
      src="../assets/stars-filled.webp"
      class="absolute inset-0"
      aria-hidden="true"
      :style="style"
    />
  </div>
</template>
