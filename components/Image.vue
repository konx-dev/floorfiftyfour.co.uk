<template>
    <img v-bind="defaultSrc" :alt="alt" class="block mx-auto max-w-full max-h-full" />
</template>

<script>

export default {
    name: 'v-img',
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: ''
        },
    },
    computed: {
        defaultSrc() {
            let src = 'src';

            return {
                [src]: 'https://ik.imagekit.io/2lyxtm1dps/' + this.src + '?q=80&auto=format'
            }
        }
    },
}
</script>