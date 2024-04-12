<template>
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
</script>
