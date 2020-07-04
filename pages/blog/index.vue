<template>
    <div class="h-full bg-grey">
        <div class="bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary" v-for="item in entries" :key="item.id">
            <h1 class="font-bold text-3xl md:text-5xl">{{ item.hero[0].heading }}</h1>
            <div class="text-md mx-auto w-64" v-html="item.hero[0].subHeading"></div>
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
