<template>
  <div class="h-auto md:h-full hero-image py-10 md:py-20">
    <navigation></navigation>
    <div class="container mx-auto max-w-4xl">
      <div v-for="entry in entries" :key="entry.id" class="font-display px-4 md:px-0">
        <h1 class="text-2xl md:text-6xl font-bold mb-6" id="signup_anchor">
          {{ entry.hero[0].heading }}
        </h1>
        <div v-html="entry.hero[0].subHeading" class="text-base md:text-2xl font-bold mb-4"></div>
        <div v-html="entry.hero[0].description" class="text-base md:text-2xl mb-8 "></div>
        <div v-if="entry.hero[0].featuredImage[0]">
          <v-img :src="entry.hero[0].featuredImage[0].filename" :alt="entry.hero[0].featuredImage[0].title" img-class="w-full h-full"/>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from '~/components/Globals/Navigation'

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
    Navigation
  }
}
</script>
<style lang="scss">

</style>