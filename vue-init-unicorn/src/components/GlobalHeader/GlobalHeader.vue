<template>
  <div class="global-header">
    <div class="header-left">
      <menuView :menus="menus"></menuView>
      <div class="logo"></div>
    </div>
    <div class="header-right"></div>
  </div>
</template>

<script>
import MenuView from './MenuView'
export default {
  name: 'GolbalHeader',
  components: { MenuView },
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