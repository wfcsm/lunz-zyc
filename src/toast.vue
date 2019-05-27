<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"LunzToast"
}
</script>

<style lang="scss" scoped>
.toast{
    font-size: 14px;
    color:#fff;
    height: 56px;
    background:rgba(0,0,0,.75);
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    padding:0 16px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
</style>


