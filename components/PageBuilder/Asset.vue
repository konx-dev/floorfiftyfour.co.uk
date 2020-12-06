<template v-if="block">
    <div class="max-w-4xl mx-auto my-10">
        <template v-for="image in block.image">
            <v-img :src="image.filename" :alt="image.title" :sizes="assetSizes" imgClass="w-auto" :key="image.id" />
        </template>
    </div>
</template>
<script>

export default {
    props: {
        block: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            largeSizes: {
                // iphone 5
                320: {
                    tr: 'h-320'
                },
                // ipad
                768: {
                    tr: 'w-700'
                },
                // ipad pro
                1024: {
                    tr: 'w-900'
                },
            },
            smallSizes: {
                // iphone 5
                320: {
                    tr: 'h-280'
                },
                // ipad
                768: {
                    tr: 'w-400'
                },
            },
            assetSizes: {},
        }
    },
    mounted: function() {
        this.checkSizes();
    },
    methods: {
        checkSizes() {

            if (this.block.imageSize === 'large') {
                this.assetSizes = this.largeSizes;
            } else {
                this.assetSizes = this.smallSizes;
            }
        }
    },
    components: {
        
    }
}
</script>

<style lang="scss">

</style>