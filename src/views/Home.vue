<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <home4front />
  </div>
</template>

<script>
// @ is an alias to /src
import home4front from '@/components/Home4front.vue';

export default {
  name: 'Home',
  components: {
    home4front,
  },
};
</script>
