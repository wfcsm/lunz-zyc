<template>
  <div class="item" :class="classes" @click="xxx">
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
        classes: this.active
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
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  flex-shrink: 0;
  height: 100%;
  border:1px solid green;
  display: flex;
   align-items: center;
  &.classes {
    background-color: red;
    cursor: pointer;
  }
}
</style>

