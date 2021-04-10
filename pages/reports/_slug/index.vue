<template>
    <div v-if="entry">
        <div class="hero relative bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="relative z-10 font-bold text-3xl md:text-6xl">{{ entry.heading }}</h1>
            <div class="relative z-10 text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl">{{ entry.subheading }}</div>
        </div>
        <div class="py-10 px-4 md:px-8 lg:px-0 bg-grey">
            <component v-for="(block,index) in entry.pageBuilder" :key="index" :is="block.typeHandle" :block="block" :class="block.typeHandle" />
        </div>
    </div>
</template>

<script>
// Pagebuilder components
import ContentSimple from '~/components/PageBuilder/ContentSimple.vue';
import Asset from '~/components/PageBuilder/Asset.vue';

// GraphQL Queries
import report from '~/apollo/queries/structures/report'

export default {

    data() {
        return {
        }
    },

    apollo: {
        entry: {
            prefetch: true,
            query: report,
            variables () {
                return {
                    slug: this.$route.params.slug
                }
            }
        }
    },
    components: {
      ContentSimple,
      Asset,
    }
}
</script>