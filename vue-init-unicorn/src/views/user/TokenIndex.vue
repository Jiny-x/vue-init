<script>
import { ACCESS_TOKEN } from '@/store/mutation-types'

export default {
  name: 'TokenIndex',
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
    getToken: function () {
      this.api.login.getToken(this.code).then(res => {
        const access_token = res.data.access_token
        const expire = parseInt(res.data.expires_in) * 1000
        this.$ls.set(ACCESS_TOKEN, access_token, expire)
        this.$store.commit('SET_TOKEN', access_token)

        this.$route.push('/')
      })
    }
  }
}
</script>
