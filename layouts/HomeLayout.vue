<template>
  <Head>
    <Title>{{title}}</Title>
    <Meta name="description" :content="description"/>
  </Head>

  <div v-cloak id="docs-root">
    <div class="min-h-screen">
      <NavMenu />
      <slot name="header"/>
      <slot name="content"/>
    </div>
  </div>
</template>

<script setup>
import NavMenu from '~/components/NavMenu.vue'

defineProps({
  title: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
})
</script>
