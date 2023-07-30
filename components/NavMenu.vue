<template>
  <div class="bg-indigo-600 dark:bg-gray-900">
    <nav
        class="container px-5 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <NuxtLink
            to="/"
            class="text-xl font-bold text-gray-100 md:text-2xl hover:text-indigo-400"
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
            <NuxtLink :to="navItem.route" class="text-gray-300 hover:text-white hover:bg-background block md:inline-block mt-4 md:mt-0 mr-2 p-3 px-5 md:rounded-full text-sm no-underline uppercase transition-colors duration-300">{{ navItem.label }}</NuxtLink>
          </li>
        </template>

        <li>
          <div class="toggle-btn" :class="{'active': !useDark }" @click="changeTheme()">
            <div class="icon" @click="">

              <svg v-if="!useDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
let navItems = ref([
  {
    label: 'Admin',
    route: '/admin',
  },
])
const showMenu = ref(false)
const colorMode = useColorMode()
const useDark = ref(false)

nextTick(() => { // This is a way to set the switcher to whatever the system preference is.
  useDark.value = colorMode.value === 'dark'
})

function changeTheme() {
  useDark.value = !useDark.value
  if (useDark.value) {
    colorMode.value = 'dark'
  } else {
    colorMode.value = 'light'
  }
}
</script>

<style scoped>
.toggle-btn {
  position: relative;
  height: 20px;
  width: 50px;
  background-color: #42455a;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.toggle-btn .icon {
  position: absolute;
  top: 50%;
  left: -1px;
  transform: translateY(-50%);
  height: 30px;
  width: 30px;
  font-size: 30px;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #42455a;
  border: 1px solid #999;
  border-radius: 50%;
  transition: all 0.4s ease;
}

.toggle-btn.active {
  background: #e0ffff;
}

.toggle-btn.active .icon {
  left: calc(100% - 29px);
  color: #e0ffff;
  border: 1px solid #e0ffff;
}

.toggle-btn.active .icon i {
  animation: spin 0.5s;
}

@keyframes spin {
  to {
    transform: rotate(0.5turn);
  }
}
</style>
