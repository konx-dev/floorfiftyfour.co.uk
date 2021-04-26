<template v-if="block">
    <div class="max-w-4xl mx-auto my-5 md:my-10" :class=" largeImage ? 'asset--large' : 'asset--small'">
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
            largeImage: false,
        }
    },
    mounted: function() {
        this.checkSizes();
    },
    methods: {
        checkSizes() {

            if (this.block.imageSize === 'large') {
                this.assetSizes = this.largeSizes;
                this.largeImage = true;
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

.asset {

    &--small, &--large {

        img {
            border: 1px solid $grey;
            padding: 10px;
            box-shadow: 0 16px 14px 0 rgba(0, 0, 0, 0.1);
            filter: grayscale(100%);

            @include min-bp($md) {
                padding: 20px;
            }
        }
    }

    &--small {
        img {
            transform: rotate(2deg);
        }
    }

    &--large {
        img {
            transform: rotate(-0.5deg);
        }
    }
}

</style>