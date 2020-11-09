<template>
  <div>
    <header-main></header-main>
    <nuxt />
    <footer-main></footer-main>
  </div>
</template>
<script>
import HeaderMain from '~/components/Header/Header.vue';
import FooterMain from '~/components/Globals/Footer';

export default {
    components: {
        HeaderMain,
        FooterMain
    }
}
</script>

