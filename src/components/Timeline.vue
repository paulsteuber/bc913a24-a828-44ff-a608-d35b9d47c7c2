<template>
  <main class="container">
    <div v-if="Object.keys(store.state.visibleEvents).length !== 0">
      <div
        class="day-wrapper"
        v-for="day in store.state.visibleEvents"
        :key="day.date"
      >
        <EventDay :day-data="day"></EventDay>
      </div>
    </div>
    <div v-else>
      <div v-if="store.state.eventsInit">
        <div class="no-results d-flex justify-content-center p-4 m-4">
          <h3>Keine Suchergebnisse</h3>
        </div>
      </div>
      <div v-else>
        <div class="d-flex justify-content-center p-4 m-4">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
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
