<template>
  <td class="py-2 px-4" :colspan="colSpan">
    <slot />
  </td>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  colSpan?: string,
}>(), {
  colSpan: "1"
})
</script>
