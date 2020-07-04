<template>
    <div class="accordion__container bg-grey-darker">
        <div v-for="(article, index) in articles" :key="index">
            
            <div @click="activeItemCheck(index)" class="accordion__card text-white px-4 py-6 md:py-12 relative z-10 bg-grey-darker text-center">
                <h2 class="font-primary font-bold text-lg leading-tight mb-4">{{ article.hero[0].heading }}</h2>
                <h3 class="text-xs">{{ article.postDate }}</h3>
            </div>

            <div v-show="activeItem === index" class="text-left md:text-center text-white text-sm px-4 pb-6 md:pb-12">
                <div class="" v-html="article.hero[0].description"></div>
                <div class="text-center my-6">
                    <nuxt-link class="" :to="'/blog/' + article.slug">- Read More -</nuxt-link>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    name: 'accordion-single',
    data() {
        return {
            activeItem: null,
        }
    },
    props: {
        articles: {
            type: Array,
            required: true,
        }
    },
    methods: {
        activeItemCheck: function(value) {
            if (this.activeItem === value) {
                this.activeItem = null
            } else {
                this.activeItem = value;
            }
        }
    }
}
</script>

<style lang="scss" scoped>

// .slide-enter-active {
//     transition: transform .5s ease;
// }
// .slide-leave-active {
//     transition: transform .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  
// }
// .slide-enter {
//     transform: translateY(-100%);
// }

// .slide-leave-to {
//     transform: translateY(-100%);
// }

.accordion__container {

    & > div:nth-child(odd) {
        border-bottom: 1px solid white;
        border-top: 1px solid white;
    }

}

    
</style>