<template>
  <HomeLayout title="Admin | Blog">
    <template #content>
      <div class="container mx-auto">
        <Post title="Create Article"/>
      </div>
    </template>
  </HomeLayout>
</template>

<script setup lang="ts">
  import Post from '~/components/forms/Post.vue'
  import HomeLayout from '~/layouts/HomeLayout.vue'
</script>