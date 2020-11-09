<template>
    <div v-if="entry">
        <div class="h-auto md:h-full hero overflow-hidden relative py-10 md:py-20">
          <div class="container font-primary mx-auto max-w-4xl">
            <div class="text-white font-display px-5 lg:px-0">
              <div class="w-40 h-40 relative z-10 mb-10 mx-auto">
                <v-img class="w-full h-full object-cover" v-if="entry.hero[0].image[0]" :src="entry.hero[0].image[0].filename" :alt="entry.hero[0].image[0].title" />
              </div>
              <h1 class="relative z-10 text-2xl md:text-5xl lg:text-6xl font-bold mb-6" id="signup_anchor">
                {{ entry.hero[0].heading }}
              </h1>
              <h2 v-html="entry.hero[0].subHeading" class="relative z-10 text-base md:text-2xl font-bold mb-4"></h2>
              <div v-html="entry.hero[0].description" class="relative z-10 text-base md:text-2xl mb-8 "></div>
              <v-img v-if="entry.hero[0].featuredImage[0]" class="w-full h-full object-cover" :src="entry.hero[0].featuredImage[0].filename" :sizes="heroSizes" :alt="entry.hero[0].featuredImage[0].title" imgClass="absolute h-full w-full left-0 right-0 top-0 bottom-0" />
            </div>
          </div>
        </div>
        <div>
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
  },
  apollo: {
    entry: {
      prefetch: true,
      query: about
    }
  },
  components: {
      ContentSimple,
      Asset,
  }
}
</script>