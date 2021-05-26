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
            },
            result({ data }) {
                this.seoTitle = data.entry.seoTitle;
                this.seoMetaDescription = data.entry.seoMetaDescription;
                this.seoMetaKeywords = data.entry.seoMetaKeywords;
                this.seoRobots = data.entry.seoRobots;
            }
        }
    },
    head() {
        return {
            title: this.seoTitle,
            link: [
                // { rel: 'canonical', href: '' }
            ],
            meta: [
                { hid: 'description', name: 'description', content: this.seoMetaDescription },
                { hid: 'keywords', name: 'keywords', content: this.seoMetaKeywords },
                { hid: 'robots', name: 'robots', content: this.seoRobots }
            ],
        }
    },
    components: {
        
    }
}
</script>