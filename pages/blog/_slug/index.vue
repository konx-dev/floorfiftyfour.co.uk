<template>
    <!-- <div v-if="entry" class="h-full bg-grey article-view">
        <div class="bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="font-bold text-lg md:text-4xl">{{ entry.hero[0].heading }}</h1>
            <div class="text-md md:text-2xl mx-auto w-64 md:w-auto md:max-w-xl">{{ entry.title }}</div>
        </div>
        <div class="bg-grey-darker px-4 py-12 md:py-24">
            <div class="article-view__copy text-white text-md md:text-lg max-w-3xl mx-auto font-bold" v-html="entry.contentField"></div>
        </div>
    </div> -->
    <div v-if="entry" class="h-full bg-grey-darker">
        <div class="hero relative overflow-hidden bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="relative z-10 font-bold text-2xl md:text-3xl lg:text-5xl">{{ entry.hero[0].heading }}</h1>
            <div class="relative z-10 text-md md:text-2xl mx-auto w-64 md:w-auto md:max-w-xl">{{ entry.title }}</div>
            <v-img v-if="entry.hero[0].featuredImage" :src="entry.hero[0].featuredImage[0].filename" :alt="entry.hero[0].featuredImage[0].title" :sizes="heroSizes" imgClass="absolute h-full w-full left-0 right-0 top-0 bottom-0" />
        </div>
        <div class="container mx-auto bg-grey-darker px-5 mt-12 md:mt-20 ">
            <div class="article-view__copy text-white text-md md:text-lg max-w-3xl mx-auto" v-html="entry.contentField"></div>
        </div>
        <div class="bg-grey-darker py-5 md:py-10">
            <div class="max-w-3xl mx-auto px-4 md:px-0">
                <newsletter-general :message="articleMessage" class="relative z-10"></newsletter-general>
            </div>
        </div>
    </div>
</template>
<script>
import NewsletterGeneral from "~/components/Globals/NewsletterGeneral.vue";

// GraphQL Queries
import article from '~/apollo/queries/channels/article'

export default {

    data() {
        return {
            articleMessage: "Get involved. Join the newsletter and get monthly stories, reports and blog posts.",
            heroSizes: {
                // iphone 5
                320: {
                    tr: 'h-640'
                },
                // ipad
                768: {
                    tr: 'w-1280'
                },
                // ipad pro
                1024: {
                    tr: 'w-1440'
                },
                // desktop
                1280: {
                    tr: 'w-1600'
                }
            },
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
        NewsletterGeneral
    }
}
</script>

<style lang="scss">

.article-view__copy {

    p {
        margin-bottom: 20px;
        line-height: 1.75;
    }

    a {
        color: $red;
        font-weight: $bolder;
    }
}

</style>