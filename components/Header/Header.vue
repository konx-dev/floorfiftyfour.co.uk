<template class="">
    <div class="header" :class="isSticky ? 'is-visible' : null">
        <div v-if="!menuOpen" @click="menuToggle()" class="menu-button bg-brand-grey border border-brand-black text-black w-12 h-12 rounded-full text-center fixed cursor-pointer z-30">
            <font-awesome-icon class="menu-button__bars mx-auto h-auto" :icon="['fas', 'bars']" />
        </div>
        <div v-else @click="menuToggle()" class="menu-button bg-brand-grey text-black w-12 h-12 rounded-full text-center fixed cursor-pointer z-30">
            <font-awesome-icon class="menu-button__close mx-auto h-auto" :icon="['fas', 'times']" />
        </div>
        <div class="logo-button hidden lg:block md:fixed cursor-pointer z-30" v-if="globalSets">
            <nuxt-link to="/"><v-img :src="globalSets[0].imageSingle[0].filename" :alt="globalSets[0].imageSingle[0].title" imgClass="w-16 h-16" /></nuxt-link>
        </div>
        
        <div @click="menuToggle()" :class="menuOpen ? 'menu--active' : 'menu'" class="fixed top-0 right-0 left-0 z-20 transition-transform duration-300 ease-in-out"  >
            <div class="flex flex-col h-screen justify-end bg-brand-black py-2 w-full md:w-5/12 lg:w-3/12 xl:w-2/12 ml-auto">
                
                <div class="text-white flex flex-col uppercase font-display mt-40">
                    <nuxt-link class="py-5 flex w-full justify-center hover:bg-brand-grey hover:text-black" to="/about/">About</nuxt-link>
                    <nuxt-link class="py-5 flex w-full justify-center hover:bg-brand-grey hover:text-black" to="/short-stories/">Short Stories</nuxt-link>
                    <nuxt-link class="py-5 flex w-full justify-center hover:bg-brand-grey hover:text-black" to="/items/">Items of Interest</nuxt-link>
                    <nuxt-link class="py-5 flex w-full justify-center hover:bg-brand-grey hover:text-black" to="/blog/">Blog</nuxt-link>
                    <nuxt-link class="py-5 flex w-full justify-center hover:bg-brand-grey hover:text-black" to="/books/">Books</nuxt-link>
                </div>
                <div class="mt-auto mb-40" v-if="globalSets">
                    <nuxt-link to="/"><v-img :src="globalSets[0].imageSingle[0].filename" :alt="globalSets[0].imageSingle[0].title" imgClass="w-20 h-20" /></nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// GraphQL Queries
import logo from '~/apollo/queries/globals'

export default {
    apollo: {
        globalSets: {
        prefetch: true,
        query: logo
        },
    },
    data() {
        return {
            menuOpen: false,
            isSticky: true,
            scrollDirection: false,
        }
    },

    mounted: function() {
        this.checkSticky();
        window.addEventListener('scroll', this.checkSticky);
    },
    destroyed: function() {
        window.removeEventListener('scroll', this.checkSticky);
    },

    methods: {
        menuToggle: function() {
            return this.menuOpen = !this.menuOpen;
        },
        checkSticky() {
            // var header = document.querySelector('.header');
            // this.isSticky = window.scrollY > header.clientHeight + 180;
        }
    },
    
};
</script>

<style lang="scss">

.menu-button {

    // bottom: 20px;
    // right: 50%;
    // transform: translateX(50%);

    top: 15px;
    right: 15px;
    transform: translateX(0);
    transform: translateY(-200%);
    transition: transform 0.4s ease-in-out;

    @include min-bp($md) {
        top: 25px;
        right: 25px;
        transform: translateX(0);
        transform: translateY(-200%);
    }

    &__bars {
        width: 18px !important;
        padding-top: 12px !important;
    }

    &__close {
        width: 18px !important;
        padding-top: 11px !important;
    }
}

.logo-button {
    top: 25px;
    left: 25px;
    transform: translateY(-200%);
    transition: transform 0.4s ease-in-out;
}

.menu {
    transform: translateX(100%);

    &--active {
        transform: translateX(0);
        
    }
}

.header {

    &.is-visible {

        .menu-button {
            transform: translateY(0);
        }
        .logo-button {
            transform: translateY(0);
        }
    }
}

</style>
