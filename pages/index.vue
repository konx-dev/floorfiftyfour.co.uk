<template>
<div>
  <div class="h-auto md:h-full hero overflow-hidden relative py-10 md:py-20">
    <div class="container font-primary mx-auto max-w-4xl">
      <div v-for="entry in entries" :key="entry.id" class="text-white font-display px-4 md:px-0">
        <div class="w-40 h-40 relative z-10 mb-10 mx-auto">
          <v-img class="w-full h-full object-cover" v-if="entry.hero[0].image[0]" :src="entry.hero[0].image[0].filename" :alt="entry.hero[0].image[0].title" />
        </div>
        <h1 class="relative z-10 text-2xl md:text-6xl font-bold mb-6" id="signup_anchor">
          {{ entry.hero[0].heading }}
        </h1>
        <h2 v-html="entry.hero[0].subHeading" class="relative z-10 text-base md:text-2xl font-bold mb-4"></h2>
        <div v-html="entry.hero[0].description" class="relative z-10 text-base md:text-2xl mb-8 "></div>
        <v-img v-if="entry.hero[0].featuredImage[0]" class="absolute top-0 left-0 w-full h-full object-cover" :src="entry.hero[0].featuredImage[0].filename" :alt="entry.hero[0].featuredImage[0].title"/>
        <div class="mt-6 md:mt-12">
          <newsletter-hero :message="heroMessage" class="relative z-10"></newsletter-hero>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-brand-grey">
    <FeaturedBook></FeaturedBook>
  </div>
  <div>
    <FeaturedStory></FeaturedStory>  
  </div>
  <div>
    <LatestBlog></LatestBlog>
  </div>
  <div v-if="entries" class="bg-brand-grey">
    <div class="mx-auto font-primary container py-10 md:py-20">
      <div class="max-w-4xl mx-auto text-center my-10 px-4 md:px-0">
        <h3 class="text-2xl md:text-4xl font-bold mb-2">{{ entries[0].instafeed[0].instaTitle }}</h3>
        <div class="text-md md:text-xl">{{ entries[0].instafeed[0].subHeading }}</div>
      </div>
      <div class="flex flex-wrap justify-center">
        <div v-for="image in entries[0].instafeed[0].images.slice(0,4)" :key="image.id" class="w-full sm:w-1/3 h-auto m-5">
          <v-img class="w-full h-full object-cover" :src="image.filename" :alt="image.title" />
        </div> 
      </div>
    </div>
  </div>
  
  <div class="bg-grey-darker py-5 md:py-10">
    <div class="max-w-4xl mx-auto px-4 md:px-0">
      <newsletter-general :message="heroMessage" class="relative z-10"></newsletter-general>
    </div>
  </div>
</div>
  
</template>
<script>
import NewsletterHero from "~/components/Globals/NewsletterHero.vue";
import NewsletterGeneral from "~/components/Globals/NewsletterGeneral.vue";
import FeaturedBook from "~/components/FeaturedBook.vue";
import FeaturedStory from "~/components/FeaturedStory.vue";
import LatestBlog from "~/components/LatestBlog.vue"

// GraphQL Queries
import home from '~/apollo/queries/page/home'

export default {

  data() {
    return {
      heroMessage: 'Sign up for the Floor Fifty-Four Newsletter and receive free e-books, discounts and the chance to be a Beta-Reader!',
    }
  },

  apollo: {
    entries: {
      prefetch: true,
      query: home
    }
  },
  components: {
    NewsletterHero,
    FeaturedBook,
    FeaturedStory,
    LatestBlog,
    NewsletterGeneral
  }
}
</script>
<style lang="scss">

</style>