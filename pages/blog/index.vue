<template>
    <div v-if="entries" class="h-full bg-grey">
        <div class="hero relative overflow-hidden bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary" v-for="item in entries" :key="item.id">
            <h1 class="relative z-10 font-bold text-3xl md:text-6xl">{{ item.hero[0].heading }}</h1>
            <div class="relative z-10 text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl" v-html="item.hero[0].subHeading"></div>
            <v-img v-if="item.hero[0].featuredImage[0]" :src="item.hero[0].featuredImage[0].filename" :alt="item.hero[0].featuredImage[0].title" :sizes="heroSizes" imgClass="absolute h-full w-full left-0 right-0 top-0 bottom-0" />
        </div>
        <div class="bg-grey-darker px-4 py-10 md:py-20">
            <articles></articles>
        </div>
        <div class="bg-grey-darker py-5 md:py-10">
            <div class="max-w-3xl mx-auto px-4 md:px-0">
                <newsletter-general :message="exampleMessage" class="relative z-10"></newsletter-general>
            </div>
        </div>
    </div>
</template>
<script>
import Articles from '~/components/Articles'
import NewsletterGeneral from "~/components/Globals/NewsletterGeneral.vue";

// GraphQL Queries
import blogOverview from '~/apollo/queries/page/blogOverview'


export default {
    apollo: {
        $loadingKey: 'loading',
        entries: {
            prefetch: true,
            query: blogOverview,
            result({ data }) {
                this.seoTitle = data.entries[0].seoTitle;
                this.seoCanonical = data.entries[0].seoCanonical;
                this.seoMetaDescription = data.entries[0].seoMetaDescription;
                this.seoMetaKeywords = data.entries[0].seoMetaKeywords;
                this.seoRobots = data.entries[0].seoRobots;
                this.seo = data.entries[0];
            }
        }
    },
    data() {
        return {
            exampleMessage: 'Get involved. Join the newsletter and get monthly stories, reports and blog posts.',
            loading: 0,
            seo: null,
            seoTitle: null,
            seoCanonical: null,
            seoMetaDescription: null,
            seoMetaKeywords: null,
            seoRobots: null,
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
    head() {
        return {
            title: this.seoTitle,
            link: [
                { rel: 'canonical', href: this.seoCanonical }
            ],
            meta: [
                { hid: 'description', name: 'description', content: this.seoMetaDescription },
                { hid: 'keywords', name: 'keywords', content: this.seoMetaKeywords },
                { hid: 'robots', name: 'robots', content: this.seoRobots }
            ],
        }
    },
    components: {
        Articles,
        NewsletterGeneral
    }
}
</script>