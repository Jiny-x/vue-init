<template>
  <div id="userLayout" :class="['user-layout-wrapper']">
  </div>
</template>

<script>

export default {
  name: 'UserLayout',
  data () {
    return {}
  },
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style lang="scss" scoped>
  #userLayout.user-layout-wrapper {
    height: 100%;

    .container {
      width: 100%;
      min-height: 100%;
      background: #f0f2f5;
      padding: 110px 0 144px;
      position: relative;
    }
  }
</style>
