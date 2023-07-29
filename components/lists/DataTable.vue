<template>
  <div class="mb-4 flex flex-col justify-between items-between sm:items-stretch w-full">
    <div>
      <div v-if="records?.length > 0 && !loading">
        <div class="grid grid-cols-2">
          <div class="flex justify-left">
            <icon-circle v-if="loading" class="w-10 h-10 text-green-500"/>
          </div>
        </div>

        <table class="w-full bg-white rounded-lg shadow-sm border border-gray-300 overflow-x-auto">
          <thead v-if="$slots.header">
            <tr class="text-sm bg-gray-200 text-gray-700">
              <slot
                  name="header"
                  v-bind="{
                    loading,
                  }"
              />
            </tr>
          </thead>

          <tbody>
            <tr
                v-for="(record, index) in records" :key="index"
                class="border-t border-gray-300"
            >
              <slot v-bind="{ 'record': record, index }"/>
            </tr>
          </tbody>
        </table>
      </div>

      <p v-else class="text-gray-700 text-center p-8">
        {{ noResultsMessage || `No ${entities} found.` }}
      </p>
    </div>
  </div>
</template>

<script setup>
import iconCircle from '~/components/icons/icon-circle.vue'

defineProps({
  records: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  entities: {
    type: String,
    required: true,
  },
  noResultsMessage: {
    type: String,
    default: null,
  },
})

let loading = ref(false);
</script>
