<template class="">
    <div>
        <div v-if="!menuOpen" @click="menuToggle()" class="menu-button bg-brand-grey border border-brand-black text-black w-12 h-12 rounded-full text-center fixed cursor-pointer z-30">
            <font-awesome-icon class="menu-button__bars mx-auto h-auto" :icon="['fas', 'bars']" />
        </div>
        <div v-else @click="menuToggle()" class="menu-button bg-brand-grey text-black w-12 h-12 rounded-full text-center fixed cursor-pointer z-30">
            <font-awesome-icon class="menu-button__close mx-auto h-auto" :icon="['fas', 'times']" />
        </div>
        <!-- <div class="logo-button hidden lg:block md:fixed cursor-pointer z-30" v-if="globalSets">
            <nuxt-link to="/"><v-img class="w-16 h-16" :src="globalSets[0].imageSingle[0].filename" :alt="globalSets[0].imageSingle[0].title" /></nuxt-link>
        </div> -->
        
        <div @click="menuToggle()" :class="menuOpen ? 'menu--active' : 'menu'" class="fixed top-0 right-0 left-0 z-20 transition-transform duration-300 ease-in-out"  >
            <div class="flex flex-col h-screen justify-end bg-brand-black py-2 w-full md:w-5/12 lg:w-3/12 xl:w-2/12 ml-auto">
                
                <div class="text-white flex flex-col uppercase font-bold mt-40">
                    <nuxt-link class="py-5 flex w-full justify-center hover:bg-brand-grey hover:text-black" to="/short-stories">Short Stories</nuxt-link>
                    <nuxt-link class="py-5 flex w-full justify-center hover:bg-brand-grey hover:text-black" to="/blog">Blog</nuxt-link>
                    <nuxt-link class="py-5 flex w-full justify-center hover:bg-brand-grey hover:text-black" to="/books">Books</nuxt-link>
                </div>
                <div class="mt-auto mb-40" v-if="globalSets">
                    <nuxt-link to="/"><v-img class="w-16 h-16" :src="globalSets[0].imageSingle[0].filename" :alt="globalSets[0].imageSingle[0].title" /></nuxt-link>
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
        }
    },
    methods: {
        menuToggle: function() {
            return this.menuOpen = !this.menuOpen;
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

    @include min-bp($md) {
        top: 25px;
        right: 25px;
        transform: translateX(0);
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
}

.menu {
    transform: translateX(100%);

    &--active {
        transform: translateX(0);
        
    }
}


</style>
