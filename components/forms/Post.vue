<template>
  <div class="w-full">
    <template v-if="(record && editing) || !editing">
      <Form
          @submit="onSubmit"
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          validate-on-mount
      >
        <h2 class="py-5 text-lg">{{ title }}</h2>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Title
          </label>
          <Field
              as="input"
              type="text"
              name="title"
              id="title"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-bind="form.title"
          />
          <span>{{ errors.title }}</span>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="articleBody">
            Body
          </label>
          <Field
              as="textarea"
              name="articleBody"
              id="articleBody"
              rows="10"
              class="shadow block p-2.5 w-full text-sm rounded border border-gray-300"
              v-bind="form.body"
              :validateOnChange="true"
          />
          <span>{{ errors.body }}</span>
        </div>

        <button class="text-white font-bold py-2 px-4 rounded" :class="{'bg-blue-200' : isDisabled, 'bg-blue-500 hover:bg-blue-700': !isDisabled}" :disabled="isDisabled">
          {{ editing ? 'Update' : 'Create' }}
        </button>

        <div v-if="message" class="my-4 p-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
          <span class="font-medium">Info alert!</span> {{ message }}.
        </div>

      </Form>
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
</template>

<script setup>
import ArticleRepository from '~/components/repositories/ArticlesRepository'
const { fetchArticle, createArticle, updateArticle } = ArticleRepository()

let props = defineProps({
  id: {
    type: [String, null],
    default: null,
  },
  title: {
    type: String,
    required: true,
  },
})

let record = ref(null)
let message = ref(null)
const isLoading = ref(false)

const editing = computed(() => {
  return !!props?.id
})

if (editing.value) {
  isLoading.value = true
  await fetchArticle(props.id).then((json) => {
    record.value = Object.keys(json).length !== 0 ? json : null
    isLoading.value = false
  })
}

import * as yup from 'yup'
const { errors, defineInputBinds } = useForm({
      validationSchema: {
        title: yup.string().max(100).required(),
        body: yup.string().required(),
      },
      initialValues: {
        title: record.value?.title,
        body: record.value?.body,
      },
    },
);

let form = reactive({
  title: defineInputBinds('title'),
  body: defineInputBinds('body'),
})

const isDirty = useIsFormDirty()
const isValid = useIsFormValid()

const isDisabled = computed(() => {
  return !isDirty.value || !isValid.value || isLoading.value
})

function required(value) {
  return value ? true : 'This field is required'
}

function onSubmit(values) {
  isLoading.value = true
  if (!editing.value) {
    createArticle({
      userId: 1,
      title: values.title,
      body: values.body,
    }).then((json) => {
      message = 'Article created'
      isLoading.value = false
    })
  } else {
    updateArticle({
      userId: 1,
      id: props.id,
      title: values.title,
      body: values.body,
    }).then((json) => {
      message = 'Article updated'
      isLoading.value = false
    })
  }
}
</script>