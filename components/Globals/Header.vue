<template class="">
    <div>
        <div v-if="!menuOpen" @click="menuToggle()" class="menu-button bg-black text-white w-12 h-12 rounded-full text-center fixed cursor-pointer z-30">
            <font-awesome-icon class="h-12 text-lg w-auto" :icon="['fas', 'bars']" />
        </div>
        <div v-else @click="menuToggle()" class="menu-button bg-white text-black w-12 h-12 rounded-full text-center fixed cursor-pointer z-30">
            <font-awesome-icon class="h-12 text-lg w-auto" :icon="['fas', 'times']" />
        </div>
        <div class="logo-button hidden lg:block md:fixed cursor-pointer z-30" v-if="globalSets">
            <nuxt-link to="/"><v-img class="w-16 h-16" :src="globalSets[0].imageSingle[0].filename" :alt="globalSets[0].imageSingle[0].title" /></nuxt-link>
        </div>
        
        <div @click="menuToggle()" :class="menuOpen ? 'menu--active' : 'menu'" class="fixed top-0 right-0 left-0 z-20 transition-transform duration-300 ease-in-out"  >
            <div class="flex flex-col h-screen justify-end bg-black py-2 w-full md:w-5/12 lg:w-3/12 xl:w-2/12 ml-auto">
                
                <div class="text-white flex flex-col uppercase font-bold mt-40">
                    <nuxt-link class="py-5 flex w-full justify-center hover:bg-white hover:text-black" to="/books">Books</nuxt-link>
                    <nuxt-link class="py-5 flex w-full justify-center hover:bg-white hover:text-black" to="/short-stories">Short Stories</nuxt-link>
                    <nuxt-link class="py-5 flex w-full justify-center hover:bg-white hover:text-black" to="/blog">Blog</nuxt-link>
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

.pipes {

    &:after, &:before {
        content: '|';
    }

    &:after {
        padding-left: 2.5rem;
    }

    &:before {
        padding-right: 2.5rem;
    }
}

.menu-button {

    bottom: 20px;
    right: 50%;
    transform: translateX(50%);

    @include min-bp($md) {
        top: 25px;
        right: 25px;
        transform: translateX(0);
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
