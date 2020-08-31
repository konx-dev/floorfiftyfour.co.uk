<template>
        <div class="container mx-auto flex-wrap flex flex-col md:flex-row justify-center items-center">
            <nuxt-link :to="'short-stories/' + item.slug" class="card cursor-pointer relative w-auto md:w-full h-full my-2 md:m-4 max-w-sm md:max-w-md" v-for="item in entries" :key="item.id">
                    <div class="absolute w-4/5 card__inner font-primary text-white z-10">
                        <h1 class="font-bold text-2xl md:text-4xl my-5 relative text-center leading-tight">{{ item.hero[0].heading }}</h1>
                        <!-- <div class="text-center" v-html="item.hero[0].description"></div> -->
                    </div>
                    <div class="card__inner__subheading font-bold text-black text-xs mx-auto w-48 py-2 text-center z-10" v-html="item.hero[0].subHeading"></div>
                    
                    <div class="card__image w-full h-full">
                        <v-img class="w-full h-full object-cover" v-if="item.hero[0].featuredImage[0]" :src="item.hero[0].featuredImage[0].filename" :alt="item.hero[0].featuredImage[0].title" />
                    </div>
            </nuxt-link>
        </div>
</template>
<script>


// GraphQL Queries
import stories from '~/apollo/queries/channels/stories'

export default {
    apollo: {
        entries: {
            prefetch: true,
            query: stories,
        },
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss">

.card {

    height: 250px;
    width: 100%;
    max-width: 350px;

    @include min-bp($md) {
        height: 400px;
    }

    &__inner {
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

        &__subheading {
            background-color: white;
            position: absolute;
            top: 25px;
            left: -10px;

            &::before {
                border-top: 10px solid #424242;
                border-right: 10px solid transparent;
                content: '';
                position: absolute;
                left: 0;
                bottom: -10px;
                transform: scaleX(-1);
            }
        }

    }

    &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            transition: all 0.3s ease-in-out;
        }

        &:hover {
            &::before {
                background: rgba(0,0,0,0.8);
            }
        }
}

</style>