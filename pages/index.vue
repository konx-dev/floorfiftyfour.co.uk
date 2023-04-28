<template>
<div>
  <div class="h-auto md:h-full hero overflow-hidden relative">
    <div class="container font-primary mx-auto py-5 md:py-14 lg:py-20">
      <div v-for="entry in entries" :key="entry.id" class="text-white font-display px-5 lg:px-0">
        <div class="w-24 h-24 lg:w-32 lg:h-32 mb-4 md:mb-8 relative z-10 mx-auto">
          <v-img class="w-full h-full object-cover" v-if="entry.hero[0].image[0]" :src="entry.hero[0].image[0].filename" :alt="entry.hero[0].image[0].title" />
        </div>
        <h1 class="relative text-center z-10 text-2xl md:text-5xl lg:text-6xl font-raleway-bold" id="signup_anchor">
          {{ entry.hero[0].heading }}
        </h1>
        <div class="mt-5 md:mt-10 lg:mt-20">
          <LatestContent />
        </div>
        <v-img v-if="entry.hero[0].featuredImage[0]" class="w-full h-full object-cover" :lazyLoad="false" :src="entry.hero[0].featuredImage[0].filename" :sizes="heroSizes" :alt="entry.hero[0].featuredImage[0].title" imgClass="absolute h-full w-full left-0 right-0 top-0 bottom-0" />
      </div>
    </div>
  </div>
  <div>
    <LatestBlog></LatestBlog>
  </div>
  <div class="bg-grey-darker">
    <div class="container flex items-center justify-center mx-auto px-4 py-10 lg:py-20">
      <nuxt-link to="/about/" class="flex items-center gap-4 lg:gap-8">
        <span class="text-white text-2xl md:text-4xl lg:text-5xl font-display">What is Floor Fifty-Four?</span>
        <font-awesome-icon class="text-2xl lg:text-4xl mx-auto text-white h-auto icon" :icon="['fas', 'long-arrow-alt-right']" />
      </nuxt-link>
    </div>
  </div>
  <div v-if="entries" class="bg-brand-grey">
    <div class="mx-auto font-primary container py-10 md:py-20">
      <div class="max-w-4xl mx-auto text-center mb-10 px-5 lg:px-0">
        <h3 class="text-2xl md:text-4xl font-display mb-2">{{ entries[0].instafeed[0].instaTitle }}</h3>
        <div class="text-md md:text-xl">{{ entries[0].instafeed[0].subHeading }}</div>
      </div>
      <div class="flex flex-wrap justify-center px-5 lg:px-0">
        <div v-for="image in entries[0].instafeed[0].images.slice(0,4)" :key="image.id" class="w-full sm:w-1/3 h-auto m-2 lg:m-5">
          <v-img class="w-full h-full object-cover" :src="image.filename" :alt="image.title" :sizes="imageSizes" imgClass="w-full" />
        </div> 
      </div>
    </div>
  </div>
  <div class="bg-grey-darker py-5 md:py-10">
    <div class="max-w-4xl mx-auto px-4 lg:px-0">
      <newsletter-general :message="heroMessage" class="relative z-10"></newsletter-general>
    </div>
  </div>
</div>
  
</template>
<script>
import NewsletterGeneral from "~/components/Globals/NewsletterGeneral.vue";
import LatestBlog from "~/components/LatestBlog.vue";
import LatestContent from "~/components/LatestContent.vue";

// GraphQL Queries
import home from '~/apollo/queries/page/home'
import globals from '~/apollo/queries/globals'

export default {

  data() {
    return {
      heroMessage: 'Sign up for the Floor Fifty-Four Newsletter and receive free e-books, discounts and the chance to be a Beta-Reader!',
      loading: 0,
      seoTitle: null,
      seoMetaDescription: null,
      seoCanonical: null,
      seoRobots: null,
      seoImage: null,
      seoType: null,
      imageSizes: {
          // iphone 5
          320: {
              tr: 'w-300'
          },
          // ipad
          768: {
            tr: 'w-250'
          },
          // ipad pro
          1024: {
            tr: 'w-340'
          },
          // desktop
          1280: {
            tr: 'w-425'
          }
      },
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
  apollo: {
    $loadingKey: 'loading',
    entries: {
      prefetch: true,
      query: home,
      result({ data }) {

        // set seo title
        if (data.entries[0].seoTitle) {
          this.seoTitle = data.entries[0].seoTitle;
        }

        // sets meta description
        if (data.entries[0].seoMetaDescription) {
          this.seoMetaDescription = data.entries[0].seoMetaDescription;
        }

        // sets canonical link
        if (data.entries[0].seoCanonical) {
          this.seoCanonical = data.entries[0].seoCanonical;
        }

        // sets robots.txt
        if (data.entries[0].seoRobots) {
          this.seoRobots = data.entries[0].seoRobots;
        }

        // sets SEO type
        if (data.entries[0].seoContentType) {
          this.seoType = data.entries[0].seoContentType;
        }

        // sets SEO image if available
        if (data.entries[0].seoImage.length > 0) {
          this.seoImage = data.entries[0].seoImage[0].filename
        }
      }
    },
    globalSets: {
      prefetch: true,
      query: globals,
      result({ data }) {

          // set seo title from global
          if (data.globalSets[0].seoTitle && this.seoTitle == null) {
            this.seoTitle = data.globalSets[0].seoTitle;
          }

          // sets meta description
          if (data.globalSets[0].seoMetaDescription && this.seoMetaDescription == null) {
            this.seoMetaDescription = data.globalSets[0].seoMetaDescription;
          }

          // sets canonical link
          if (data.globalSets[0].seoCanonical && this.seoCanonical == null) {
            this.seoCanonical = data.globalSets[0].seoCanonical;
          }

          // sets SEO image if available
          if (data.globalSets[0].seoImage.length > 0 && this.seoImage == null) {
            this.seoImage = data.globalSets[0].seoImage[0].filename
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
    LatestBlog,
    NewsletterGeneral,
    LatestContent
  }
}
</script>
<style lang="scss">

.featured-stories {
  min-height: 770px;

  @include min-bp($md) {
    min-height: 954px;
  }

  @include min-bp($lg) {
    min-height: 489px;
  }
}

.featured-book {
  min-height: 732px;

  @include min-bp($md) {
    min-height: 574px;
  }
}

</style>