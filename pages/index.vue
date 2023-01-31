<template>
  <div>

      <div>
        <h1>Color mode: {{ $colorMode.value }}</h1>
        <select v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sepia">Sepia</option>
        </select>
      </div>

<p class="hello-paragraph" @click="validate">Hellooo</p>

    <div v-if="api_posts.data">
      <ApiPostItem v-for="post in api_posts.data" :key="post.id" :post="post"></ApiPostItem>
    </div>

    <div v-if="posts.data">
      <span>Helloo {{ api_posts }}</span>
      <PostItem v-for="post in posts.data" :key="post.id" :post="post"></PostItem>
    </div>

    <div class="container mx-auto w-1/2 py-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </div>
  </div>
</template>

<script setup>
function validate({ params, query, store }) {
  console.log("VALIDATE")
  console.log(params)
  console.log(query)
  console.log(store)
  // await operations
  return "HELLOOO" // if the params are valid
  // return false // will stop Nuxt to render the route and display the error page
};

const nuxtApp = useNuxtApp()
const posts = reactive({ data: [] });
const api_posts = reactive({ data: [] });
nuxtApp
  .$apiFetch("/api/posts")
  .then(function (response) {
    posts.data = response;
  })
  .catch(function () {
    console.log("ERROR FETCH");
  });

// api_posts.data = useFetch('https://api.nuxtjs.dev/posts')
api_posts.data = nuxtApp
  .$serverFetch("https://api.nuxtjs.dev/posts")
  .then(function (response) {
    api_posts.data = response;
  });

const colorMode = useColorMode()

console.log("colorMode.preference")
console.log(colorMode.preference)

// useNuxtApp().$serverFetch('https://api.nuxtjs.dev/posts').then(function (response) {
//     console.log("API POSTS")
//     console.log(response)
//     api_posts.data = response;
// }).catch(function(){
//     console.log("ERROR API FETCH")
// })
</script>
<style>
.hello-paragraph {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode .hello-paragraph {
  background-color: #091a28;
  color: #ebf4f1;
}

.sepia-mode .hello-paragraph {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
