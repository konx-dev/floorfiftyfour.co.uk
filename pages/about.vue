<template>
    <div v-if="entry">
        <div class="hero relative overflow-hidden bg-black h-full text-white text-center px-4 py-12 md:py-32 font-primary">
            <h1 class="relative z-10 font-bold text-3xl md:text-6xl">{{ entry.hero[0].heading }}</h1>
            <div class="relative z-10 text-md md:text-3xl mx-auto w-64 md:w-auto md:max-w-xl" v-html="entry.hero[0].subHeading"></div>
            <v-img v-if="entry.hero[0].featuredImage" :sizes="heroSizes" :src="entry.hero[0].featuredImage[0].filename" :alt="entry.hero[0].featuredImage[0].title" imgClass="absolute h-full w-full left-0 right-0 top-0 bottom-0" />
        </div>
        <div class="py-10 px-4 md:px-8 lg:px-0 bg-grey">
            <component v-for="(block,index) in entry.pageBuilder" :key="index" :is="block.typeHandle" :block="block" :class="block.typeHandle" />
        </div>
    </div>
</template>
<script>
// Pagebuilder components
import ContentSimple from '~/components/PageBuilder/ContentSimple.vue';
import Asset from '~/components/PageBuilder/Asset.vue';

// GraphQL Queries
import about from '~/apollo/queries/page/about'

export default {
  apollo: {
    $loadingKey: 'loading',
    entry: {
      prefetch: true,
      query: about,
      result({ data }) {
        this.seoTitle = data.entry.seoTitle;
        this.seoCanonical = data.entry.seoCanonical;
        this.seoMetaDescription = data.entry.seoMetaDescription;
        this.seoMetaKeywords = data.entry.seoMetaKeywords;
        this.seoRobots = data.entry.seoRobots;
      }
    }
  },
  data() {
    return {
      loading: 0,
      seoTitle: null,
      seoCanonical: null,
      seoMetaDescription: null,
      seoMetaKeywords: null,
      seoRobots: null,
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
        { hid: 'keywords', name: 'keywords', content: this.seoMetaKeywords },
        { hid: 'robots', name: 'robots', content: this.seoRobots }
      ],
    }
  },
  components: {
      ContentSimple,
      Asset,
  }
}
</script>