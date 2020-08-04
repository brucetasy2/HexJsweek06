<template>
  <div>
    後台-Dashboard
    <div id="nav">
      <router-link to="/admin/">
        後台首頁
      </router-link> |
      <router-link to="/">
        回到前台
      </router-link> |
      <router-link to="/admin/products">
        產品列表
      </router-link> |
      <router-link to="/admin/orders">
        購物車列表
      </router-link> |
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },
  created() {
    this.CheckLoginStatus(); // 是否已經登錄
  },
  methods: {
    CheckLoginStatus() {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
      // 檢查 token 是否為有效狀態 ，過期 或 被註銷 ??
      console.log(`CheckLoginStatus=${this.token}`);
      if (this.token === '') {
        console.log('CheckLoginStatus= lost token');
        this.$router.push('/login');
      }
      // axios 預設值
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      const api = `${process.env.VUE_APP_APIPATH}auth/check`;

      this.$http
        .post(api, { api_token: this.token })
        .then((response) => {
          // console.log(`response ${response}`);
          if (response.data.success) {
            this.checkSuccess = true;
          }
        })
        .catch(() => {
          this.$router.push('/login');
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
