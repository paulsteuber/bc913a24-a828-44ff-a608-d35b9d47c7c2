<template>
  <div class="shopping-cart-icon d-flex justify-content-center">
    <i class="bi bi-cart-fill"></i>
    <div class="overlay d-flex justify-content-end align-items-start">
      <span class="badge text-bg-danger">{{
        store.state.shoppingCartEvents.length
      }}</span>
    </div>
  </div>
</template>
<script>
import { inject } from "vue";

export default {
  name: "ShoppingCartBtn",
  setup() {
    const store = inject("store");
    return { store };
  },
};
</script>
<style lang="sass" scoped>
.shopping-cart-icon
    position: relative
    .bi
        font-size: 32px
        color: white
        margin-right: 7px
    .overlay
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        .badge
            font-size:0.7rem
            border-radius: 100%
</style>
