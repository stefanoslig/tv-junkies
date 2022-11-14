<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="text-2xl py3 px10 mt5">{{ props.title }}</div>
  <div ref="scrollEl" class="overflow-y-auto">
    <div class="flex gap-2 w-max p-2 px-10">
      <slot />
    </div>
  </div>
</template>
