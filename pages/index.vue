<template>
    <div v-if="posts">
        <span>Helloo {{ posts }}</span>
        <PostItem v-for="post in posts.data" :key="post.id" :post="post"></PostItem>
    </div>
    <!-- <LazyApiPostItem v-for="post in api_posts" :key="post.id" :post="api_posts"></LazyApiPostItem> -->
    <div class="container mx-auto w-1/2 py-8">
        123 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </div>
</template>

<script setup>
const posts = reactive({ data: [] })
useNuxtApp().$apiFetch('/api/posts').then(function (response) {
    posts.data = response;
}).catch(function(){
    console.log("ERROR FETCH")
})
</script>