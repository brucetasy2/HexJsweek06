<template>
  <div class="about">
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
    };
  },
  created() {
    const { id } = this.$route.params;
    const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`;
    this.$http
      .get(url)
      .then((response) => {
        this.product = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
</style>
