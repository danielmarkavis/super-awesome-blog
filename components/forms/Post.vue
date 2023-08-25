<template>
  <div class="max-w-xl mx-auto">
    <template v-if="(record && editing) || !editing">
      <div class="text-primary dark:bg-level-1 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="articleTitle">
            Title
          </label>
          <Field
            as="input"
            type="text"
            name="articleTitle"
            id="articleTitle"
            class="shadow appearance-none border-none rounded w-full py-2 px-3 text-primary dark:bg-level-2 leading-tight focus:outline-none focus:shadow-outline"
            v-bind="articleTitle"
          />
          <span>{{ errors.articleTitle }}</span>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="articleTitle">
            Body
          </label>
          <Field
            rows="10"
            as="textarea"
            name="articleBody"
            id="articleBody"
            class="shadow appearance-none border-none rounded w-full py-2 px-3 text-primary dark:bg-level-2 leading-tight focus:outline-none focus:shadow-outline"
            v-bind="articleBody"
          />
          <span>{{ errors.articleBody }}</span>
        </div>

        <div class="flex items-center justify-end gap-2">
          <button v-if="editing" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="showModal = true">
            Delete
          </button>
          <button class="text-white font-bold py-2 px-4 rounded" :class="{'bg-gray-300' : isDisabled, 'bg-blue-500 hover:bg-blue-700': !isDisabled}" :disabled="isDisabled" @click="onSubmit">
            {{ editing ? 'Update' : 'Create' }}
          </button>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="text-center p-5">
        No article found!
      </div>
    </template>
    <p class="text-center text-gray-500 text-xs">
      &copy;2023 Super Awesome Blog. All rights reserved.
    </p>
  </div>

  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <p class="font-bold">Delete article!</p>
      </template>
      <template #body>
        <p>Are you sure you want to delete this record? This cannot be undone.</p>
      </template>
      <template #footer>
        <div class="flex items-center justify-end gap-2">
          <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" @click="showModal = false">Close</button>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="confirmDelete(id)">Delete</button>
        </div>
      </template>
    </modal>
  </Teleport>
</template>

<script setup lang="ts">
import ArticleRepository from '~/repositories/ArticlesRepository'
import Modal from '~/components/Modal.vue'
import {Post} from "~/types/Post"
import {RouteParamValue} from "vue-router";

const { fetchArticle, createArticle, updateArticle, deleteArticle } = ArticleRepository()

let props = defineProps<{
  id?: string|RouteParamValue[],
  title: string
}>()

const record = ref<Post|null>(null)
const isLoading = ref<boolean>(false)
const showModal = ref<boolean>(false)

const editing = computed<boolean>(() => {
  return !!props?.id
})

if (editing.value) {
  isLoading.value = true
  await fetchArticle(props.id as string).then((json) => {
    record.value = Object.keys(json).length !== 0 ? json : null
    isLoading.value = false
  })
}

import * as yup from 'yup';
const { values, errors, defineInputBinds } = useForm({
    validationSchema: {
      articleTitle: yup.string().max(100).required(),
      articleBody: yup.string().required(),
    },
    initialValues: {
      articleTitle: record.value?.title,
      articleBody: record.value?.body,
    },
  },
)

const articleTitle = defineInputBinds('articleTitle')
const articleBody = defineInputBinds('articleBody')
const isDirty = useIsFormDirty()
const isValid = useIsFormValid()
const isDisabled = computed(() => {
  return !isDirty.value || !isValid.value || isLoading.value
})

function onSubmit() {
  isLoading.value = true
  if (!editing.value) {
    createArticle({
      userId: 1,
      title: values.articleTitle,
      body: values.articleBody,
    } as Post).finally(() => {
      isLoading.value = false
    })
  } else {
    updateArticle({
      userId: 1,
      id: props.id,
      title: values.articleTitle,
      body: values.articleBody,
    } as Post).finally(() => {
      isLoading.value = false
    })
  }
}

function confirmDelete(id:string) {
  deleteArticle(id).finally(() => {
    isLoading.value = false
  })
}
</script>