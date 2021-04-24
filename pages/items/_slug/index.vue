<template>
    <div v-if="entry" class="reports">
        <div class="hero relative bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="relative uppercase font-typewriter z-10 font-bold text-3xl md:text-6xl" v-html="entry.hero[0].subHeading"></h1>
            <div class="reports__subheading relative uppercase font-typewriter z-10 text-grey-darker text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl">{{ entry.hero[0].heading }}</div>
        </div>
        <div class="reports__image px-4 lg:px-0">
            <v-img :src="entry.hero[0].image[0].filename" :title="entry.hero[0].image[0].title" />
        </div>
        <div class="reports__content container mx-auto px-4 lg:px-0 my-5 md:my-10 font-typewriter" v-html="entry.contentField"></div>
        <div class="reports__badges container mx-auto my-5 md:my-10">
            <div class="flex flex-row px-4 lg:px-0 items-center mb-2 lg:mb-4" v-for="asset in entry.assets[0].assets" :key="asset.id">
                <div class="reports__icon-image mr-4">
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
                <nuxt-link :to="link.itemLink">{{ link.linkLabel }}</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>

// GraphQL Queries
import item from '~/apollo/queries/structures/items'

export default {

    data() {
        return {
        }
    },

    apollo: {
        entry: {
            prefetch: true,
            query: item,
            variables () {
                return {
                    slug: this.$route.params.slug
                }
            }
        }
    },
    components: {
      
    }
}
</script>

<style lang="scss">
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