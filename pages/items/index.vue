<template>
    <div v-if="entries" class="h-full bg-grey items-view">
        <div class="hero relative overflow-hidden bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary" v-for="item in entries" :key="item.id">
            <h1 class="relative z-10 font-bold text-3xl md:text-6xl">{{ item.hero[0].heading }}</h1>
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
            <div @click="loadMore()" class="btn mb-4 md:mb-0 md:mr-4 border cursor-pointer border-black bg-black text-white transition-all duration-500 ease-in-out hover:bg-grey-darker hover:border-grey-darker">Load More</div>
        </div>
    </div>
</template>
<script>

// GraphQL Queries
import itemsOverview from '~/apollo/queries/page/itemsOverview'

export default {
    apollo: {
        entries: {
            prefetch: true,
            query: itemsOverview,
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