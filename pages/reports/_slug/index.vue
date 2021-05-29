<template>
    <div v-if="entry" class="reports">
        <div class="hero relative bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="relative uppercase font-typewriter z-10 font-bold text-3xl md:text-6xl"><q>{{ entry.heading }}</q></h1>
            <div class="reports__subheading relative uppercase font-typewriter z-10 text-grey-darker text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl">{{ entry.subheading }}</div>
        </div>
        <div class="py-10 px-4 md:px-8 lg:px-0 bg-grey">
            <div class="bg-white container mx-auto py-10 px-4 lg:px-0">
                <component v-for="(block,index) in entry.pageBuilder" :key="index" :is="block.typeHandle" :block="block" :class="block.typeHandle" />
            </div>
        </div>
    </div>
</template>

<script>
// Pagebuilder components
import ContentSimple from '~/components/ReportBuilder/ContentSimple.vue';
import Asset from '~/components/ReportBuilder/Asset.vue';

// GraphQL Queries
import report from '~/apollo/queries/structures/report'

export default {

    data() {
        return {
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
            query: report,
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
      ContentSimple,
      Asset,
    }
}
</script>

<style lang="scss">
    .reports {
        &__subheading {
            position: relative;

            &:after {
                content: '';
                background: white;
                position: absolute;
                top: -3px;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;

                @include min-bp($md) {
                    top: -4px;
                }
            }
        }
    }
</style>