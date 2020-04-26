import { mapState } from 'vuex'

const mixin = {
  computed: {
    ...mapState({
      layoutMode: (state) => state.app.layout,
      navTheme: (state) => state.app.theme,
      primaryColor: (state) => state.app.color,
      colorWeak: (state) => state.app.weak,
      fixedHeader: (state) => state.app.fixedHeader,
      fixSiderbar: (state) => state.app.fixSiderbar,
      fixSidebar: (state) => state.app.fixSiderbar,
      contentWidth: (state) => state.app.contentWidth,
      autoHideHeader: (state) => state.app.autoHideHeader,
      sidebarOpened: (state) => state.app.sidebar,
      multiTab: (state) => state.app.multiTab,
    }),
  },
}

export { mixin }
