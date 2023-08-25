<template>
  <th ref="tableHeading">
    <div class="flex">
      <button
          class="uppercase whitespace-no-wrap hover:text-green-600 focus:text-green-600 transition-colors duration-100 focus:outline-none flex-grow py-2 px-4 truncate"
          style="text-align: inherit"
          type="button"
      >
        <slot/>
      </button>
    </div>
  </th>
</template>

<script setup lang="ts">
defineProps<{
  column?: string,
}>()
</script>
