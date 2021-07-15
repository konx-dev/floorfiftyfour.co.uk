<template>
    <nuxt-link class="btn font-display py-4 px-24 border border-white hover:bg-white hover:text-black cursor-pointer w-full md:w-auto" :to="'/blog/' + data + '/'">Read Post</nuxt-link>
</template>
<script>
export default {
    props: {
        data: {
            type: String,
            required: true
        }
    }
}
</script>