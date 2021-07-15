<template>
    <div class="items-list z-20 bg-grey" :class="{ 'items-list--open' : sidebarOpen }">
        <div class="flex flex-col justify-center items-center md:h-screen lg:h-full overflow-auto">
            <router-link class="font-typewriter mb-6 text-center text-grey-darker hover:text-black" :to=" item.uri " v-for="item in items" :key="item.id">
                <span class="text-base">{{ item.hero[0].heading }}:</span>
                <span class="text-xl" v-html="item.hero[0].subHeading"></span>
            </router-link>
        </div>
        <div @click="sidebarToggle()" class="items-badge bg-grey hidden md:block cursor-pointer">
            <div class="items-badge__icon">
                <font-awesome-icon class="text-xl text-black" :icon="['far', 'folder-open']" />
            </div>
        </div>
    </div>
    
</template>
<script>
import itemsOverview from '~/apollo/queries/page/itemsOverview'

export default {
    apollo: {
        items: {
            prefetch: true,
            query: itemsOverview,
        }
    },
    data() {
        return {
            sidebarOpen: false,
        }
    },
    methods: {
        sidebarToggle() {
            this.sidebarOpen = !this.sidebarOpen;
        }
    }
}


</script>
<style lang="scss">


.items-list {
    height: 100%;
    width: 300px;
    position: absolute;
    top: 0;
    left: -300px;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 16px 14px 0 rgba(0, 0, 0, 0.1);

    &--open {
        left: 0;
    }
}

.items-badge {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    right: -50px;
    transform: translateY(-50%);
    border-radius: 0 8px 8px 0;

    &__icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}

</style>