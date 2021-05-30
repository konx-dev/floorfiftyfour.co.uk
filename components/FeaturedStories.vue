<template>
    <div class="max-w-4xl mx-auto flex flex-col lg:flex-row justify-between">
        <template v-for="(featuredStory,index) in this.entries">
            <template v-if="featuredStory.featured === true && index < 2">
                <nuxt-link :key="featuredStory.id" :to="'short-stories/' + featuredStory.slug" class="featured-tile max-w-xs mx-auto md:max-w-md w-full">
                    <v-img class="w-full h-full object-cover" :src="featuredStory.hero[0].featuredImage[0].filename" :alt="featuredStory.hero[0].featuredImage[0].filename.title" :sizes="imageSizes" imgClass=" w-full " />
                    <div class="max-w-xs md:max-w-sm lg:max-w-sm mx-auto text-white text-center p-2 relative -mt-16">
                        <h2 class="text-xl bg-white text-black md:text-2xl font-display mb-8">{{ featuredStory.hero[0].heading }}</h2>
                        <div class="text-md font-primary md:text-lg" v-html="featuredStory.hero[0].description"></div>
                    </div>
                </nuxt-link>
            </template>
        </template>
    </div>
</template>
<script>


// GraphQL Queries
import stories from '~/apollo/queries/channels/stories'

export default {
    apollo: {
        entries: {
            prefetch: true,
            query: stories,
        },
    },
    data() {
        return {
            imageSizes: {
                // iphone 5
                320: {
                    tr: 'w-360,h-260'
                },
                // ipad
                768: {
                    tr: 'w-420,h-300'
                },
                // ipad pro
                1024: {
                    tr: 'w-420,h-300'
                },
            },
        }
    },
}
</script>

<style lang="scss">

.featured-tile {

    &:nth-child(odd) {
        margin-bottom: 2rem;

        @include min-bp($lg) {
            margin-bottom: 0;
            margin-right: 1rem;
        }
    }
    &:nth-child(even) {
        @include min-bp($lg) {
            margin-left: 1rem;
        }
    }
}


</style>