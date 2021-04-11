<template>
    <div v-if="entry" class="reports">
        <div class="hero relative bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="relative uppercase font-typewriter z-10 font-bold text-3xl md:text-6xl"><q>{{ entry.heading }}</q></h1>
            <div class="reports__subheading relative uppercase font-typewriter z-10 text-grey-darker text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl">{{ entry.subheading }}</div>
        </div>
        <div class="py-10 px-4 md:px-8 lg:px-0 bg-grey">
            <div class="bg-white container mx-auto py-10 px-4 lg:px-0">
                <component v-for="(block,index) in entry.pageBuilder" :key="index" :is="block.typeHandle" :block="block" :class="block.typeHandle" />
            </div>
        </div>
    </div>
</template>

<script>
// Pagebuilder components
import ContentSimple from '~/components/ReportBuilder/ContentSimple.vue';
import Asset from '~/components/ReportBuilder/Asset.vue';

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

<style lang="scss">
    .reports {
        &__subheading {
            position: relative;

            &:after {
                content: '';
                background: white;
                position: absolute;
                top: -3px;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;

                @include min-bp($md) {
                    top: -4px;
                }
            }
        }
    }
</style>