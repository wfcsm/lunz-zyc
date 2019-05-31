<template>
  <div class="item" :class="classes" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LunzTabsItem",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  computed: {
    classes() {
      return {
        classes: this.active,
        disabled:this.disabled
      };
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  mounted() {
    this.eventBus.$on("update:selected",(name)=>{
        if(name===this.name){
            this.active=true;
        }else{
            this.active = false;
        }
    })
    
  },
  methods: {
    onClick() {
      if(this.disabled){
        return
      }
      this.eventBus.$emit("update:selected", this.name,this);
    }
  }
};
</script>

<style lang="scss" scoped>
$blue:blue;
.item {
  flex-shrink: 0;
  height: 100%;
  display: flex;
   align-items: center;
  &.classes {
    cursor: pointer;
    color:$blue;
    font-weight: bold;
  }
  &.disabled {
    color: grey;
    cursor: not-allowed;
  }
}
</style>

