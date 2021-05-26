<template>

    <div v-if="entries" class="h-full bg-grey">
        <div class="hero relative overflow-hidden bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary" v-for="item in entries" :key="item.id">
            <h1 class="relative z-10 font-bold text-3xl md:text-6xl">{{ item.hero[0].heading }}</h1>
            <div class="relative z-10 text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl" v-html="item.hero[0].subHeading"></div>
            <div class="absolute top-0 left-0">
                <v-img class="w-full h-full object-cover" v-if="item.hero[0].featuredImage[0]" :src="item.hero[0].featuredImage[0].filename" :alt="item.hero[0].featuredImage[0].title" />
            </div>
        </div>
        <div class="">
            <Books></Books>
        </div>
        {{ seo }}
    </div>
        
</template>

<script>
import Books from "~/components/Books.vue"

// GraphQL Queries
import booksOverview from '~/apollo/queries/page/booksOverview'

export default {
    apollo: {
        entries: {
            prefetch: true,
            query: booksOverview,
            result({ data }) {
                this.seoTitle = data.entries[0].seoTitle;
                this.seoMetaDescription = data.entries[0].seoMetaDescription;
                this.seoMetaKeywords = data.entries[0].seoMetaKeywords;
                this.seoRobots = data.entries[0].seoRobots;
            }
        },
        
    },
    data() {
        return {
            seoTitle: null,
            seoMetaDescription: null,
            seoMetaKeywords: null,
            seoRobots: null,
            seo: null,
        }
    },
    head() {
        return {
            title: this.seoTitle,
            link: [
                // { rel: 'canonical', href: '' }
            ],
            meta: [
                { hid: 'description', name: 'description', content: this.seoMetaDescription },
                { hid: 'keywords', name: 'keywords', content: this.seoMetaKeywords },
                { hid: 'robots', name: 'robots', content: this.seoRobots }
            ],
        }
    },
    components: {
        Books
    }
}
</script>
