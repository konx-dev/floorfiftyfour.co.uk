<template>

    <div v-if="entry" class="h-full bg-grey-darker">
        <div class="hero relative overflow-hidden bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="relative z-10 font-bold text-3xl md:text-5xl">{{ entry.hero[0].heading }}</h1>
            <div class="relative z-10 text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl" v-html="entry.hero[0].subHeading"></div>
            <v-img class="absolute top-0 left-0 w-full h-full object-cover" v-if="entry.hero[0].featuredImage[0]" :src="entry.hero[0].featuredImage[0].filename" :alt="entry.hero[0].featuredImage[0].title" :sizes="heroSizes" imgClass="absolute h-full w-full left-0 right-0 top-0 bottom-0" />
        </div>
        <div class="container mx-auto bg-grey-darker px-4 mt-12 md:mt-24 ">
            <div class="story-view__copy text-white text-md md:text-lg max-w-3xl mx-auto" v-html="entry.contentField"></div>
        </div>
        <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto flex flex-col">
                <a class="font-extrabold text-red text-md md:text-lg mb-4" :href="'/' + report.reportEntry[0].uri" v-for="report in entry.report" :key="report.id">
                    {{ report.reportLabel }}
                </a>
            </div>
        </div>
        <div class="bg-grey" v-for="item in entries" :key="item.id">
            <div class="container mx-auto px-4 lg:px-0 py-10 flex flex-row items-center justify-between" v-if="item.slug === routeID" :key="item.id">
                <a :class="{ 'opacity-50 pointer-events-none' : !item.next }" class="entry-navigation bg-white flex flex-row items-center justify-between rounded-lg" :href="item.next ? '/' + item.next.uri : '/'" :key="item.id">
                    <div class="entry-navigation__button entry-navigation__button--left flex items-center bg-black h-full p-3">
                        <font-awesome-icon class="text-xl text-white" :icon="['fas', 'long-arrow-alt-left']" />
                    </div>
                    <span class="text-sm lg:text-base py-3 px-6 font-typewriter hidden md:block" v-if="item.next">{{ item.next.title }}</span>
                </a>
                <a href="/short-stories" class="bg-black rounded lg:rounded-lg p-2">
                    <font-awesome-icon class="text-2xl text-white" :icon="['fas', 'th']" />
                </a>
                <a :class="!item.prev ? 'opacity-50 pointer-events-none justify-end' : 'justify-between'" class="entry-navigation bg-white flex flex-row items-center rounded-lg" :href="item.prev ? '/' + item.prev.uri : '/'" :key="item.id">
                    <span class="hidden md:block text-sm lg:text-base py-3 px-6 font-typewriter" v-if="item.prev">{{ item.prev.title }}</span>
                    <div class="entry-navigation__button entry-navigation__button--right flex items-center bg-black h-full p-3">
                        <font-awesome-icon class="text-xl text-white" :icon="['fas', 'long-arrow-alt-right']" />
                    </div>
                </a>
            </div>
        </div>
        <div class="bg-grey-darker py-5 md:py-10">
            <div class="max-w-3xl mx-auto px-4 md:px-0">
                <newsletter-general :message="storyMessage" class="relative z-10"></newsletter-general>
            </div>
        </div>
        
    </div>

</template>
<script>
import NewsletterGeneral from "~/components/Globals/NewsletterGeneral.vue";

// GraphQL Queries
import story from '~/apollo/queries/channels/story'
import stories from '~/apollo/queries/channels/stories'

export default {

    data() {
        return {
            storyMessage: "New stories slither out the floor seemingly every month... To read them first, join the Floor Fifty-Four newsletter.",
            routeID: this.$route.params.slug,
            heroSizes: {
                // iphone 5
                320: {
                    tr: 'h-640'
                },
                // ipad
                768: {
                    tr: 'w-1280'
                },
                // ipad pro
                1024: {
                    tr: 'w-1440'
                },
                // desktop
                1280: {
                    tr: 'w-1600'
                }
            },
        }
    },

    apollo: {
        entry: {
            prefetch: true,
            query: story,
            variables () {
                return {
                    slug: this.$route.params.slug,
                }
            }
        },
        entries: {
            prefetch: true,
            query: stories,
        },
    },
    components: {
        NewsletterGeneral
    }
}
</script>

<style lang="scss">

.entry-navigation {
    
    max-height: 44px;

    @include min-bp($md) {
        min-width: 240px;
    }

    @include min-bp($lg) {
        min-width: 360px;
    }

    &__button {
        &--left {
            border-radius: 4px;

            @include min-bp($md) {
                border-radius: 8px 0 0 8px;
            }
        }

        &--right {
            border-radius: 4px;

            @include min-bp($md) {
                border-radius: 0 8px 8px 0;
            }
        }
    }
}

.story-view {
    
    &__copy {

        p {
            margin-bottom: 20px;
            line-height: 1.75;
        }

        a {
            color: $red;
            font-weight: $bolder;
        }
    }
}


</style>