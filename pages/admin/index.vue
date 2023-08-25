<template>
  <HomeLayout title="Admin">
    <template #content>
      <section v-if="records">
        <div class="p-5 w-100 flex items-center">
          <h2 class="text-lg font-bold text-primary">Articles</h2>
          <NuxtLink
            to="/admin/create"
            class="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create
          </NuxtLink>
        </div>
        <DataTable
          class="w-full"
          :records="records"
          entity="Article"
          :total="records.length"
          :loading="loading"
        >
          <template #header>
            <TableHeading class="text-left"> title </TableHeading>
            <TableHeading />
          </template>
          <template #default="{ record }">
            <TableCell>{{ record?.title || "&mdash;" }}</TableCell>
            <TableCell class="flex gap-2 justify-end">
              <NuxtLink
                :to="'/admin/edit/' + record?.id"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </NuxtLink>
            </TableCell>
          </template>
        </DataTable>
      </section>
      <section v-else>No records!</section>
    </template>
  </HomeLayout>
</template>

<script setup lang="ts">
import DataTable from "~/components/lists/DataTable.vue";
import TableHeading from "~/components/lists/partials/TableHeading.vue";
import TableCell from "~/components/lists/partials/TableCell.vue";
import ArticleRepository from "~/repositories/ArticlesRepository";
import HomeLayout from "~/layouts/HomeLayout.vue";
import { Post } from "~/types/Post";

const records = ref<Array<Post> | null>(null);
const loading = ref<boolean>(false);

const { fetchArticles } = ArticleRepository();

loading.value = true;
fetchArticles()
  .then((json) => {
    records.value = json;
  })
  .finally(() => {
    loading.value = false;
  });
</script>
