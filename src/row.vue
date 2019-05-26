<template>
    <div class="row" 
        :style="rowStyle"
        :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"LunzRow",
    props:{
        gutter:{
            type:[Number,String]
        },
        algin:{
            type:String,
            validator(value){
              return  ["left","right","center"].includes(value)
            }
        }
    },
    computed:{
        rowStyle(){
            let {gutter}=this;
            return {
                marginLeft:-gutter/2+'px',
                marginRight:-gutter/2+'px'
            }
        },
        rowClass(){
            let {algin} = this;
            return [algin && `align-${algin}`]
        }
    },
    mounted(){
        this.$children.forEach((vm)=>{
            vm.gutter = this.gutter;
        })
    }
}
</script>

<style lang="scss" scoped>
 .row{
        display: flex;
        flex-wrap:wrap;
        &.align-left{
            justify-content: flex-start;
        }
        &.align-right{
            justify-content: flex-end;
        }
        &.align-center{
            justify-content: center;
        }
    }
</style>

