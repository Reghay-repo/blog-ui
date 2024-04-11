<template>
  <div
      class="pb-8 lg:pb-12"
      :class="{ 'w-full md:flex': isBig, 'md:w-1/3': !props.isBig }"
  >
    <div
        class="px-4 lg:px-6"
        :class="{ 'md:w-2/3': props.isBig }"
    >
      <a :href="props.post.slug" :title="props.post.title">
        <img :src="props.post.image" :alt="props.post.title" class="rounded block">
      </a>
    </div>
    <div
        class="px-4 lg:px-6"
        :class="{ 'md:w-1/3': isBig }"
    >
      <h3 class="my-3" :class="{ 'md:mt-0 md:mb-6': isBig }">
        <a :href="props.post._path" :title="props.post.title">{{ props.post.title }}</a>
      </h3>
      <div class="font-serif text-lg">
        <p
            class="my-3"
            :class="{ 'md:my-6': isBig }"
        >
          {{ props.post.excerpt }}
        </p>
      </div>
      <div class="flex items-center">
        <img :src="props.post.avatar" :alt="props.post.author" class="w-12 h-12 rounded-full">
        <div class="ml-4">
          <strong class="block">{{ props.post.author }}</strong>
          <span>{{ props.post.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  post: {
    type: Object,
    default: () => {
    }
  },
  isBig: {
    type: Boolean,
    default: false
  }
})


</script>