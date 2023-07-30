<template>
  <HomeLayout title="Home" description="Homepage">
    <template #content>
      <h1 class="text-center p-5 text-accent">Welcome to super awesome blog.</h1>

      <div v-if="records?.length > 0 && !loading">
        <div class="container mx-auto">
          <div class="grid md:grid-cols-2 gap-5">
            <NuxtLink :to="'/blog/'+ record.id" class="rounded overflow-hidden shadow-lg bg-level-1 hover:bg-level-2" v-for="(record, index) in records" :key="index">
              <div class="px-6 py-4">
                <div class="font-bold text-primary text-xl mb-2">{{ record?.title }}</div>
                <p class="text-sub text-base">
                  {{ record?.body }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </template>
  </HomeLayout>
</template>

<script setup>
import HomeLayout from '~/layouts/HomeLayout.vue'
import ArticleRepository from '~/components/repositories/ArticlesRepository'

const { fetchArticles } = ArticleRepository()

let records = ref([])
let loading = ref(false)

loading.value = true
fetchArticles().then((json) => {
  records.value = json
  loading.value = false
})
</script>