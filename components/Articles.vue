<template>
    <div class="articles max-w-3xl mx-auto">
        <accordion :articles="entries"></accordion>
    </div>
</template>
<script>
import Accordion from '~/components/Accordion'


// GraphQL Queries
import articles from '~/apollo/queries/channels/articles'

export default {
    apollo: {
        entries: {
            prefetch: true,
            query: articles,
        },
    },
    data() {
        return {
        }
    },
    components: {
        'accordion': Accordion
    }
}
</script>

<style lang="scss">

</style>