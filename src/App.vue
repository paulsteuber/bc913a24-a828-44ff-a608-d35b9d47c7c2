<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <EventList></EventList>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
