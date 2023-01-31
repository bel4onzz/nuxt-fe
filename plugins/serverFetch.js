export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('serverFetch', $fetch.create())
})