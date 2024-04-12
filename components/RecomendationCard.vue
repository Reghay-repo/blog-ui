<script setup lang="ts">

import type Post from "~/types/post";
import {useRouter} from "vue-router";

const router = useRouter();
const props = defineProps<{
  post: Post
}>()

 function GoToLink(link: string) {

  // window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  // alert(link)
   router.push(`${link}`);
}

</script>

<template>
  <div class="max-w-lg mx-auto ">
    <div class=" border-gray-200 rounded-lg max-w-sm mb-5">
      <a :href="props.post.slug">
        <img class="rounded-t-lg" :src="props.post.image" :alt="props.post.title">
      </a>
      <div class="p-5">
        <a :href="props.post.slug">
          <h5 class="text-gray-900 font-semibold text-2xl tracking-tight mb-2">{{ props.post.title }}</h5>
        </a>
        <p class="font-normal text-gray-700 mb-3">{{ props.post.content.slice(1, 200) }}</p>
        <button
            :name="post.title"
            class="text-black bg-white-700 border-2 hover:bg-amber-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            @click="GoToLink(props.post.slug)">
          Read more
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>