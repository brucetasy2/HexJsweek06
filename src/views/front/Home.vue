<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">
        Home/首頁
      </router-link>|
      <router-link to="/about">
        About/關於我們
      </router-link>|
      <router-link to="/products">
        Products/產品列表
      </router-link>|
      <router-link to="/cart">
        Cart/購物車
      </router-link>|
      <router-link to="/bill">
        Bill/結帳
      </router-link>|
      <router-link to="/Dashboard">
        到後台
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
    };
  },
};
</script>
