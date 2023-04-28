<template>
    <div v-if="entry">
        <div class="text-center text-xl md:text-3xl mb-4 md:mb-6">Books</div>
        <nuxt-link to="/books/" class="max-w-xs mx-auto md:max-w-md w-full">
            <v-img :src="entry.entries[0].hero[0].image[0].filename" :alt="entry.entries[0].hero[0].image[0].title" :sizes="imageSizes" imgClass="w-full latest__image" />
            <div class="max-w-xs latest__inner md:max-w-sm lg:max-w-sm mx-auto text-white text-center p-2 relative -mt-12">
                <h2 class="text-base capitalize md:text-xl bg-white text-black font-display mb-8">{{ entry.entries[0].title }}</h2>
            </div>
        </nuxt-link>
    </div>
</template>
<script>
import books from '~/apollo/queries/structures/books'

export default {
    data() {
        return {
            entry: null,
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
        entries: {
            prefetch: true,
            query: books,
            variables () {
                return {
                    limit: 1,
                }
            },
            result({ data }) {
                this.entry = data
            }
        }
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