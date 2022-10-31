<template>
  <main class="container"></main>
  <Event></Event>
</template>
<script>
import Event from "./components/Event.vue";
import { inject } from "vue";

export default {
  name: "EventList",
  components: {
    Event,
  },
};
</script>
