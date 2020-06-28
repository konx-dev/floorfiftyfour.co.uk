<template>
    <div>
        <navigation></navigation>
        <div>Books Entry</div>
        <div class="border border-black">
            {{ entry }}
        </div>
    </div>
</template>
<script>
import Navigation from '~/components/Globals/Navigation'

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
        Navigation
    }
}
</script>