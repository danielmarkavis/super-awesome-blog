<template>
  <HomeLayout title="Admin | Blog">
    <template #content>
      <div class="container mx-auto">
        <Post :id="id" title="Edit Article"/>
      </div>
    </template>
  </HomeLayout>
</template>

<script setup lang="ts">
  import Post from '~/components/forms/Post.vue'
  import HomeLayout from '~/layouts/HomeLayout.vue'

  const { id } = useRoute().params
</script>