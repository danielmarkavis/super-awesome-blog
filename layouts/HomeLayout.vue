<template>
  <Head>
    <Title>{{title}} | Super Awesome Blog</Title>
    <Meta name="description" :content="description??''"/>
  </Head>

  <div class="bg-level-0">
    <div class="min-h-screen">
      <NavMenu />
      <slot name="header"/>
      <div class="p-5">
        <slot name="content"/>
      </div>
    </div>
  </div>

  <Alert />
</template>

<script setup lang="ts">
import NavMenu from '~/components/NavMenu.vue'
import Alert from '~/components/Alert.vue'
import '@/css/default.css';

defineProps<{
  title: string,
  description?: string,
}>()
</script>
