<template>
  <div class="inner-body">
    <div class="inner-body-main">
      <header class="header shadow container-fluid d-flex align-items-center">
        <div class="container-xl">
          <div class="row">
            <div class="d-flex col-12 justify-content-between">
              <Search placeholder="Search"></Search>
              <ShoppingCartBtn></ShoppingCartBtn>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div class="container">
          <div class="row">
            <Timeline></Timeline>
          </div>
        </div>
      </main>
    </div>
    <aside class="inner-body-right">
      <ShoppingCart></ShoppingCart>
    </aside>
  </div>
</template>

<script>
import store from "./store";
import { provide, inject } from "vue";
import Timeline from "./components/Timeline.vue";
import Search from "./components/Search.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import ShoppingCartBtn from "./components/ShoppingCartBtn.vue";
export default {
  setup() {
    provide("store", store);
    inject("store", store);
  },
  name: "App",
  components: {
    Timeline,
    Search,
    ShoppingCart,
    ShoppingCartBtn,
  },
};
</script>
<style lang="sass" scoped>
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background-color: #f6f6f6
  .header
    height: 70px
    background-color: var(--bs-cyan)
    position: sticky
    top:0
    z-index: 99
  .inner-body-main
    position: relative
  .inner-body-right
    position: fixed
    top: 0
    right: 0
    min-width: 240px
    width: 40vw
</style>
