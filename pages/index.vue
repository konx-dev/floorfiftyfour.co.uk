<template>
<div>
  <div class="h-auto md:h-full hero overflow-hidden relative py-10 md:py-20">
    <div class="container mx-auto max-w-4xl">
      <div v-for="entry in entries" :key="entry.id" class="text-white font-display px-4 md:px-0">
        <h1 class="relative z-10 text-2xl md:text-6xl font-bold mb-6" id="signup_anchor">
          {{ entry.hero[0].heading }}
        </h1>
        <div v-html="entry.hero[0].subHeading" class="relative z-10 text-base md:text-2xl font-bold mb-4"></div>
        <div v-html="entry.hero[0].description" class="relative z-10 text-base md:text-2xl mb-8 "></div>
        <v-img v-if="entry.hero[0].featuredImage[0]" class="absolute top-0 left-0 w-full h-full object-cover" :src="entry.hero[0].featuredImage[0].filename" :alt="entry.hero[0].featuredImage[0].title"/>
        <div class="mt-6 md:mt-12">
          <newsletter-form class="relative z-10"></newsletter-form>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-grey-lighter">
    <FeaturedBook></FeaturedBook>
  </div>
</div>
  
</template>
<script>
import NewsletterForm from "~/components/Globals/NewsletterForm.vue";
import FeaturedBook from "~/components/FeaturedBook.vue";

// GraphQL Queries
import home from '~/apollo/queries/page/home'

export default {

  data() {
    return {
    }
  },

  apollo: {
    entries: {
      prefetch: true,
      query: home
    }
  },
  components: {
    NewsletterForm,
    FeaturedBook
  }
}
</script>
<style lang="scss">

</style>