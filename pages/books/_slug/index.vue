<template>
    <div>
        <div>Books Entry</div>
        <div class="border border-black">
            {{ entry }}
        </div>
    </div>
</template>
<script>

// GraphQL Queries
import book from '~/apollo/queries/structures/book'

export default {

    data() {
        return {
        }
    },

    apollo: {
        entry: {
            prefetch: true,
            query: book,
            variables () {
                return {
                    slug: this.$route.params.slug
                }
            }
        }
    },
    components: {
        
    }
}
</script>