<template>
  <div class="toast" ref="toast" :class="toastClasses">
    <div class="message">
      <div v-if="enableHtml" v-html="$slots.default[0]"></div>
      <slot v-else></slot>
    </div>

    <span class="line" ref="line"></span>
    <span v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  name: "LunzToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseTime: {
      type: Number,
      default: 50
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position:{
        type:String,
        default:"top",
        validator(value){
            ['top','bottom','center'].indexOf(value)>=0
        }
    }
  },
  created() {},
  computed:{
      toastClasses(){
         return {[`position-${this.position}`]:true}
      }
  },
  mounted() {
    this.updateStyles();
    this.execAutoClose();
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseTime * 1000);
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    close() {
      this.$el.remove();
      this.$destroy();
    },
    log() {
      console.log("测试");
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.toast {
  font-size: 14px;
  color: #fff;
  min-height: 56px;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  position: absolute;
  left: 50%;
 
  .message{
      max-width: 100px;
      word-wrap:break-word;
      padding: 4px 0;
  }
  .line {
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  &.position-top{
      top: 0;
      transform: translateX(-50%);
  }
  &.position-bottom{
      bottom: 0;
      transform: translateX(-50%);
  }
  &.position-center{
      top: 50%;
      transform: translateX(-50%) translateY(-50%)
  }
}
</style>


