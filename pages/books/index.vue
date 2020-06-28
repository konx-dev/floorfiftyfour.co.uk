<template>
    <div>
        <navigation></navigation>
        <div>Books Index</div>
        <div class="border border-black" v-for="book in entries" :key="book.id">
            <h4>{{ book.hero[0].heading }}</h4>
            <div v-html="book.hero[0].subHeading"></div>
            <div v-html="book.hero[0].copy"></div>
            <nuxt-link :to="'/books/' + book.slug">{{ book.slug }}</nuxt-link>
        </div>
    </div>
</template>
<script>
import Navigation from '~/components/Globals/Navigation'


// GraphQL Queries
import books from '~/apollo/queries/structures/books'

export default {
    apollo: {
        entries: {
            prefetch: true,
            query: books,
        }
    },
    data() {
        return {
        }
    },
    components: {
        Navigation
    }
}
</script>
