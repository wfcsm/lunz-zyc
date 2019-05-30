<template>
    <div class="item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"LunzItem",
    props:{
        disabled:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="scss" scoped>
.item{
    
}
</style>

