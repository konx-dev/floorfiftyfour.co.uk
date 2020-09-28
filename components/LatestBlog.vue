<template>
        <div v-if="entries" class="featured-card__container font-primary py-20 md:py-40" :style="{ backgroundImage: `url('${featuredImage }')` }">
            
            <div class="inner w-auto container relative z-10 mx-5 md:mx-auto max-w-4xl bg-white px-5 md:px-10 pb-5 pt-10 md:pt-20 md:pb-10">
                <h2 class="absolute inner__section-title text-center md:text-right text-white font-bold uppercase text-xl md:text-4xl container mx-auto max-w-4xl">
                    Latest Blog Post
                </h2>
                <h3 class="text-2xl md:text-4xl font-bold mb-4 leading-none">{{ LatestPost.hero[0].heading }}</h3>
                <div class="text-base md:text-xl" v-html="LatestPost.hero[0].description"></div>
                <div class="flex flex-col text-center md:text-left md:flex-row mt-5 md:mt-10">
                    <nuxt-link class="btn mb-4 md:mb-0 md:mr-4 border border-black bg-black text-white transition-all duration-500 ease-in-out hover:bg-grey-darker hover:border-grey-darker" :to="'blog/' + LatestPost.slug">Read Now</nuxt-link>
                    <nuxt-link class="py-4 px-10 border border-black transition-all duration-500 ease-in-out hover:bg-grey-darker hover:border-grey-darker hover:text-white" to="blog">View All</nuxt-link>
                </div>
            </div>
        </div>
</template>
<script>


// GraphQL Queries
import articles from '~/apollo/queries/channels/articles'

export default {
    apollo: {
        entries: {
            prefetch: true,
            query: articles,
        },
    },
    data() {
        return {
        }
    },
    computed: {
        LatestPost() {

            let arrayPos = 0

            for (let item of this.entries) {
                
                if (arrayPos === 0) {
                    return item;
                } else {
                    return;
                }
                arrayPos++;
            }
        },
        featuredImage() {
            if (this.LatestPost.hero[0].featuredImage[0].filename) {
                return 'https://ik.imagekit.io/2lyxtm1dps/' + this.LatestPost.hero[0].featuredImage[0].filename + '?q=80&auto=format';
            } else {
                return 'no image provided'
            }
        }
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
            background: rgba(0,0,0,0.8);
            top: 0;
            left: 0;
            transition: all 1s ease-in-out;

        }

        &:hover {
            &::before {
                background: rgba(0,0,0,0.3);
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