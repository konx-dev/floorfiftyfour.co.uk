<template>
  <div>
    <navigation></navigation>
    <nuxt />
    <footer-main></footer-main>
  </div>
</template>
<script>
import Navigation from '~/components/Globals/Navigation';
import FooterMain from '~/components/Globals/Footer';

export default {
    components: {
        Navigation,
        FooterMain
    }
}
</script>

