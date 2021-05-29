<template>
    <div>
        <div>Books Entry</div>
        <div class="border border-black">
            {{ entry }}
        </div>
    </div>
</template>
<script>

// GraphQL Queries
import book from '~/apollo/queries/structures/book'

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
            query: book,
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
        
    }
}
</script>