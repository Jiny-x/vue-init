<script>
import { ACCESS_TOKEN } from '@/store/mutation-types'

import { initMenu } from 'utils/utils'

export default {
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    if (this.$login.checkLogin()) {
      this.getUserInfo()
    } else {
      this.login(this)
    }
  },
  methods: {
    getUserInfo: function () {
      this.$axios({
        url: this.$authConfig.userInfoUri,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.$ls.get(ACCESS_TOKEN)}`
        }
      })
        .then((response) => {
          this.user = response.data
          const permissionSet = []
          const authorities = this.user.principal.authorities
          for (let i = 0; i < authorities.length; i++) {
            permissionSet.push(authorities[i].authority)
          }
          this.user.principal.permissionSet = permissionSet
          this.$store.commit('SET_LOGIN', this.user.principal)
          this.$store.commit('SET_MENU_FLAG', false)
          initMenu(this.$router, this.$store)
          this.$router.push('/')
        })
        .catch((err) => {
          alert(err)
          // this.$router.push('/logout')
        })
    }
  }
}
</script>
