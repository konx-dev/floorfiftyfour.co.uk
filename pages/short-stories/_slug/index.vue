<template>

    <div v-if="entry" class="h-full bg-grey">
        <div class="hero relative overflow-hidden bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="relative z-10 font-bold text-3xl md:text-5xl">{{ entry.hero[0].heading }}</h1>
            <div class="relative z-10 text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl" v-html="entry.hero[0].subHeading"></div>
            <div class="absolute top-0 left-0">
                <v-img class="w-full h-full object-cover" v-if="entry.hero[0].featuredImage[0]" :src="entry.hero[0].featuredImage[0].filename" :alt="entry.hero[0].featuredImage[0].title" />
            </div>
        </div>
        <div class="bg-grey-darker px-4 py-12 md:py-24">
            <div class="story-view__copy text-white text-md md:text-lg max-w-3xl mx-auto" v-html="entry.contentField"></div>
        </div>
    </div>

</template>
<script>
import Navigation from '~/components/Globals/Navigation'

// GraphQL Queries
import story from '~/apollo/queries/channels/story'

export default {

    data() {
        return {
        }
    },

    apollo: {
        entry: {
            prefetch: true,
            query: story,
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



.story-view {
    
    &__copy {
        p {
            margin-bottom: 10px;
        }
    }
}


</style>