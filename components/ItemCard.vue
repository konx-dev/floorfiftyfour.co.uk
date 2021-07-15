<template>
    <nuxt-link :to="item.slug + '/'" class="item-card m-2 lg:m-5 bg-white p-5">
        <div class="w-full max-width">
            <v-img v-if="item.hero[0].image[0]" :sizes="heroSizes" :src="item.hero[0].image[0].filename" :alt="item.hero[0].image[0].title" />
        </div>
        <div class="py-5">
            <span class="text-lg lg:text-xl font-typewriter">{{ item.hero[0].heading }}</span>
            <div class="text-2xl lg:text-3xl font-typewriter" v-html="item.hero[0].subHeading"></div>
        </div>
    </nuxt-link>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
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
    }
}

</script>
<style lang="scss">

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