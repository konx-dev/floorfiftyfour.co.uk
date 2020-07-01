<template>
    <picture>
        <img v-bind="defaultSrc" :alt="alt" :class="buildClasses" class="block mx-auto max-w-full max-h-full object-cover" />
    </picture>
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
        },
        buildClasses() {
            let result = [];
            if (this.imgClass) result.push(this.imgClass);
            
            return result;
        },
    },
}
</script>