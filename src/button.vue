<template>
      <button :class="{[`icon-${iconPosition}`]:true,'g-button':true}"
             @click="$emit('click')">
        <g-icon v-if="icon && !loading" class="icon" :name="icon" ></g-icon>
        <g-icon v-if="loading" class="icon loading" name="loading" ></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button> 
   
</template>

<script>
import gIcon from './icon'
export default {
    // props:["icon","iconPosition"]
    props:{
        icon:{},
        loading:{
            type:Boolean,
            default:false
        },
        iconPosition:{
            type:String,
            default:"left",
            validator(value){
                // if(value !== "left" && value !=="right"){
                //     return false;
                // }else{
                //     return true;
                // }
                return value !== "left" && value !=="right" ? false : true
            }
        }
    },
    components:{
        gIcon
    }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
    0%{
        transform: rotate(0deg)
    }

    100%{
        transform: rotate(360deg)
    }
}
.g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border:1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        &.icon-right {
            > .icon{
                order: 2;
                margin-left: .1em;
                margin-right: 0;
            }
            > .content {
                order:1;
            }
            
        }
        &.icon-left{
             > .icon{
                order: 1;
                 margin-right: .1em;
             }
             > .content{
                 order: 2;
             }
           
        }
        &>.loading{
            animation: spin 2s linear infinite
        }
    }
</style>
 

