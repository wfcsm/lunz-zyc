<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "LunzCollapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected:{
        type:Array
    }
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
      return {
        eventBus: this.eventBus
      }
  },
  mounted(){
      let selectedCopy =JSON.parse(JSON.stringify(this.selected))
      this.eventBus.$emit("update:selected",this.selected);
      this.eventBus.$on("update:addSelected",name=>{
          if(this.single){
            selectedCopy = [name]
          }else{
            selectedCopy.push(name)
          }
          this.$emit("update:selected",selectedCopy)
          this.eventBus.$emit("update:selected",selectedCopy)
      })
      this.eventBus.$on("update:removeSelected",name=>{
          let index = this.selected.indexOf(name);
          this.selected.splice(index,1)
          this.$emit("update:selected",selectedCopy);
          this.eventBus.$emit("update:selected",selectedCopy)
      })
      
    }
  
};
</script>

<style lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
