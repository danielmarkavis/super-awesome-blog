<template>
  <Head>
    <Title>{{title}}</Title>
    <Meta name="description" :content="description"/>
  </Head>

  <div class="bg-white dark:bg-black">
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

<script setup>
import NavMenu from '~/components/NavMenu.vue'
import Alert from '~/components/Alert.vue'

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
