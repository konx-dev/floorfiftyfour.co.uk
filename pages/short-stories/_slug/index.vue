<template>

    <div v-if="entry" class="h-full bg-grey-darker">
        <div class="hero relative overflow-hidden bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="relative z-10 font-bold text-3xl md:text-5xl">{{ entry.hero[0].heading }}</h1>
            <div class="relative z-10 text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl" v-html="entry.hero[0].subHeading"></div>
            <v-img class="absolute top-0 left-0 w-full h-full object-cover" v-if="entry.hero[0].featuredImage[0]" :src="entry.hero[0].featuredImage[0].filename" :alt="entry.hero[0].featuredImage[0].title" />
        </div>
        <div class="container mx-auto bg-grey-darker px-4 sm:mt-12 md:mt-24 ">
            <div class="story-view__copy text-white text-md md:text-lg max-w-3xl mx-auto" v-html="entry.contentField"></div>
        </div>
        <div class="bg-grey-darker py-5 md:py-10">
            <div class="max-w-3xl mx-auto px-4 md:px-0">
                <newsletter-general :message="storyMessage" class="relative z-10"></newsletter-general>
            </div>
        </div>
    </div>

</template>
<script>
import NewsletterGeneral from "~/components/Globals/NewsletterGeneral.vue";

// GraphQL Queries
import story from '~/apollo/queries/channels/story'

export default {

    data() {
        return {
            storyMessage: "New stories slither out the floor seemingly every month... To read them first, join the Floor Fifty-Four newsletter."
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
        NewsletterGeneral
    }
}
</script>

<style lang="scss">

.story-view {
    
    &__copy {

        p {
            margin-bottom: 20px;
            line-height: 1.75;
        }

        a {
            color: $red;
            font-weight: $bolder;
        }
    }
}


</style>