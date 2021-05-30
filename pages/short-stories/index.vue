<template>

    <div v-if="entries" class="h-full bg-grey">
        <div class="hero relative overflow-hidden bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary" v-for="item in entries" :key="item.id">
            <h1 class="relative z-10 font-display text-3xl md:text-6xl">{{ item.hero[0].heading }}</h1>
            <div class="relative z-10 text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl" v-html="item.hero[0].subHeading"></div>
            <!-- <div class="absolute top-0 left-0 right-0 bottom-0">
                <v-img class="w-full h-full object-cover" v-if="item.hero[0].featuredImage[0]" :sizes="heroSizes" :src="item.hero[0].featuredImage[0].filename" :alt="item.hero[0].featuredImage[0].title" imgClass="absolute h-full left-0 right-0 top-0 bottom-0" />
            </div> -->
            <v-img v-if="item.hero[0].featuredImage[0]" :sizes="heroSizes" :src="item.hero[0].featuredImage[0].filename" :alt="item.hero[0].featuredImage[0].title" imgClass="absolute h-full w-full left-0 right-0 top-0 bottom-0" />
        </div>
        <div class="px-4 py-12 md:py-24">
            <stories></stories>
        </div>
    </div>
        
    
</template>

<script>
import Stories from '~/components/Stories'

// GraphQL Queries
import storyOverview from '~/apollo/queries/page/storiesOverview'

export default {
    apollo: {
        $loadingKey: 'loading',
        entries: {
            prefetch: true,
            query: storyOverview,
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
        }
    },
    data() {
        return {
            loading: 0,
            seoTitle: null,
            seoMetaDescription: null,
            seoCanonical: null,
            seoRobots: null,
            seoImage: null,
            seoType: null,
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
    components: {
        Stories
    }
}
</script>