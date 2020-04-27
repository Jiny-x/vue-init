<template>
  <div
    class="menu"
    @mouseenter="menuEnter"
    @mouseleave="menuLeave"
  >
    <div class="menu-btn">
      <span class="menu-icon iconfont iconcaidan"></span>
      <span class="menu-text">菜单</span></div>
    <div class="menu-container">
      <transition name="menu">
        <div
          class="menu-list-wrap"
          v-show="visible"
        >
          <div class="menu-group-col menu-level-top">
            <div class="menu-item">
              <div class="item-content">
                <div class="menu-icon iconfont"></div>
                <div class="menu-text">排考系统</div>
              </div>
              <div class="item-action-icon">
                <a-icon type="right"></a-icon>
              </div>
            </div>
          </div>
          <div
            class="menu-group-col"
            v-for="item of menuList"
            :key="item.x"
          >
            <div
              class="group"
              v-for="(group, index) of item.group"
              :key="index"
            >
              <div class="menu-item group-name">{{ group.groupName }}</div>
              <router-link
                :to="router.path"
                tag="div"
                class="menu-item"
                v-for="(router, i) of group.routers"
                :key="i"
                @click.native="() => visible = false"
              >
                <div class="item-content">
                  <div
                    class="menu-icon iconfont"
                    :class="router.meta.icon"
                  ></div>
                  <div class="menu-text">{{ router.meta.title }}</div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuView',
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      visible: false,
      menuList: []
    }
  },
  created () {
    console.log(this.menus)
    this.groupMenuList()
  },
  methods: {
    menuEnter () {
      this.visible = true
    },
    menuLeave () {
      this.visible = false
    },

    // 分组菜单
    groupMenuList () {
      const menuList = []
      const xMap = {}
      const menus = [...this.menus]

      menus.map(item => {
        if (item.meta.x && item.meta.x !== '' && item.meta.y && item.metay !== '') {
          if (!xMap[item.meta.x]) {
            xMap[item.meta.x] = true
            menuList.push({ x: item.meta.x, group: [{ groupName: item.meta.group, routers: [item] }] })
          } else {
            const i = menuList.findIndex(ele => ele.x = item.meta.x)
            if (i === -1) {
              menuList[i].group.push({ groupName: item.meta.group, routers: [item] })
            } else {
              const groupX = menuList[i]
              const j = groupX.group.findIndex(ele => ele.groupName === item.meta.group)
              if (j === -1) {
                groupX.group.push({ groupName: item.meta.group, routers: [item] })
              } else {
                groupX.group[j].routers.push(item)
              }
            }
          }

        }
      })
      console.log(menuList)
      this.menuList = menuList
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  width: 100px;
  height: 100%;
  color: #fff;
  cursor: pointer;
  z-index: 70;
  &:hover {
    color: rgba(0, 0, 0, 0.75);
    background: #fff;
  }
  .menu-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .menu-icon {
      font-size: 24px;
    }
    .menu-text {
      padding-left: 4px;
      font-size: 16px;
    }
  }
  .menu-container {
    position: fixed;
    top: 64px;
    width: 100%;
    overflow: hidden;
  }
  .menu-list-wrap {
    display: flex;
    left: 0;
    width: 100vw;
    min-height: 64px;
    top: 64px;
    padding: 16px;
    background: #fff;
    color: rgba(0, 0, 0, 0.75);
    z-index: 10;
    .menu-group-col {
      width: 25%;
      padding-right: 16px;
      .menu-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: 0 8px;
        &:hover {
          background: #e8e8e8;
        }
        .item-content {
          display: flex;
          align-items: center;
          .menu-icon {
            width: 40px;
          }
        }
      }
      &.menu-level-top {
        .menu-item {
          background: #e8e8e8;
        }
      }
    }
  }
  .menu-enter-active,
  .menu-leave-active {
    transition: all 0.3s;
  }
  .menu-enter,
  .menu-leave-to {
    transform: translateY(-60px);
  }
}
</style>