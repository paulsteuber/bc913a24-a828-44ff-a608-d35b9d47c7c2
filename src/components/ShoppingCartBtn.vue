<template>
  <div
    class="shopping-cart-icon d-flex justify-content-center"
    @click="changeCartVisibility()"
  >
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
  methods: {
    changeCartVisibility() {
      this.store.state.shoppingCartVisible =
        !this.store.state.shoppingCartVisible;

      console.log(this.store.state.shoppingCartVisible);
    },
  },
};
</script>
<style lang="sass" scoped>
.shopping-cart-icon
    position: relative
    cursor: pointer
    &:hover
        .bi
            transform: scale(1.1)
    .bi
        transition: all 0.1s ease-in-out
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
