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
        position:{
            type:String,
            validator(value){
              return  ["left","right","center"].indexOf(value)>=0
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
            let {position} = this;
            return [position && `align-${position}`]
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

