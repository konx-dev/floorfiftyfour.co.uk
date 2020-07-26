<template>
    <div>
        <Books></Books>
    </div>
</template>
<script>
import Books from "~/components/Books.vue"

// GraphQL Queries

export default {
    // apollo: {
    //     entries: {
    //         prefetch: true,
    //         query: books,
    //     }
    // },
    data() {
        return {
        }
    },
    components: {
        Books
    }
}
</script>
