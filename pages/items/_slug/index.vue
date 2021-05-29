<template>
    <div v-if="entry" class="reports relative">
        <div class="hero relative bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="relative uppercase font-typewriter z-10 font-bold text-3xl md:text-6xl" v-html="entry.hero[0].subHeading"></h1>
            <div class="reports__subheading relative uppercase font-typewriter z-10 text-grey text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl">{{ entry.hero[0].heading }}</div>
        </div>
        <div class="reports__image px-4 lg:px-0">
            <v-img :src="entry.hero[0].image[0].filename" :title="entry.hero[0].image[0].title" />
        </div>
        <div class="reports__content container mx-auto px-4 lg:px-0 my-5 md:my-10 font-typewriter" v-html="entry.contentField"></div>
        <div class="reports__badges container mx-auto my-5 md:my-10">
            <div class="flex flex-row px-4 lg:px-0 items-center mb-2 lg:mb-4" v-for="asset in entry.assets[0].assets" :key="asset.id">
                <div v-if="asset.assetItem.length > 0" class="reports__icon-image mr-4">
                    <v-img :src="asset.assetItem[0].filename" :title="asset.assetItem[0].title" />
                </div>
                <div class="max-w-md text-xl md:text-xl font-typewriter">
                    {{ asset.assetDescription }}
                </div>
            </div>
        </div>
        <div class="px-4 lg:px-0 bg-black py-5 lg:py-10">
            <div class="reports__links container mx-auto text-white text-xl md:text-3xl font-typewriter" v-html="entry.linkFields[0].blockHeading"></div>
            <div class="reports__links container mx-auto font-typewriter text-base md:text-lg underline text-white" v-for="link in entry.linkFields[0].linkField" :key="link.id">
                <a v-if="link.itemType != 'entry' " :href="link.itemLink">{{ link.linkLabel }}</a>
                <a v-else :href="trimEntry(link.itemLink)">{{ link.linkLabel }}</a>
            </div>
        </div>
        <div class="bg-grey" v-for="item in items" :key="item.id">
            <div class="container mx-auto px-4 lg:px-0 py-10 flex flex-row items-center justify-between" v-if="item.slug === routeID" :key="item.id">
                <a :class="{ 'opacity-50 pointer-events-none' : !item.prev }" aria-label="Previous Item" class="entry-navigation bg-white flex flex-row items-center justify-between rounded-lg" :href="item.prev ? '/' + item.prev.uri : '/'" :key="'prev-' + item.id">
                    <div class="entry-navigation__button entry-navigation__button--left flex items-center bg-black h-full p-3">
                        <font-awesome-icon class="text-xl text-white" :icon="['fas', 'long-arrow-alt-left']" />
                    </div>
                    <span class="hidden md:block text-sm lg:text-base py-3 px-6 font-typewriter" v-if="item.prev">{{ item.prev.title }}</span>
                </a>
                <a href="/items" aria-label="Return to Items of Interest Home" class="bg-black rounded lg:rounded-lg p-2">
                    <font-awesome-icon class="text-2xl text-white" :icon="['fas', 'th']" />
                </a>
                <a :class="!item.next ? 'opacity-50 pointer-events-none justify-end' : 'justify-between'" aria-label="Next Item" class="entry-navigation bg-white flex flex-row items-center rounded-lg" :href="item.next ? '/' + item.next.uri : '/'" :key="'next-' + item.id">
                    <span class="text-sm lg:text-base py-3 px-6 font-typewriter hidden md:block" v-if="item.next">{{ item.next.title }}</span>
                    <div class="entry-navigation__button entry-navigation__button--right flex items-center bg-black h-full p-3">
                        <font-awesome-icon class="text-xl text-white" :icon="['fas', 'long-arrow-alt-right']" />
                    </div>
                </a>
            </div>
        </div>
        <items-list />
    </div>
    
</template>

<script>
import ItemsList from '~/components/ItemsList.vue'

// GraphQL Queries
import item from '~/apollo/queries/structures/items'
import itemsOverview from '~/apollo/queries/page/itemsOverview'

export default {

    data() {
        return {
            routeID: this.$route.params.slug,
            loading: 0,
            seoTitle: null,
            seoMetaDescription: null,
            seoCanonical: null,
            seoRobots: null,
            seoImage: null,
            seoType: null,
        }
    },

    apollo: {
        $loadingKey: 'loading',
        entry: {
            prefetch: true,
            query: item,
            variables () {
                return {
                    slug: this.$route.params.slug
                }
            },
            result({ data }) {
                this.seoTitle = data.entry.seoTitle;
                this.seoMetaDescription = data.entry.seoMetaDescription;
                this.seoCanonical = data.entry.seoCanonical;
                this.seoRobots = data.entry.seoRobots;
                this.seoType = data.entry.seoContentType;

                if (data.entry.seoImage.length > 0) {
                    this.seoImage = data.entry.seoImage[0].filename
                } else {
                    this.seoImage = 'Cover-Tease.jpg'
                }
            }
        },
        items: {
            prefetch: true,
            query: itemsOverview,
        }
    },
    methods: {
        trimEntry(val) {
            var pathname = new URL(val).pathname;
            return pathname;
        }
    },
    head() {
      return {
          title: this.seoTitle,
          link: [
              { rel: 'canonical', href: this.seoCanonical }
          ],
          meta: [
              { hid: 'description', name: 'description', content: this.seoMetaDescription },
              { hid: 'robots', name: 'robots', content: this.seoRobots },

              // OpenGraph tags
              { hid: 'og:type', property: 'og:type', content: this.seoType, vmid: 'og:type' },
              { hid: 'og:title', property: 'og:title', content: this.seoTitle, vmid: 'og:title' },
              { hid: 'og:description', property: 'og:description', content: this.seoMetaDescription, vmid: 'og:description' },
              { hid: 'og:image', property: 'og:image', content: 'https://ik.imagekit.io/2lyxtm1dps/' + this.seoImage, vmid: 'og:image' },
              { hid: 'og:url', property: 'og:url', content: this.seoCanonical, vmid: 'og:url' },

              // Twitter card
              { hid: 'twitter:title', property: 'twitter:title', content: this.seoTitle, vmid: 'twitter:title' },
              { hid: 'twitter:description', property: 'twitter:description', content: this.seoMetaDescription, vmid: 'twitter:description' },
              { hid: 'twitter:image', property: 'twitter:image', content: 'https://ik.imagekit.io/2lyxtm1dps/' + this.seoImage, vmid: 'twitter:image' },
              
            ],
        }
    },
    components: {
      'items-list' : ItemsList
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

.reports {

    &__image {
        background: linear-gradient(to bottom, black 0%,black 50%,#000000 50%,white 50%,white 100%);
        position: relative;

        @include min-bp($md) {
            background: none;
            margin-top: -50px;
        }

        img {
            @include min-bp($md) {
                width: 500px;
                height: auto;
            }

            @include min-bp($lg) {
                width: 600px;
                height: auto;
            }
        }
    }

    &__badges {
        max-width: 600px;
    }

    &__content {

        max-width: 600px;

        p {
            margin-bottom: 20px;
        }
    }

    &__links {
        margin-bottom: 10px;
        max-width: 600px;
        
        &:last-child {
            margin-bottom: 0;
        }
    }

    &__icon-image {

        width: 75px;
        height: 75px;
        position: relative;

        @include min-bp($md) {
            width: 105px;
            height: 105px;
        }

        img {

            width: 70px;
            height: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);

            @include min-bp($md) {
                width: 100px;
                height: auto;
            }
        }
    }
}

</style>