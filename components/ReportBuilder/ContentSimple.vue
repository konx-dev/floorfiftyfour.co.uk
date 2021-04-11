<template>
    <div class="font-typewriter mb-12">
        <div class="max-w-4xl mx-auto">
            <h3 v-if="block.contentTitle" class="text-xl text-grey-darker md:text-2xl font-bold mb-2">{{ block.contentTitle }}:</h3>
            <div class="text-md text-brand-black md:text-lg redactor__copy" v-html="block.contentCopy"></div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            backgroundColour: 'grey',
        }
    },
    props: {
        block: {
            type: Object,
            required: true
        },
    },
    components: {
        
    }
}
</script>

<style lang="scss">

.redactor__copy {

    p {
        margin-bottom: 20px;
        line-height: 2;

        strong {
            position: relative;

            &:after {
                content: '';
                background: black;
                width: 100%;
                height: 100%;
                min-height: 25px;
                position: absolute;
                top: -5px;
                left: 0;
            }
        }
    }

    a {
        color: $red;
        font-weight: $bolder;
    }

    ul, ol {
        margin: 50px 0 50px 50px;

        li {
            color: $grey--darker;
            font-size: 1.25rem;
            margin: 0 0 10px 0;

            &:last-child {
                margin: 0;
            }
        }
    }

    ul {
        li {

            position: relative;
            list-style: none;

            &:before {
                content: '*';
                position: absolute;
                left: -15px;
                top: 3px;
            }
        }
    }

    ol {
        li {
            list-style: decimal;
        }
    }

    
}


</style>