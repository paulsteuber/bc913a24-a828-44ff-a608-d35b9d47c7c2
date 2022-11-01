<template>
  <main class="container">
    <div
      class="day-wrapper"
      v-for="day in store.state.visibleEvents"
      :key="day.date"
    >
      <EventDay :day-data="day"></EventDay>
    </div>
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
