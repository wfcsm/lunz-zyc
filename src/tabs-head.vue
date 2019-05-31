<template>
  <div class="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LunzTabsHead",
  inject: ["eventBus"],
  data() {
    return {
      x: false
    };
  },
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      this.x = true;
      this.$nextTick(() => {
        let { width, height, top, left } = vm.$el.getBoundingClientRect();
        let head = this.$el.getBoundingClientRect();
        left = left - head.left;
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.left = `${left}px`;
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  height: 40px;
  justify-content: flex-start;
  padding: 0 2em;
  position: relative;
  border-bottom: 1px solid #ddd;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid blue;
    transition: all 350ms;
  }
  > .action-wrapper {
    margin-left: auto;
  }
}
</style>

