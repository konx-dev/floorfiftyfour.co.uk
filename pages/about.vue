<template>
    <div>
        <!-- <div v-if="entry">
            <component v-for="(block,index) in entry.pageBuilder" :key="index" :is="block.typeHandle" :block="block" :class="block.typeHandle" />
        </div> -->
        <div>about</div>
        <div>{{ entry }}</div>
    </div>
</template>
<script>


// GraphQL Queries
import about from '~/apollo/queries/page/about'

export default {

  data() {
    return {
    }
  },
  apollo: {
    entry: {
      prefetch: true,
      query: about
    }
  },
  components: {
    
  }
}
</script>