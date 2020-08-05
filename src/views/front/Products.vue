<template>
  <div class="products">
    <Loading :active.sync="isLoading" />
    <h1>前台-產品列表</h1>

    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">
            category
          </th>
          <th scope="col">
            title
          </th>
          <th scope="col">
            content
          </th>
          <th scope="col">
            link
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in products"
          :key="item.id"
        >
          <th scope="row">
            {{ item.category }}
          </th>
          <td>{{ item.title }}</td>
          <td>{{ item.content }}</td>
          <td>
            <router-link :to="`/product/${item.id}`">
              看產品
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`;
    this.$http
      .get(url)
      .then((response) => {
        this.products = response.data.data;
        // console.log(this.products.length);
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
