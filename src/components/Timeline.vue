<template>
  <main class="container">
    {{ store.state.visibleEvents }}
    <EventDay></EventDay>
  </main>
</template>
<script>
import EventDay from "./EventDay.vue";
import { inject } from "vue";

export default {
  name: "Timeline",
  components: {
    EventDay,
  },
  setup() {
    const store = inject("store");
    return { store };
  },
};
</script>
