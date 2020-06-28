<template>
    <div>
        <navigation></navigation>
        <div>Blog Index</div>
        <div class="border border-black" v-for="article in entries" :key="article.id">
            <h4>{{ article.hero[0].heading }}</h4>
            <div v-html="article.hero[0].subHeading"></div>
            <div v-html="article.hero[0].copy"></div>
            <nuxt-link :to="'/blog/' + article.slug">{{ article.slug }}</nuxt-link>
        </div>
    </div>
</template>
<script>
import Navigation from '~/components/Globals/Navigation'


// GraphQL Queries
import articles from '~/apollo/queries/channels/articles'

export default {
    apollo: {
        entries: {
            prefetch: true,
            query: articles,
        }
    },
    data() {
        return {
        }
    },
    components: {
        Navigation
    }
}
</script>
