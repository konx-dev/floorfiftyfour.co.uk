<template>
<div>
  <div class="h-auto md:h-full hero overflow-hidden relative">
    <div class="container font-primary mx-auto max-w-4xl">
      <div v-for="entry in entries" :key="entry.id" class="text-white font-display px-5 lg:px-0">
        <div class="w-24 h-24 lg:w-32 lg:h-32 relative z-10 my-4 lg:my-8 mx-auto">
          <v-img class="w-full h-full object-cover" v-if="entry.hero[0].image[0]" :src="entry.hero[0].image[0].filename" :alt="entry.hero[0].image[0].title" />
        </div>
        <h1 class="relative text-center z-10 text-2xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-20" id="signup_anchor">
          {{ entry.hero[0].heading }}
        </h1>
        <!-- <h2 v-html="entry.hero[0].subHeading" class="relative z-10 text-base md:text-2xl font-bold mb-4"></h2>
        <div v-html="entry.hero[0].description" class="relative z-10 text-base md:text-2xl mb-8 "></div> -->
        <v-img v-if="entry.hero[0].featuredImage[0]" class="w-full h-full object-cover" :src="entry.hero[0].featuredImage[0].filename" :sizes="heroSizes" :alt="entry.hero[0].featuredImage[0].title" imgClass="absolute h-full w-full left-0 right-0 top-0 bottom-0" />
      </div>
    </div>
  </div>
  <div class="bg-grey-darker py-10">
    <FeaturedStories></FeaturedStories>  
  </div>
  <div class="bg-brand-grey">
    <FeaturedBook></FeaturedBook>
  </div>
  <div>
    <LatestBlog></LatestBlog>
  </div>
  <div v-if="entries" class="bg-brand-grey">
    <div class="mx-auto font-primary container py-10 md:py-20">
      <div class="max-w-4xl mx-auto text-center my-10 px-5 lg:px-0">
        <h3 class="text-2xl md:text-4xl font-bold mb-2">{{ entries[0].instafeed[0].instaTitle }}</h3>
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
import FeaturedBook from "~/components/FeaturedBook.vue";
import FeaturedStories from "~/components/FeaturedStories.vue";
import LatestBlog from "~/components/LatestBlog.vue"

// GraphQL Queries
import home from '~/apollo/queries/page/home'

export default {

  data() {
    return {
      heroMessage: 'Sign up for the Floor Fifty-Four Newsletter and receive free e-books, discounts and the chance to be a Beta-Reader!',
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
    entries: {
      prefetch: true,
      query: home
    }
  },
  components: {
    FeaturedBook,
    FeaturedStories,
    LatestBlog,
    NewsletterGeneral
  }
}
</script>
<style lang="scss">

</style>