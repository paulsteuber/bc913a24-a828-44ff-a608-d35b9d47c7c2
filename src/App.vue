<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <header class="header container-fluid">
    <div class="row">
      <div class="container">
        <div class="d-flex justify-content-between">
          <Search></Search>
          <ShoppingCart></ShoppingCart>
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="container">
      <EventList></EventList>
    </div>
  </main>
</template>

<script>
import store from "@/store";
import { provide } from "vue";
import EventList from "./components/EventList.vue";
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
        store.state.allEvents.forEach(function (el) {
          console.log(el.title);
        });
      });
  },
  name: "App",
  components: {
    EventList,
    Search,
    ShoppingCart,
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
