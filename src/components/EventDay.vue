<template>
  <div class="day shadow my-4">
    <div class="day-header p-4">
      <h3 class="day-headline p-2 shadow-sm d-inline-block">
        {{ dayHeadline }}
      </h3>
    </div>
    <div class="events p-4">
      <div class="row">
        <div
          class="event col-md-4 p-2"
          v-for="event in dayData.events"
          :key="event._id"
        >
          <Event :event-data="event"></Event>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Event from "./Event.vue";
import { inject } from "vue";
import { germanDay } from "../helpers/format";

export default {
  name: "Timeline",
  props: ["dayData"],
  components: {
    Event,
  },
  data() {
    return {
      dayHeadline: this.dayData.date,
    };
  },
  setup() {
    const store = inject("store");
    return { store };
  },
  methods: {
    printDay: function () {
      console.log("DATE", this.dayData.date);
      return;
    },
  },
  mounted() {
    this.dayHeadline = germanDay(this.dayHeadline);
  },
};
</script>
<style lang="sass" scoped>
.day
  border-radius: var(--bs-border-radius-xl)
  .day-header
    top: 70px
    position: sticky
    .day-headline
        background-color: var(--bs-cyan)
        border-radius: var(--bs-border-radius-xl)
        color: white
        font-weight: 700
</style>
