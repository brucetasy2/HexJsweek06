<template>
  <div class="about">
    <Loading :active.sync="isLoading" />
    <h1>This is 單一產品頁面</h1>
    <table>
      <tr>
        <td>category : {{ product.category }}</td>
        <td>title : {{ product.title }}</td>
        <td>content: {{ product.content }}</td>
        <td>origin_price: {{ product.origin_price }}</td>
        <td>price: {{ product.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      product: {},
      isLoading: false,
    };
  },
  created() {
    const { id } = this.$route.params;
    const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`;
    this.isLoading = true;
    this.$http
      .get(url)
      .then((response) => {
        this.product = response.data.data;
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      });
  },
};
</script>

<style lang="scss" scoped>
</style>
