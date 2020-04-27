<template>
  <a-layout style="min-height: 100vh">
    <!-- layout header -->
    <a-layout-header style="position: fixed; padding-left: 0; width: 100%; z-index: 100; background: #428099">
      <global-header :menus="menus" />
    </a-layout-header>

    <!-- layout content -->
    <a-layout-content :style="{ height: '100%', margin: '24px 24px 0', paddingTop: fixedHeader ? '64px' : '0' }">
      <transition name="page-transition">
        <route-view />
      </transition>
    </a-layout-content>
  </a-layout>

</template>

<script>
import { mapState } from 'vuex'

import RouteView from './RouteView'
import GlobalHeader from '@/components/GlobalHeader/GlobalHeader'
import { convertRoutes } from './routeConvert'

export default {
  name: 'BasicLayout',
  components: {
    RouteView,
    GlobalHeader
  },
  data () {
    return {
      menus: []
    }
  },
  computed: {
    ...mapState({
      // 动态主路由
      mainMenu: state => state.permission.addRouters
    })
  },
  created () {
    const routes = convertRoutes(this.mainMenu.find(item => item.path === '/'))
    this.menus = (routes && routes.children) || []
  },
  methods: {

  }
}
</script>

<style lang="scss">
/*
 * The following styles are auto-applied to elements with
 * transition="page-transition" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the page transition by editing
 * these styles.
 */

.page-transition-enter {
  opacity: 0;
}

.page-transition-leave-active {
  opacity: 0;
}

.page-transition-enter .page-transition-container,
.page-transition-leave-active .page-transition-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
