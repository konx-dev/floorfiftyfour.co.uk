<template>
    <div v-if="ctx">
        <div class="text-center text-xl md:text-3xl mb-4 md:mb-6">
            <nuxt-link to="/items/" class="">Items of Interest</nuxt-link>
        </div>
        <nuxt-link :to="'items/' + ctx.entry.slug + '/'" class="max-w-xs mx-auto md:max-w-md w-full">
            <v-img :src="ctx.entry.hero[0].image[0].filename" :alt="ctx.entry.hero[0].image[0].title" :sizes="imageSizes" imgClass="w-full latest__image" />
            <div class="max-w-xs latest__inner md:max-w-sm lg:max-w-sm mx-auto text-white text-center p-2 relative -mt-12">
                <h2 class="text-base md:text-xl bg-white text-black font-display mb-8">{{ ctx.entry.hero[0].heading }}</h2>
            </div>
        </nuxt-link>
    </div>
</template>
<script>
import itemsOfInterest from '~/apollo/queries/structures/items'

export default {
    data() {
        return {
            ctx: null,
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
    apollo: {
        entry: {
            prefetch: true,
            query: itemsOfInterest,
            variables () {
                return {
                    limit: 1,
                }
            },
            result({ data }) {
                this.ctx = data
            } 
        },
    }
}
</script>
<style lang="scss">

.latest {
    &__image {
        width: 320px;
        height: 231px;

        @include min-bp($md) {
            width: 448px;
            height: 320px;
        }

        @include min-bp($lg) {
            width: 432px;
            height: 308px;
        }
    }
}


</style>