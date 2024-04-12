<template>
  <Header/>
  <main class="max-w-screen-xl mx-auto px-4 sm:px-6 xl:px-10 py-5 xl:py-10 text-balance text-black font-pt">
    <div class="mt-56" :class="[scrollY > 200 ? 'visible' : 'hidden']">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem earum ipsa ipsam itaque nemo tempore ut
      voluptatum? Deserunt dolorum error ex obcaecati provident temporibus tenetur! Alias maiores praesentium
      reprehenderit saepe.
    </div>
    <NuxtPage/>
  </main>
  <div class="fixed bottom-0 right-0 p-4">
    <button @click="GoTop" class="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onclick="backToTop()">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  </div>
</template>


<script setup lang="ts">


function GoTop() {
  window.scrollTo({top: 0, left: 0, behavior: "smooth"})
}
</script>