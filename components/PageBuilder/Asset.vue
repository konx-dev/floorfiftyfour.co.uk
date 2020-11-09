<template>
    <div class="">
        {{ block }}
    </div>
</template>
<script>

export default {
    data() {
        return {
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

</style>