<template>
  <div class="bg-level-2">
    <nav class="container px-5 py-8 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <NuxtLink
            to="/"
            class="text-xl font-bold text-accent hover:text-accent md:text-2xl"
        >
          Blog
        </NuxtLink>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
              type="button"
              class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <template v-for="(navItem,key) in navItems" :key="key">
          <li>
            <NuxtLink :to="navItem.route" class="text-sub hover:text-primary block md:inline-block mt-4 md:mt-0 mr-2 p-3 px-5 md:rounded-full text-sm no-underline uppercase transition-colors duration-300">{{ navItem.label }}</NuxtLink>
          </li>
        </template>

        <li>
          <Switcher />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import Switcher from '~/components/Switcher.vue'

let navItems = ref<object>([
  {
    label: 'Admin',
    route: '/admin',
  },
])
const showMenu = ref(false)
</script>

