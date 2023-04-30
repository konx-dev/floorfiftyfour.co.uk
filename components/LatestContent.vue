<template>
    <div class="relative z-10 flex flex-col lg:flex-row justify-center md:gap-5 lg:gap-8 container mx-auto">
        <LatestStory />
        <LatestItem />
        <LatestBook />
    </div>
</template>
<script>
import books from '~/apollo/queries/structures/books'

import LatestStory from '~/components/Cards/LatestStory.vue'
import LatestItem from '~/components/Cards/LatestItem.vue'
import LatestBook from '~/components/Cards/LatestBook.vue'

export default {
    components: {
        LatestStory,
        LatestItem,
        LatestBook
    }
}
</script>