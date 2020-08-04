<template>
  <div class="products">
    <h1>前台-產品列表</h1>
    <table>
      <tr
        v-for="item in products"
        :key="item.id"
      >
        <td>category : {{ item.category }}</td>
        <td>title : {{ item.title }}</td>
        <td>content: {{ item.content }}</td>
        <router-link :to="`/product/${item.id}`">
          看產品
        </router-link>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      products: [],
    };
  },
  created() {
    const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`;
    this.$http
      .get(url)
      .then((response) => {
        this.products = response.data.data;
        // console.log(this.products.length);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>

</style>
