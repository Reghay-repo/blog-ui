<template>
  <div
      class="pb-8 lg:pb-12"
      :class="{ 'w-full md:flex': props.isBig, 'md:w-1/3': !props.isBig }"
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
      <h2 class="my-4 font-rubik text-2xl font-light " :class="{ 'md:mt-0 md:-mb-6': isBig }">
        <a :href="props.post.slug" :title="props.post.title">{{ props.post.title }}</a>
      </h2>
      <div class="font-rubik mt-8 text-lg">
        <p
            class="my-4"
            :class="{ 'md:my-6': isBig }"
        >
          {{ props.post.content.slice(1,235) }}
        </p>
      </div>
      <div class="flex items-center">
        <div class="ml-4">
          <strong class="block">{{ props.post.author }}</strong>
          <span>{{ props.post.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type Post from "~/types/post";

const props = defineProps<{
  post:Post;
  isBig:boolean,
}>()


</script>