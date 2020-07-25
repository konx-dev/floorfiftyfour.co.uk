<template>
    <div v-if="entries" class="h-full bg-grey">
        <div class="bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary" v-for="item in entries" :key="item.id">
            <h1 class="font-bold text-3xl md:text-6xl">{{ item.hero[0].heading }}</h1>
            <div class="text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl" v-html="item.hero[0].subHeading"></div>
        </div>
        <div class="bg-grey-darker px-4 py-12 md:py-24">
            <articles></articles>
        </div>
        
    </div>
</template>
<script>
import Articles from '~/components/Articles'

// GraphQL Queries
import blogOverview from '~/apollo/queries/page/blogOverview'

export default {
    apollo: {
        entries: {
            prefetch: true,
            query: blogOverview
        }
    },
    data() {
        return {
        }
    },
    components: {
        Articles
    }
}
</script>
