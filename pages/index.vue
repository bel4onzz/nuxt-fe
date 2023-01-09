<script setup>
const posts = useNuxtApp().$apiFetch('/api/posts')

// const { data: api_posts } = await useFetch('https://api.nuxtjs.dev/posts')

// const { data: posts } = useFetch('http://localhost:8000/api/posts')
// console.log("posts ::> ")
// console.log(posts)
// const { data: posts } = await useFetch('https://api.nuxtjs.dev/posts')

// let api_posts = []
// let posts = []

// Promise.all([
//     await useFetch('https://api.nuxtjs.dev/posts'),
//     await useFetch('http://localhost:8000/api/posts'),
// ]).then((response) => {
//     console.log("ALL RESPONSES")
//     console.log(response)
//     api_posts = response[0]
//     posts = response[1]
//     // posts = allResponses[1]
// })

// const [{ data: posts }, { data: api_posts }] = await Promise.all([
//     useFetch(`http://localhost:8000/api/posts`),
//     useFetch(`https://api.nuxtjs.dev/posts`),
// ]).then(response => {
//     console.log("RESPONSE :::>")
//     console.log(response)
//     return response
// }).catch((val) => {
//   console.log("ERROR");
//   console.log(val);
// })

// console.log("API POSTS")
// console.log(api_posts)
// console.log("POSTS")
// console.log(posts)
</script>
<template>
    {{ posts }}
    <PostItem v-for="post in posts" :key="post.id" :post="post"></PostItem>
    <!-- <LazyApiPostItem v-for="post in api_posts" :key="post.id" :post="api_posts"></LazyApiPostItem> -->
    <div class="container mx-auto w-1/2 py-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </div>
</template>