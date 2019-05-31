<template>
  <div class="pane" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LunzTabsPane",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    name: {
      type: [String, Number],
      required:true
    }
  },
  computed: {
    classes() {
      return {
        classes: this.active
      };
    }
  },
  mounted() {
    // console.log(this.name)
    this.eventBus.$on("update:selected", name => {
       console.log(name)
      if (name === this.name) {
        this.active = true;
      }else{
        this.active=false
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.pane {
  &.classes {
    background-color: red;
  }
}
</style>

