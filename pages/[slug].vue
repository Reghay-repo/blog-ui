<template>
  <Banner/>
  <article class="flex-col justify-center items-center">
    <h3 class="mt-6 mb-3 text-5xl    text-center font-pt ">
      {{ post.title }}
    </h3>
    <div class="my-6 text-center font-pt  text-base text-gray">
      <time>{{ post.date }}</time> &mdash; {{ post.author }}
    </div>
    <NuxtImg
        v-if="post.image"
        loading="lazy"
        :src="post.image as string"
        :alt="post.title"
preload
        width="200vw"
        height="60%"
        class="rounded-xl  my-10  mx-auto "
    />

    <div class="max-w-3xl mx-auto my-8">
      <div
          class="content font-pt text-lg"
          :v-text="post"
      ></div>
      <div class="sm:flex justify-between items-center mt-16">
        <div class="flex items-center font-pt ">
          <!--          <img :src="post.avatar" :alt="post.author" class="w-12 h-12 rounded-full">-->
          <div class="ml-4 mb-10">
            <strong class="block">{{ post.author }}</strong>
            <span>{{ post.content }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
  <div class="recomendation mt-56  w-8/9    mx-auto">
    <h2 class="my-8 text-3xl mt-10 ">Recommended for you </h2>

    <div class="flex flex-wrap gap-4 justify-center py-3">
      <div v-for="(post, key) in posts.slice(0,3)">
        <RecomendationCard :post="post"/>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type Post from "~/types/post";

import {posts} from "~/data/data";
import {useRoute} from "vue-router";

const route = useRoute();
const post = ref<Post>({} as Post);

useSeoMeta({
  title: post.value.title,
  ogTitle: post.value.title,
  description: post.value.content,
  ogDescription: post.value.content,
  ogImage: post.value.image,
})


onMounted(() => {
  post.value = posts.find((post) => post.slug == route.params.slug) as Post;
})


</script>