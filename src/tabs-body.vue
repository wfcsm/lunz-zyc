<template>
    <div class="body">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"LunzTabsBody",
    inject:["eventBus"],
    created(){
     
    },
   
}
</script>

<style lang="scss" scoped>
.body{
    
}
</style>

