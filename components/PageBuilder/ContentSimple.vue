<template>
    <div class="my-10" :class="'bg-' + backgroundColour" > <!-- :class="'bg-' + block.backgroundColour" -->
        <div class="mx-auto font-primary container">
            <div class="max-w-4xl mx-auto">
                <h3 class="text-xl md:text-2xl font-bold mb-2">{{ block.contentTitle }}</h3>
                <div class="text-md md:text-lg redactor__copy" v-html="block.contentCopy"></div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            backgroundColour: 'grey',
        }
    },
    props: {
        block: {
            type: Object,
            required: true
        },
    },
    components: {
        
    }
}
</script>

<style lang="scss">

.redactor__copy {

    p {
        margin-bottom: 20px;
        line-height: 1.75;
    }

    a {
        color: $red;
        font-weight: $bolder;
    }
}


</style>