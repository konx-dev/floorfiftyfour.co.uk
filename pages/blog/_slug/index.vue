<template>
    <div>
        <navigation></navigation>
        <div>Blog Entry</div>
        <div class="border border-black">
            {{ entry }}
        </div>
    </div>
</template>
<script>
import Navigation from '~/components/Globals/Navigation'

// GraphQL Queries
import article from '~/apollo/queries/channels/article'

export default {

    data() {
        return {
        }
    },

    apollo: {
        entry: {
            prefetch: true,
            query: article,
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