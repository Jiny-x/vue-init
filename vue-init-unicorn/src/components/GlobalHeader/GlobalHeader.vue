<template>
  <div class="global-header">
    <div class="header-left">
      <menu :menus="menus"></menu>
      <div class="logo"></div>
    </div>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: 'GolbalHeader',
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.global-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  .header-right {
    display: flex;
    justify-content: flex-end;
  }
}
</style>