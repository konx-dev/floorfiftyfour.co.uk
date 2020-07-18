<template>
    <!-- <div>
        <div>Stories Index</div>
        <div class="border border-black" v-for="story in entries" :key="story.id">
            <h4>{{ story.hero[0].heading }}</h4>
            <div v-html="story.hero[0].subHeading"></div>
            <div v-html="story.hero[0].copy"></div>
            <nuxt-link :to="'/short-stories/' + story.slug">{{ story.slug }}</nuxt-link>
        </div>
    </div> -->
    <div class="h-full bg-grey">
        <div class="bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="font-bold text-3xl md:text-6xl">Short Stories</h1>
            <div class="text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl">sub-heading here (if needed)</div>
        </div>

        <div class="px-4 md:px-0">
            <div class="h-full w-auto border border-black container mx-auto text-black text-center py-16 md:py-32 my-5 md:my-10 font-primary relative overflow-hidden" v-for="item in entries" :key="item.id">
                <div class="text-sm mx-auto w-64 md:w-auto md:max-w-xl relative z-10" v-html="item.hero[0].subHeading"></div>
                <h1 class="font-bold text-1xl md:text-4xl relative z-10">{{ item.hero[0].heading }}</h1>
                <div class="relative z-10" v-html="item.hero[0].description"></div>
                <v-img class="" v-if="item.hero[0].featuredImage[0]" :src="item.hero[0].featuredImage[0].filename" :alt="item.hero[0].featuredImage[0].title" img-class="w-full h-full" />
            </div>
        </div>
        
        
    </div>
</template>

<script>


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
    }
}
</script>