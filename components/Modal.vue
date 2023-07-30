<script setup>
defineProps({
  show: Boolean,
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask fixed top-0 left-0" @click="$emit('close')">
      <div class="modal-container m-auto bg-level-1 dark:bg-level-2 rounded-md shadow-md">
        <div class="modal-header text-primary bg-level-2 dark:bg-level-1 p-5 rounded-t-md">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-body text-sub p-5">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footer pb-5 pr-5">
          <slot name="footer">
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  transition: all 0.3s ease;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>