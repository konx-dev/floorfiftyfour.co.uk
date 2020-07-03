<template>
    <div class="h-full bg-grey">
        <div class="bg-black h-full text-white text-center py-32 font-primary" v-for="item in entries" :key="item.id">
            <h1 class="font-bold text-5xl">{{ item.hero[0].heading }}</h1>
            <div class="text-1xl" v-html="item.hero[0].subHeading"></div>
        </div>
        <articles></articles>
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
