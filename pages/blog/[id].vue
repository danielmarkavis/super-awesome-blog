<template>
    <HomeLayout title="Home" description="Homepage">
      <template #content>
        <div class="container mx-auto py-5">
          <h1 class="text-2xl font-bold mb-4">{{record?.title}}</h1>
          <p>{{record?.body}}</p>
        </div>
      </template>
    </HomeLayout>
</template>

<script setup>
  import HomeLayout from '~/layouts/HomeLayout.vue'

  const {id} = useRoute().params;
  let record = ref(null)
  const isLoading = ref(false)

  import ArticleRepository from '~/components/repositories/ArticlesRepository'
  const { fetchArticle } = ArticleRepository()
  await fetchArticle(id).then((json) => {
    record.value = Object.keys(json).length !== 0 ? json : null
    isLoading.value = false
  })

</script>

<style scoped>

</style>