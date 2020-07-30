<template>
  <div>
    <login />
  </div>
</template>

<script>
import login from '@/components/Login.vue';

export default {
  components: {
    login,
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },

  methods: {
    login() {
      // 進行驗證
      const api = `${process.env.VUE_APP_UUID}auth/login`;
      this.$http
        .post(api, this.user)
        .then((response) => {
          // console.log(response);
          const { token } = response.data;
          const { expired } = response.data;

          // 寫入 cookie token  expires 設置有效時間
          document.cookie = `token=${token};expires=${new Date(
            expired * 1000,
          )}; path=/`;
          window.location = 'prducts.html';
        })
        .catch((error) => {
          console.log(error);
          // alert('親 ! 驗證失敗，請在嘗試 !');
        });
    },

    //   清除token
    logout() {
      document.cookie = 'token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
