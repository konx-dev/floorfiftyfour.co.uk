<template>

    <div v-if="entries" class="h-full bg-grey">
        <div class="hero relative overflow-hidden bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary" v-for="item in entries" :key="item.id">
            <h1 class="relative z-10 font-bold text-3xl md:text-6xl">{{ item.hero[0].heading }}</h1>
            <div class="relative z-10 text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl" v-html="item.hero[0].subHeading"></div>
            <div class="absolute top-0 left-0">
                <v-img class="w-full h-full object-cover" v-if="item.hero[0].featuredImage[0]" :src="item.hero[0].featuredImage[0].filename" :alt="item.hero[0].featuredImage[0].title" />
            </div>
        </div>
        <div class="px-4 py-12 md:py-24">
            <stories></stories>
        </div>
    </div>
        
    
</template>

<script>
import Stories from '~/components/Stories'

// GraphQL Queries
import storyOverview from '~/apollo/queries/page/storiesOverview'

export default {
    apollo: {
        entries: {
            prefetch: true,
            query: storyOverview,
        }
    },
    data() {
        return {
        }
    },
    components: {
        Stories
    }
}
</script>