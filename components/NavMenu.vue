<template>
  <div class="text-white bg-gray-700 p-5 flex items-center">
    <NuxtLink to="/">Home</NuxtLink>

    <div id="navbar-solid-bg" class="w-full md:block md:w-auto">
      <ul class="flex flex-col font-medium mt-4 rounded-lg md:flex-row md:ml-8 md:space-x-2 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <template v-for="(navItem,key) in navItems" :key="key">
          <li>
            <NuxtLink :to="navItem.route" class="text-gray-300 hover:text-white hover:bg-background block md:inline-block mt-4 md:mt-0 mr-2 p-3 px-5 md:rounded-full text-sm no-underline uppercase transition-colors duration-300">{{navItem.label}}</NuxtLink>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup>
let navItems = ref([
  {
    label: 'Admin',
    route: '/admin'
  }
])
</script>
