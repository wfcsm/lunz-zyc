<template>
  <div class="head">
    <slot></slot>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LunzTabsHead",
  inject: ["eventBus"],
  
};
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  height: 40px;
  justify-content: flex-start;
  border: 1px solid red;
  padding: 0 2em;
  > .action-wrapper {
      margin-left: auto
  }
}
</style>

