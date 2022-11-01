<template>
  <main class="container"></main>
  <Event></Event>
</template>
<script>
import Event from "./Event.vue";
import { inject } from "vue";

export default {
  name: "Timeline",
  components: {
    Event,
  },
  setup() {
    const store = inject("store");
    return { store };
  },
};
</script>
