<template>
  <HomeLayout title="Home" description="Homepage">
    <template #content>
      <section v-if="record">
        <div class="container mx-auto py-5 md:max-w-lg">
          <div class="mb-5">
            <h1 class="text-2xl font-bold mb-4 text-primary uppercase">
              {{ record.title }}
            </h1>
            <p class="text-sub">
              {{ record.body }}
            </p>
          </div>

          <h3
            class="text-xl font-bold text-primary mb-3 pt-3 border-t border-accent"
          >
            Comments
          </h3>
          <div v-for="(comment, index) in comments" :key="index" class="mb-3">
            <div class="flex">
              <div class="mr-3 mt-1 text-accent">
                <NuxtLink :to="'emailto:' + comment.email.toLocaleLowerCase()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-12 h-12"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </NuxtLink>
              </div>
              <div>
                <h4 class="text-lg font-bold text-primary">
                  {{ comment.name }}
                </h4>
                <p class="text-sub">
                  {{ comment.body }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section v-else>No article found!</section>
    </template>
  </HomeLayout>
</template>

<script setup lang="ts">
import HomeLayout from "~/layouts/HomeLayout.vue";
import { Post } from "~/types/Post";
import { Comment } from "~/types/Comment";
import ArticleRepository from "~/repositories/ArticlesRepository";

const { fetchArticle, fetchArticleComments } = ArticleRepository();
const { id } = useRoute().params;

const record = ref<Post | null>(null);
await fetchArticle(id as string).then((json) => {
  record.value = Object.keys(json).length !== 0 ? json : null;
});

const comments = ref<Array<Comment> | null>(null);
await fetchArticleComments(id as string).then((json) => {
  comments.value = Object.keys(json).length !== 0 ? json : null;
});
</script>
