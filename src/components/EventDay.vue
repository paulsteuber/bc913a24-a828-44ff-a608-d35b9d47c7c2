<template>
  <div class="day">
    <div class="day-header">
      <h3>{{ dayData.date }}</h3>
    </div>
    <div class="events">
      <div class="event" v-for="event in dayData.events" :key="event._id">
        <Event :event-data="event"></Event>
      </div>
    </div>
  </div>
</template>
<script>
import Event from "./Event.vue";
import { inject } from "vue";

export default {
  name: "Timeline",
  props: ["dayData"],
  components: {
    Event,
  },
  setup() {
    const store = inject("store");
    return { store };
  },
};
</script>
