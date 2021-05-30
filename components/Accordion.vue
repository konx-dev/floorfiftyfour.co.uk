<template>
    <div class="accordion__container bg-grey-darker">
        <div v-for="(article, index) in articles" :key="index">
            
            <div @click="activeItemCheck(index)" class="accordion__card text-white px-4 py-6 md:py-12 relative z-10 bg-grey-darker text-center cursor-pointer">
                <h2 class="font-display text-lg md:text-2xl leading-tight mb-4">{{ article.hero[0].heading }}</h2>
                <h3 class="font-primary text-xs md:text-lg">{{ article.postDate | dateFormat }}</h3>
            </div>

            <div v-show="activeItem === index" class="text-left md:text-center text-white text-sm md:text-lg px-4 pb-6">
                <div class="pb-3" v-html="article.hero[0].description"></div>
                <div class="text-center my-6">
                    <nuxt-link class="btn font-display py-4 px-24 border border-white hover:bg-white hover:text-black cursor-pointer w-full md:w-auto" :to="'/blog/' + article.slug">Read Post</nuxt-link>
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
    filters: {
        dateFormat: function(value) {

            let valueArray = value.split('-')
            let year = valueArray[0];
            let monthNum = valueArray[1];

            if (monthNum === '01') {
                monthNum = 'January';
            } else if (monthNum === '02') {
                monthNum = 'February';
            } else if (monthNum === '03') {
                monthNum = 'March';
            } else if (monthNum === '04') {
                monthNum = 'April';
            } else if (monthNum === '05') {
                monthNum = 'May';
            } else if (monthNum === '06') {
                monthNum = 'June';
            } else if (monthNum === '07') {
                monthNum = 'July';
            } else if (monthNum === '08') {
                monthNum = 'August';
            } else if (monthNum === '09') {
                monthNum = 'September';
            } else if (monthNum === '10') {
                monthNum = 'October';
            } else if (monthNum === '11') {
                monthNum = 'November';
            } else {
                monthNum = 'December';
            }

            value = `${monthNum} ${year}`

            return value;
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