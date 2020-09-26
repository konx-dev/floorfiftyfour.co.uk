import Image from '~/components/Image.vue';
import Vue from 'vue';
import LazyLoad from "vanilla-lazyload"

Vue.component('v-img', Image);

// Load lazy load third-party library
if (process.browser) {
    window.onNuxtReady((app) => {
      window.lazyLoad = new LazyLoad();
    })
}
