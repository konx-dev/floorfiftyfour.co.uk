<template>
    <div v-if="entry" class="h-full bg-grey article-view">
        <div class="bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="font-bold text-lg md:text-4xl">{{ entry.hero[0].heading }}</h1>
            <div class="text-md md:text-2xl mx-auto w-64 md:w-auto md:max-w-xl">{{ entry.title }}</div>
        </div>
        <div class="bg-grey-darker px-4 py-12 md:py-24">
            <div class="article-view__copy text-white text-md md:text-lg max-w-3xl mx-auto font-bold" v-html="entry.contentField"></div>
        </div>
    </div>
</template>
<script>
import Navigation from '~/components/Globals/Navigation'

// GraphQL Queries
import article from '~/apollo/queries/channels/article'

export default {

    data() {
        return {
        }
    },

    apollo: {
        entry: {
            prefetch: true,
            query: article,
            variables () {
                return {
                    slug: this.$route.params.slug
                }
            }
        }
    },
    components: {
        Navigation
    }
}
</script>

<style lang="scss">

.article-view {
    &__copy {
        p {
            margin-bottom: 30px;
        }
    }
}

</style>