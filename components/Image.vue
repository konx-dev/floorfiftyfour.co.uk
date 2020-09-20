<template>
    <picture>
        <source v-for="breakpoint in breakpoints" :key="breakpoint" :media="'(min-width: '+ breakpoint +'px)'" v-bind="attributes(breakpoint)" :class="sourceClass">
        <img v-bind="defaultSrc" :alt="alt" class="block mx-auto max-w-full max-h-full object-cover" :class="buildClasses" />
    </picture>
</template>

<script>
import qs from 'qs';

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
        lazyLoad: {
            type: Boolean,
            default: false
        },
        imgClass: {
            type: String,
            default: null
        },
        sourceClass: {
            type: String,
            default: null
        },
        sizes: {
            type: Object,
            default: () => ({
            })
        },
        pixelDensity: {
            type: Number,
            default: 2
        },
    },
    computed: {
        breakpoints() {
            return Object.keys(this.sizes).sort((a, b) => a - b).reverse();  
        },
        // defaultSrc() {
        //     let src = 'src';

        //     return {
        //         [src]: 'https://ik.imagekit.io/2lyxtm1dps/' + this.src + '?q=80&auto=format'
        //     }
        // },
        defaultSrc() {
            let src = this.lazyLoad ? 'data-src' : 'src';
            
            let largestBp = Math.max(...Object.keys(this.sizes));

            return {
                [src]: 'https://ik.imagekit.io/2lyxtm1dps/' + this.src + '?' + this.getParams(this.sizes[largestBp])
            }
        },
        buildClasses() {
            let result = [];
                if (this.imgClass) result.push(this.imgClass);
                if (this.lazyLoad) result.push('lazy');
            
            return result;
        },
    },
    mounted() {
        if (window.lazyLoad)
            window.lazyLoad.update();
    },
    methods: {
        attributes(breakpoint) {
            let srcset = this.lazyLoad ? 'data-srcset' : 'srcset';

            return {
                [srcset]: 'https://ik.imagekit.io/2lyxtm1dps/' + this.buildSrcSet(this.sizes[breakpoint])
            }
        },
        buildSrcSet(params) {
            let result = [];
            
            for (var i = 1; i <= this.pixelDensity; i++) {
                result.push(this.src + '?' + this.getParams(params, i) + ' ' + i + 'x');
            }
            
            return result.join(',');
        },
        getParams(params = {}, pixelDensity = null) {
            let result = {
                q: 80,
                auto: 'format',
                ...params,
                ...this.options
            }
            
            if (pixelDensity)
                result['dpr'] = pixelDensity;
            
            return qs.stringify(result);
        }
    }
}
</script>