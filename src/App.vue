<template>
  <div class="inner-body">
    <div class="inner-body-main">
      <header class="header shadow container-fluid py-3">
        <div class="container-xl">
          <div class="d-flex justify-content-between">
            <Search placeholder="Search"></Search>
          </div>
        </div>
      </header>
      <main>
        <div class="container">
          <Timeline></Timeline>
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
import { provide } from "vue";
import Timeline from "./components/Timeline.vue";
import Search from "./components/Search.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
export default {
  setup() {
    provide("store", store);
  },
  name: "App",
  components: {
    Timeline,
    Search,
    ShoppingCart,
  },
};
</script>

<style lang="sass" scoped>
$primary: rgb(0, 166, 216)
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
  background-color: $primary
  .header
    height: 70px
    background-color: $primary
    position: sticky
    top:0
    z-index: 99
  .inner-body-main
    position: relative
</style>
