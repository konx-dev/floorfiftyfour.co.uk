<template>
    <div>
        <navigation></navigation>
        <div>Stories Index</div>
        <div class="border border-black" v-for="story in entries" :key="story.id">
            <h4>{{ story.hero[0].heading }}</h4>
            <div v-html="story.hero[0].subHeading"></div>
            <div v-html="story.hero[0].copy"></div>
            <nuxt-link :to="'/short-stories/' + story.slug">{{ story.slug }}</nuxt-link>
        </div>
    </div>
</template>
<script>
import Navigation from '~/components/Globals/Navigation'


// GraphQL Queries
import stories from '~/apollo/queries/structures/stories'

export default {
    apollo: {
        entries: {
            prefetch: true,
            query: stories,
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
