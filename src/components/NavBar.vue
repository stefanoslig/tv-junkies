<script setup lang="ts">
defineProps<{
  bookmarksCount: number;
}>();
</script>

<template>
  <nav flex="~ row" class="justify-evenly items-center py5 lg:px5 bg-black">
    <RouterLink v-slot="{ isActive }" to="/tv-shows" title="TV Shows">
      <div
        class="text-2xl"
        :class="
          isActive ? 'i-ph-television-fill text-primary' : 'i-ph-television'
        "
      />
    </RouterLink>
    <RouterLink v-slot="{ isActive }" to="/search" title="Search">
      <div
        class="text-2xl"
        :class="
          isActive
            ? 'i-ph-magnifying-glass-fill text-primary'
            : 'i-ph-magnifying-glass'
        "
      />
    </RouterLink>
    <RouterLink v-slot="{ isActive }" to="/bookmarks" title="Bookmarks">
      <div class="relative">
        <div
          class="text-2xl"
          :class="
            isActive
              ? 'i-ph-bookmark-simple-fill text-primary'
              : 'i-ph-bookmark-simple'
          "
        ></div>
        <div
          v-if="bookmarksCount > 0"
          class="bg-red w4 h4 rounded-full absolute top-0 right-0"
        ></div>
      </div>
    </RouterLink>
  </nav>
</template>
