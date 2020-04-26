<template>
  <div
    class="menu"
    @mouseenter="menuEnter"
    @mouseleave="menuLeave"
  >
    <div class="menu-container iconfont iconcaidan">
      <div
        class="menu-list-wrap"
        v-if="visible"
      >
        <div class="menu-list"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    menuEnter () {
      this.visible = true
    },
    menuLeave () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100px;
  height: 100%;
  .menu-list-wrap {
    width: 100vh;
    min-height: 64px;
    top: 64px;
    background: #fff;
    .menu-list {
      display: flex;
    }
  }
}
</style>