<template>
    <div>
        <template v-for="featuredStory in this.entries">
            <template v-if="featuredStory.featured === true">
                <div :key="featuredStory.id" class="featured-card__container font-primary py-20 md:py-40" :style="{ backgroundImage: `url('https://ik.imagekit.io/2lyxtm1dps/${featuredStory.hero[0].featuredImage[0].filename}?q=80&auto=format')` }">
                    <div class="inner w-auto container relative z-10 mx-5 md:mx-auto max-w-4xl bg-white px-5 md:px-10 pb-5 pt-10 md:pt-20 md:pb-10">
                        <h2 class="absolute inner__section-title text-center md:text-right text-white font-bold uppercase text-xl md:text-4xl container mx-auto max-w-4xl">
                            Featured Short Story
                        </h2>
                        <h3 class="text-2xl md:text-4xl font-bold mb-4 leading-none">{{ featuredStory.hero[0].heading }}</h3>
                        <div class="text-md md:text-xl" v-html="featuredStory.hero[0].description"></div>
                        <div class="flex flex-col text-center md:text-left md:flex-row mt-5 md:mt-10">
                            <nuxt-link class="py-4 px-10 border border-black transition-all duration-500 ease-in-out hover:bg-black hover:text-white" :to="'short-stories/' + featuredStory.slug">Read Now</nuxt-link>
                        </div>
                    </div>
                </div>
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
        }
    },
    computed: {
        // featuredStory() { // why wouldn't this work? 
        //     for (let item of this.entries) {
        //         if (item.featured === true) {
        //             return item
        //         }
        //     }
        // },
        // featuredImage() {
        //     if (this.featuredStory.hero[0].featuredImage[0]) {
        //         return 'https://ik.imagekit.io/2lyxtm1dps/' + this.featuredStory.hero[0].featuredImage[0].filename + '?q=80&auto=format';
        //     } else {
        //         return 'https://ik.imagekit.io/2lyxtm1dps/hero-dark-forest.jpg' + '?q=80&auto=format';
        //     }
        // }
    },
}
</script>

<style lang="scss">

.featured-card {
    &__container {
        position: relative;
        background-size: cover;
        background-position: bottom;

        &::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.4);
            top: 0;
            left: 0;
            transition: all 1s ease-in-out;

        }

        &:hover {
            &::before {
                background: rgba(0,0,0,0.8);
            }
        }

        .inner {
            &__section-title {
                top: -55px;
                left: 0px;

                @include min-bp($md) {
                    top: -40px;
                }
            }
        }
    }
}

</style>