<template>
    <div class="layout" :class="{sider}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"LunzLayout",
    data(){
        return {
            sider:false
        }
    },
    mounted(){
        this.$children.forEach(vm=>{
            if(vm.$options.name === "LunzaAside"){
                this.sider=true;
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.layout{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    &.sider{
        flex-direction: row;
    }
}
</style>


