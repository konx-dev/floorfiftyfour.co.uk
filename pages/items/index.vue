<template>
    <div v-if="entries" class="h-full bg-grey items-view">
        <div class="hero relative overflow-hidden bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary" v-for="item in entries" :key="item.id">
            <h1 class="relative z-10 font-display text-3xl md:text-6xl">{{ item.hero[0].heading }}</h1>
            <div class="relative z-10 text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl" v-html="item.hero[0].subHeading"></div>
            <div class="absolute top-0 left-0 right-0 bottom-0">
                <v-img class="w-full h-full object-cover" v-if="item.hero[0].featuredImage[0]" :sizes="heroSizes" :src="item.hero[0].featuredImage[0].filename" :alt="item.hero[0].featuredImage[0].title" imgClass="absolute h-full left-0 right-0 top-0 bottom-0" />
            </div>
            <v-img v-if="item.hero[0].featuredImage[0]" :sizes="heroSizes" :src="item.hero[0].featuredImage[0].filename" :alt="item.hero[0].featuredImage[0].title" imgClass="absolute h-full w-full left-0 right-0 top-0 bottom-0" />
        </div>
        <div class="py-10">
            <div class="container mx-auto flex flex-row justify-center flex-wrap p-5">
                <a :href="'/' + item.uri" v-for="item in items" :key="item.id" class="item-card m-2 lg:m-5 bg-white p-5">
                    <div class="w-full max-width">
                        <v-img v-if="item.hero[0].image[0]" :sizes="heroSizes" :src="item.hero[0].image[0].filename" :alt="item.hero[0].image[0].title" />
                    </div>
                    <div class="py-5">
                        <span class="text-lg lg:text-xl font-typewriter">{{ item.hero[0].heading }}</span>
                        <div class="text-2xl lg:text-3xl font-typewriter" v-html="item.hero[0].subHeading"></div>
                    </div>
                </a>
            </div>
        </div>
        <div v-if="this.itemLimit < this.totalEntries" class="pb-20 flex justify-center">
            <div @click="loadMore()" class="btn mb-4 md:mb-0 md:mr-4 border cursor-pointer font-display border-black bg-black text-white transition-all duration-500 ease-in-out hover:bg-grey-darker hover:border-grey-darker">Load More</div>
        </div>
    </div>
</template>
<script>

// GraphQL Queries
import itemsOverview from '~/apollo/queries/page/itemsOverview'

export default {
    apollo: {
        $loadingKey: 'loading',
        entries: {
            prefetch: true,
            query: itemsOverview,
            result({ data }) {
                this.seoTitle = data.entries[0].seoTitle;
                this.seoMetaDescription = data.entries[0].seoMetaDescription;
                this.seoCanonical = data.entries[0].seoCanonical;
                this.seoRobots = data.entries[0].seoRobots;
                this.seoType = data.entries[0].seoContentType;

                if (data.entries[0].seoImage.length > 0) {
                    this.seoImage = data.entries[0].seoImage[0].filename
                } else {
                    this.seoImage = 'Cover-Tease.jpg'
                }
            }
        },
        items: {
            prefetch: true,
            query: itemsOverview,
            variables() {
                return {
                    limit: this.itemLimit,
                }
            },
            result({ data }) {
                this.totalEntries = data.entryCount;
            },
        }
    },
    data() {
        return {
            itemLimit: 6,
            loading: 0,
            seoTitle: null,
            seoMetaDescription: null,
            seoCanonical: null,
            seoRobots: null,
            seoImage: null,
            seoType: null,
            totalEntries: null,
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
    methods: {
        loadMore() {
            return this.itemLimit = this.itemLimit + 6;
        }
    },
    filters: {
        dateFormat: function(value) {

            let valueArray = value.split('-')
            let year = valueArray[0];
            let monthNum = valueArray[1];

            if (monthNum === '01') {
                monthNum = 'January';
            } else if (monthNum === '02') {
                monthNum = 'February';
            } else if (monthNum === '03') {
                monthNum = 'March';
            } else if (monthNum === '04') {
                monthNum = 'April';
            } else if (monthNum === '05') {
                monthNum = 'May';
            } else if (monthNum === '06') {
                monthNum = 'June';
            } else if (monthNum === '07') {
                monthNum = 'July';
            } else if (monthNum === '08') {
                monthNum = 'August';
            } else if (monthNum === '09') {
                monthNum = 'September';
            } else if (monthNum === '10') {
                monthNum = 'October';
            } else if (monthNum === '11') {
                monthNum = 'November';
            } else {
                monthNum = 'December';
            }

            value = `${monthNum} ${year}`

            return value;
        }
    },
}

</script>
<style lang="scss">

.items-view {
    .container {
        max-width: 1440px;
    }
}

.item-card {
    box-shadow: 0 12px 10px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid $grey;

    .max-width {
        width: 100%;

        @include min-bp($sm) {
            max-width: 15rem;
        }

        @include min-bp($lg) {
            max-width: 24rem;
        }
    }
}
</style>