<template>
  <div class="home">
    home
  </div>
</template>

<script>

export default {
  name: 'Home',
  created () {
    this.api.login.login().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
}
</script>
