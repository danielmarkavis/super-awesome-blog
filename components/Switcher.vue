<template>
  <ColorScheme placeholder="" tag="span">
    <div class="relative cursor-pointer rounded-full toggle-btn bg-level-1" :class="{'active bg-accent': $colorMode.value !== 'dark' }" @click="changeTheme()">
      <div class="icon absolute flex items-center justify-center">
        <svg v-if="$colorMode.value !== 'dark'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
          <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd"/>
        </svg>
      </div>
    </div>
  </ColorScheme>
</template>

<script setup>
const colorMode = useColorMode()

function changeTheme() {
  let theme = (colorMode.value === 'dark') ? 'light' : 'dark'
  colorMode.preference = theme;
  colorMode.value = theme;
}
</script>

<style scoped>
.toggle-btn {
  height: 20px;
  width: 50px;
  transition: all 0.4s ease;
}

.toggle-btn .icon {
  top: 50%;
  left: -1px;
  transform: translateY(-50%);
  height: 30px;
  width: 30px;
  font-size: 30px;
  color: #999;
  background: #42455a;
  border: 1px solid #999;
  border-radius: 50%;
  transition: all 0.4s ease;
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
