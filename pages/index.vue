<template>
  <HomeLayout title="Home" description="Homepage">
    <template #content>
      <h1 class="text-center p-5 text-accent">
        Welcome to super awesome blog.
      </h1>

      <div v-if="records && records?.length > 0 && !loading">
        <div class="container mx-auto">
          <div class="grid md:grid-cols-2 gap-5">
            <NuxtLink
              v-for="(record, index) in records"
              :key="index"
              :to="'/blog/' + record.id"
              class="rounded overflow-hidden shadow-lg bg-level-1 hover:bg-level-2"
            >
              <div class="px-6 py-4">
                <div class="font-bold text-primary text-xl mb-2">
                  {{ record?.title }}
                </div>
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

<script setup lang="ts">
import HomeLayout from "~/layouts/HomeLayout.vue";
import ArticleRepository from "~/repositories/ArticlesRepository";
import { Post } from "~/types/Post";

const { fetchArticles } = ArticleRepository();

const records = ref<Array<Post> | null>(null);
const loading = ref<boolean>(false);

loading.value = true;
fetchArticles().then((json: Array<Post>) => {
  records.value = json;
  loading.value = false;
});
</script>
