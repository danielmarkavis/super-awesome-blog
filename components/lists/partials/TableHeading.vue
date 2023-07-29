<template>
  <th
      ref="tableHeading"
  >
    <div class="flex">
      <button
          v-if="column !== undefined"
          :class="{ 'font-semibold': sortBy === column }"
          class="
          uppercase
          whitespace-no-wrap
          hover:text-green-600
          focus:text-green-600
          transition-colors
          duration-100
          focus:outline-none
          flex-grow
          py-2
          px-4
          truncate
        "
          style="text-align: inherit"
          type="button"
      >
        <slot/>
      </button>

      <span v-else class="py-2 px-4 flex-grow font-normal uppercase truncate">
        <slot/>
      </span>
    </div>
  </th>
</template>

<script>
export default {
  name: "TableHeading",

  props: {
    column: {
      type: String,
      default: undefined,
    },
  },

  data() {
    return {
      positional: 0,
      activelyResizing: false,
      redefinedWidth: 0,
    };
  },
};
</script>
