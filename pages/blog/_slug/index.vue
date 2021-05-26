<template>
    <!-- <div v-if="entry" class="h-full bg-grey article-view">
        <div class="bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="font-bold text-lg md:text-4xl">{{ entry.hero[0].heading }}</h1>
            <div class="text-md md:text-2xl mx-auto w-64 md:w-auto md:max-w-xl">{{ entry.title }}</div>
        </div>
        <div class="bg-grey-darker px-4 py-12 md:py-24">
            <div class="article-view__copy text-white text-md md:text-lg max-w-3xl mx-auto font-bold" v-html="entry.contentField"></div>
        </div>
    </div> -->
    <div v-if="entry" class="h-full bg-grey-darker">
        <div class="hero relative overflow-hidden bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="relative z-10 font-bold text-2xl md:text-3xl lg:text-5xl">{{ entry.hero[0].heading }}</h1>
            <div class="relative z-10 text-md md:text-2xl mx-auto w-64 md:w-auto md:max-w-xl">{{ entry.title }}</div>
            <v-img v-if="entry.hero[0].featuredImage" :src="entry.hero[0].featuredImage[0].filename" :alt="entry.hero[0].featuredImage[0].title" :sizes="heroSizes" imgClass="absolute h-full w-full left-0 right-0 top-0 bottom-0" />
        </div>
        <div class="container mx-auto bg-grey-darker px-5 mt-12 md:mt-20 ">
            <div class="article-view__copy text-white text-md md:text-lg max-w-3xl mx-auto" v-html="entry.contentField"></div>
        </div>
        <div class="bg-grey" v-for="item in entries" :key="item.id">
            <div class="container mx-auto px-4 lg:px-0 py-10 flex flex-row items-center justify-between" v-if="item.slug === routeID" :key="item.id">
                <!-- PREV BLOG POST -->
                <a :class=" { 'opacity-50 pointer-events-none' : !item.next }" class="entry-navigation bg-white flex flex-row items-center justify-between rounded-lg" :href="item.next ? '/blog/' + item.next.slug : '/'" :key="item.id">
                    <div class="entry-navigation__button entry-navigation__button--left flex items-center bg-black h-full p-3">
                        <font-awesome-icon class="text-xl text-white" :icon="['fas', 'long-arrow-alt-left']" />
                    </div>
                    <span class="text-sm lg:text-base py-3 px-6 font-typewriter hidden md:block" v-if="item.next">{{ item.next.title }}</span>
                </a>
                <a href="/blog" class="bg-black rounded lg:rounded-lg p-2">
                    <font-awesome-icon class="text-2xl text-white" :icon="['fas', 'th']" />
                </a>
                <!-- NEXT BLOG POST -->
                <a :class="!item.prev ? 'opacity-50 pointer-events-none justify-end' : 'justify-between'" class="entry-navigation bg-white flex flex-row items-center rounded-lg" :href="item.prev ? '/blog/' + item.prev.slug : '/'" :key="item.id">
                    <span class="hidden md:block text-sm lg:text-base py-3 px-6 font-typewriter" v-if="item.prev">{{ item.prev.title }}</span>
                    <div class="entry-navigation__button entry-navigation__button--right flex items-center bg-black h-full p-3">
                        <font-awesome-icon class="text-xl text-white" :icon="['fas', 'long-arrow-alt-right']" />
                    </div>
                </a>
            </div>
        </div>
        <div class="bg-grey-darker py-5 md:py-10">
            <div class="max-w-3xl mx-auto px-4 md:px-0">
                <newsletter-general :message="articleMessage" class="relative z-10"></newsletter-general>
            </div>
        </div>
    </div>
</template>
<script>
import NewsletterGeneral from "~/components/Globals/NewsletterGeneral.vue";

// GraphQL Queries
import article from '~/apollo/queries/channels/article'
import articles from '~/apollo/queries/channels/articles'

export default {

    data() {
        return {
            articleMessage: "Get involved. Join the newsletter and get monthly stories, reports and blog posts.",
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
            query: article,
            variables () {
                return {
                    slug: this.$route.params.slug
                }
            },
            result({ data }) {
                this.seoTitle = data.entry.seoTitle;
                this.seoMetaDescription = data.entry.seoMetaDescription;
                this.seoMetaKeywords = data.entry.seoMetaKeywords;
                this.seoRobots = data.entry.seoRobots;
            }
        },
        entries: {
            prefetch: true,
            query: articles,
        },
    },
    head() {
        return {
            title: this.seoTitle,
            link: [
                // { rel: 'canonical', href: '' }
            ],
            meta: [
                { hid: 'description', name: 'description', content: this.seoMetaDescription },
                { hid: 'keywords', name: 'keywords', content: this.seoMetaKeywords },
                { hid: 'robots', name: 'robots', content: this.seoRobots }
            ],
        }
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

.article-view__copy {

    p {
        margin-bottom: 20px;
        line-height: 1.75;
    }

    a {
        color: $red;
        font-weight: $bolder;
    }
}

</style>