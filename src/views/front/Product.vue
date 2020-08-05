<template>
  <div class="mx-auto">
    <Loading :active.sync="isLoading" />
    <h2>This is 單一產品頁面</h2>
    <div
      class="card mx-auto"
      style="width: 18rem;"
    >
      <img
        :src="product.imageUrl[0]"
        class="card-img-top"
        alt="..."
      >
      <div class="card-body">
        <h5 class="card-title">
          分類:{{ product.category }}
        </h5>
        <p class="card-text">
          內容:{{ product.content }}
        </p>
        <p class="card-text">
          說明:{{ product.description }}
        </p>
        <p class="card-text">
          原價:{{ product.origin_price }}
        </p>
        <p class="card-text">
          特價:{{ product.price }}
        </p>
        <a
          href="#"
          class="btn btn-primary"
        >加入購物車</a>
      </div>
    </div>
    <!-- <table>
      <tr>
        <td>category : {{ product.category }}</td>
        <td>title : {{ product.title }}</td>
        <td>content: {{ product.content }}</td>
        <td>origin_price: {{ product.origin_price }}</td>
        <td>price: {{ product.price }}</td>
      </tr>
    </table> -->
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
