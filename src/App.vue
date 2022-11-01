<template>
  <div class="inner-body">
    <div class="inner-body-main">
      <header class="header container-fluid py-3">
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
const axios = require("axios").default;
export default {
  setup() {
    provide("store", store);
    axios
      .get("https://tlv-events-app.herokuapp.com/events/uk/london")
      .then(function (response) {
        store.state.allEvents = response.data;
      });
  },
  name: "App",
  components: {
    Timeline,
    Search,
    ShoppingCart,
  },
  methods: {},
  updated() {
    const searchQuery = store.state.searchQuery;
    console.log(searchQuery);
  },
};
</script>

<style scoped lang="scss">
$primary: rgb(0, 166, 216);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: $primary;
  .header {
    background-color: $primary;
  }
}
</style>
