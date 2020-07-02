<template>
    <div class="max-w-3xl mx-auto my-20">
        <div class="font-primary border-t border-b border-white text-white text-center py-16" v-for="article in entries" :key="article.id">
            <h2 class="font-bold text-2xl">{{ article.hero[0].heading }}</h2>
            <h3 class="text-lg">{{ article.postDate }}</h3>
            <div v-if="isVisible">
                <div v-html="article.hero[0].description"></div>
                <nuxt-link :to="'/blog/' + article.slug">- Read More -</nuxt-link> <!-- or article.uri (TODO: test)-->
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
            isVisible: false
        }
    }
}
</script>
