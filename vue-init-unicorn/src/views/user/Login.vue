<template>
  <div class="loading-wrap">
    <a-spin size="large" />
  </div>
</template>
<script>
import { ACCESS_TOKEN } from '@/store/mutation-types'



export default {
  name: 'Login',
  data () {
    return {
      state: '',
      code: ''
    }
  },
  mounted () {
    this.code = this.$route.query.code
    this.state = this.$route.query.state
    this.getToken()
  },
  methods: {
    getToken () {
      this.api.login.getToken(this.code).then(res => {
        const access_token = res.data.access_token
        const expire = parseInt(res.data.expires_in) * 1000
        this.$ls.set(ACCESS_TOKEN, access_token, expire)
        this.$store.commit('SET_TOKEN', access_token)

        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
