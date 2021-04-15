<template>
    <div v-if="entry" class="reports">
        <div class="hero relative bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="relative uppercase font-typewriter z-10 font-bold text-3xl md:text-6xl" v-html="entry.hero[0].subHeading"></h1>
            <div class="reports__subheading relative uppercase font-typewriter z-10 text-grey-darker text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl">{{ entry.hero[0].heading }}</div>
        </div>
        <!-- <div>
            <v-img :src="entry.hero[0].image[0].filename" :title="entry.hero[0].image[0].title" />
        </div> -->
        <!-- <div v-html="entry.contentField"></div> -->
        <div class="container mx-auto my-5 md:my-10">
            <div class="flex flex-row items-center justify-center mb-5" v-for="asset in entry.assets[0].assets" :key="asset.id">
                <div class="h-16 mr-8">
                    <v-img :src="asset.assetItem[0].filename" :title="asset.assetItem[0].title" />
                </div>
                <div class="max-w-md">
                    {{ asset.assetDescription }}
                </div>
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
    
</style>