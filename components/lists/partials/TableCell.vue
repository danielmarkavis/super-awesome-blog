<template>
  <td class="py-2 px-4" :colspan="colSpan">
    <slot />
  </td>
</template>

<script>
export default {
  name: "TableCell",
  props: {
    colSpan: {
      type: [Number, String],
      default: 1,
    },
  },
};
</script>
