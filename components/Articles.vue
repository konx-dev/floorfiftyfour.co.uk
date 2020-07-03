<template>
    <div class="articles max-w-3xl mx-auto py-10 md:py-20">
        <div 
            class="articles__card py-10 cursor-pointer font-primary text-black text-center transition duration-200 hover:bg-black hover:text-white" 
            v-for="article in entries" :key="article.id"
        >
            <h2 class="font-bold text-2xl">{{ article.hero[0].heading }}</h2>
            <h3 class="text-lg mb-5">{{ article.postDate }}</h3>
            <div class="inner mx-10">
                <div class="text-left" v-html="article.hero[0].description"></div>
                <div class="mt-10 ">
                    <nuxt-link class="py-3 px-6 hover:bg-white hover:text-black" :to="'/blog/' + article.slug">- Read More -</nuxt-link> <!-- or article.uri (TODO: test)-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>


// GraphQL Queries
import articles from '~/apollo/queries/channels/articles'

export default {
    apollo: {
        entries: {
            prefetch: true,
            query: articles,
        },
    },
    data() {
        return {
            isActive: false
        }
    }
}
</script>

<style lang="scss">

.articles {
    &__card {

        &:nth-child(odd) {
            border-top: 2px solid black;
            border-bottom: 2px solid black;
        }
    }
}


</style>