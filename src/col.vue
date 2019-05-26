<template>
    <div class="col" :class="[`col-${span}`]"></div>
</template>

<script>
export default {
    name:"Lunz",
    props:{
        span:{
            type:[Number,String],
            default:"auto"
        }
    }
}
</script>

<style lang="scss" scoped>
.col{
    height: 100px;
    background: gray;
    width: 50%;
    border: 1px solid red;

    $class-prefix: col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
            width: ($n /24)*100%;
        }
    }
    &.col-auto{
        flex-grow: 1
    }
}
</style>


