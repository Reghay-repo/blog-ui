<template>
  <!--  <Header/>-->
  <div class="content">

    <Navbar/>

    <main class="max-w-screen-xl mx-auto px-4 sm:px-6 xl:px-10 py-5 xl:py-10 text-balance text-black font-pt">
      <NuxtPage/>
    </main>
    <div class="fixed bottom-0 right-0 p-4">
      <button @click="GoTop" aria-label="Go to top page"
              class="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
              onclick="backToTop()">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </div>

  </div>

    <Footer class="footer"/>
</template>


<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
    style: 'font-size: 13px'
  }
})
onMounted(() => {
  window.scrollTo({top: 0, left: 0, behavior: "smooth"});
})

function GoTop() {
  window.scrollTo({top: 0, left: 0, behavior: "smooth"})
}
</script>


<style scoped>
.content {
  min-height: calc(100vh - 70px);
}

.footer {
  height: 100%;
}
</style>