<!--
    Responsive Images with Imgkit.io
    
    Use like:
    
    <v-img src="pathtoimage.jpg" :sizes="imageSizes" />
    
    Where imageSizes is similar to: 
    
    {
        imageSizes: {
          // iphone 5
          320: {
            tr: 'w-200'
          },
          // ipad
          768: {
            tr: 'w-400'
          },
          // ipad pro
          1024: {
            tr: 'w-400'
          },
          // desktop
          1280: {
            tr: 'w-400'
          }
      },
    }
    
-->

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
            default: true
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
                [srcset]: this.buildSrcSet(this.sizes[breakpoint])
            }
        },
        buildSrcSet(params) {
            let result = [];

            for (var i = 1; i <= this.pixelDensity; i++) {
                result.push('https://ik.imagekit.io/2lyxtm1dps/' + this.src + '?' + this.getParams(params, i) + ' ' + i + 'x');
            }
            
            return result.join(',');
        },
        getParams(params = {}, pixelDensity = null) {
            let result = {
                // q: 80,
                // auto: 'format',
                ...params,
            }
            
            if (pixelDensity)
                result['dpr'] = pixelDensity;
            
            return qs.stringify(result);
        }
    }
}
</script>