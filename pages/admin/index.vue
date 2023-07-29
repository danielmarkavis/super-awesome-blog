<template>
  <HomeLayout title="Admin">
    <template #content>
      <DataTable class="w-full" :records="records" entities="Articles" :total="records.length" :loading="loading">
        <template #header>
          <TableHeading class="text-left">title</TableHeading>
          <TableHeading/>
        </template>
        <template #default="{ record }">
          <TableCell>{{ record?.title || '&mdash;' }}</TableCell>
          <TableCell class="flex gap-2 justify-end">
            <NuxtLink :to="'/admin/edit/'+record?.id" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</NuxtLink>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="deleteArticleById(record?.id)">Delete</button>
          </TableCell>
        </template>
      </DataTable>
    </template>
  </HomeLayout>

  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>
</template>

<script setup>
import DataTable from '~/components/lists/DataTable.vue'
import TableHeading from '~/components/lists/partials/TableHeading.vue'
import TableCell from '~/components/lists/partials/TableCell.vue'
import ArticleRepository from '~/components/repositories/ArticlesRepository'
import HomeLayout from '~/layouts/HomeLayout.vue'
import Modal from '/components/Modal.vue'

let records = ref([])
let loading = ref(false)
let showModal = ref(false)

const { fetchArticles, deleteArticle } = ArticleRepository()

fetchArticles().then((json) => {
  records.value = json;
})

// updateArticle({
//       id: records.id,
//       title: form.title,
//       body: form.body,
//       userId: 1,
//     }).then((json) => {
//   records.value = json;
// })

function deleteArticleById(id) {
  deleteArticle(id);
}

</script>

<style scoped>

</style>