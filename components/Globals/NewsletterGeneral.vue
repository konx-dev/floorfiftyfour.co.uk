<template>
  <div class="text-white">
    <div v-if="globalSets[0].newsletterBanner" class="">
      <v-img class="w-full h-full object-cover" :src="globalSets[0].newsletterBanner[0].filename" :alt="globalSets[0].newsletterBanner[0].title" />
    </div>
    <div v-if="message" class="text-center text-base md:text-xl my-5">
        {{ message }}
    </div>
    <div id="mc_embed_signup" class="mt-5">
      <form
        action="https://reddit.us18.list-manage.com/subscribe/post?u=f690ef82ee81d0bf3d78fea70&amp;id=9b23fce2c0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll" class="flex flex-col md:flex-row items-center">
          <div class="flex flex-col w-full">
            <label class="mb-2 hidden text-center text-base font-bold font-display" for="mce-EMAIL"
              >Email Address</label
            >
            <input
              type="email"
              value=""
              name="EMAIL"
              class="font-display email p-4 w-full"
              id="mce-EMAIL"
              placeholder="kevin@floorfiftyfoor.co.uk"
              required
            />
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input
              type="text"
              name="b_f690ef82ee81d0bf3d78fea70_9b23fce2c0"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="clear font-display text-white text-center w-full md:w-auto">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="py-4 px-24 bg-black hover:bg-grey hover:text-black cursor-pointer w-full md:w-auto"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// GraphQL Queries
import newsletter from '~/apollo/queries/components/newsletter-general'


export default {
  name: "newsletter-general",
  apollo: {
    globalSets: {
      prefetch: true,
      query: newsletter
    }
  },
  props: {
    message: {
      type: String
    },
    banner: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  background: transparent;
  border: 1px solid white;

  &:hover {
    background: white;
    color: black;
  }
}

.test {
  color: red;
}
</style>
