<template>
    <div class="wrapper" :class="{'error':error}">
        <input :value="value" 
               :disabled="disabled" 
               :readonly="readonly"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @foucs="$emit('foucs',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
               type="text">
        <template v-if="error" >
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
import Icon from './icon'
export default {
    name:"LunzInput",
    props:{
        value:{
            type:String
        },
        disabled:{
            type:Boolean,
            default:false
        },
        readonly:{
            type:Boolean,
            default:false
        },
        error:{
            type:String
        }
    },
    components:{
        Icon
    }
}
</script>

<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $broder-color-hover:#666;
    $border-radius:4px;
    $font-size:12px;
    $box-shadow-color:rgba(0,0,0,0.5);
    $red: #f1453d;
    .wrapper {
        font-size: 12px;
        display:inline-flex;
        align-items:center;
        > :not(:last-child){
            margin-right: 0.5em;
        }
        &.error{
            > input{
                border-color: $red;
            }
        }
        .icon-error{
            fill:$red;
        }
        .errorMessage{
            color:$red;
        }
        > input{
            height: 32px;
            border: 1px solid $border-color;
            padding: 0 8px;
            font-size: inherit;
            border-radius: $border-radius;
            &:hover{
                border-color: $broder-color-hover;
                cursor: pointer;
            }
            &:focus{
                box-shadow: inset  0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled],&[readonly]{
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
    }

</style>


