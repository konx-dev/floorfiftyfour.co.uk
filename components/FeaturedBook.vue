<template>
    <div v-if="entries" class="book font-primary container mx-auto max-w-4xl py-10 md:py-20">
        <div v-for="book in entries" :key="book.id">
            <div v-if="book.featured" class="flex flex-col-reverse md:flex-row items-center justify-between">
                <div class="max-w-md px-4 md:px-0">
                    <!-- <div class="text-base">{{ book.hero[0].heading }}</div> -->
                    <h2 class="text-2xl md:text-4xl font-bold mb-4">{{ book.title }}</h2>
                    <div class="text-lg md:text-xl" v-html="book.hero[0].description"></div>
                </div>
                <nuxt-link class="max-w-xs mb-4 md:mb-0" :to="'books/' + book.slug">
                    <v-img class="w-full h-full" v-if="book.hero[0].image[0]" :src="book.hero[0].image[0].filename" :alt="book.hero[0].image[0].title" />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>


// GraphQL Queries
import books from '~/apollo/queries/structures/books'

export default {
    apollo: {
        entries: {
            prefetch: true,
            query: books,
        },
    },
    data() {
        return {
        }
    },
    components: {
    }
}
</script>

<style lang="scss">

</style>