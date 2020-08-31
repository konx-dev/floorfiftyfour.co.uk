<template>
  <div class>
    <header-main></header-main>
    <nuxt />
    <footer-main></footer-main>
  </div>
</template>
<script>
import HeaderMain from '~/components/Globals/Header';
import FooterMain from '~/components/Globals/Footer';

export default {
    components: {
        HeaderMain,
        FooterMain
    }
}
</script>

