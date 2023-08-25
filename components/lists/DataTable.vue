<template>
  <div
    class="mb-4 flex flex-col justify-between items-between sm:items-stretch w-full"
  >
    <div>
      <div v-if="records?.length > 0 && !loading">
        <table
          class="w-full bg-white rounded-lg shadow-sm border border-gray-300 dark:border-gray-800 overflow-x-auto"
        >
          <thead v-if="$slots.header">
            <tr class="text-sm text-primary bg-level-2 dark:bg-level-1">
              <slot name="header" v-bind="{ loading }" />
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(record, index) in records"
              :key="index"
              class="border-t border-gray-300 dark:border-gray-800 text-primary bg-level-1 dark:bg-level-2"
            >
              <slot v-bind="{ record: record, index }" />
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="text-center p-8">
        <div class="flex justify-center">
          <icon-circle v-if="loading" class="w-10 h-10 text-green-500" />
          <p v-if="!loading && records?.length === 0" class="text-primary">
            {{ noResultsMessagesError }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import iconCircle from "~/components/icons/icon-circle.vue";

const props = withDefaults(
  defineProps<{
    records: Array<object>;
    total: number;
    entity: string;
    noResultsMessages?: string;
    loading: boolean;
  }>(),
  {
    noResultsMessages: `No :entities found.`,
  },
);

const noResultsMessagesError = computed(() => {
  return props.noResultsMessages.replace(":entities", props.entity);
});
</script>
