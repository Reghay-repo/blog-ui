<template>
 <Banner/>
  <div class="flex flex-wrap mx-4 lg:mx-6">
    <PostCard
        v-for="(post, key) in data"
        :key="post.title"
        :post="post"
        :is-big="!key"
    />
  </div>
</template>

<script setup lang="ts">
import {posts} from "~/data/data";

const data = posts;


useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})


</script>
