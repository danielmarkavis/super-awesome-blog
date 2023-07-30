<template>
  <div>
    <HomeLayout title="Home" description="Homepage">
      <template #content>
        <h1 class="text-center p-5 dark:text-white">
          Welcome to super awesome blog.
        </h1>

        <div v-if="records?.length > 0 && !loading">
          <div class="container mx-auto">
            <div class="grid md:grid-cols-2 gap-5">
              <NuxtLink
                v-for="(record, index) in records"
                :key="index"
                :to="'/blog/' + record.id"
                class="rounded overflow-hidden shadow-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700"
              >
                <div class="px-6 py-4">
                  <div class="font-bold dark:text-white text-xl mb-2">
                    {{ record?.title }}
                  </div>
                  <p class="text-gray-700 dark:text-gray-400 text-base">
                    {{ record?.body }}
                  </p>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </template>
    </HomeLayout>
  </div>
</template>

<script setup>
import HomeLayout from '~/layouts/HomeLayout.vue'
import ArticleRepository from '~/components/repositories/ArticlesRepository'

const records = ref([])
const loading = ref(false)

const { fetchArticles } = ArticleRepository()

loading.value = true
fetchArticles().then((json) => {
  records.value = json
  loading.value = false
})
</script>

<style scoped></style>
