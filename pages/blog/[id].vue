<template>
    <HomeLayout title="Home" description="Homepage">
      <template #content>
        test
      </template>
    </HomeLayout>
</template>

<script setup>
  import HomeLayout from '~/layouts/HomeLayout.vue'

  const {id} = useRoute().params;
</script>

<style scoped>

</style>