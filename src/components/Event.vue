<template>
  <div class="inner-event shadow" :id="eventData._id">
    <div class="image-wrapper">
      <img :src="eventData.flyerFront" :alt="eventData.title" loading="lazy" />
    </div>
    <div class="content-wrapper p-3">
      <div class="date-wrapper d-flex justify-content-between">
        <div class="day d-flex align-items-center">
          <i class="bi bi-calendar me-2"></i>{{ day }}
        </div>
        <div class="time d-flex align-items-center">
          <i class="bi bi-clock me-2"></i>{{ startTime }} - {{ endTime }}
        </div>
      </div>
      <h2 class="title h4 fw-bolder my-3">{{ eventData.title }}</h2>

      <div class="d-flex justify-content-between">
        <a
          class="geo-location btn btn-primary"
          :href="eventData.venue.direction"
          target="_blank"
        >
          <i class="bi bi-geo-alt-fill"></i
          ><span class="px-2"
            >{{ shortLocationName }},
            <span class="cityname">{{ eventData.city }}</span></span
          >
        </a>
        <button class="btn btn-primary" @click="addEventToShoppingCart()">
          <i class="bi bi-cart-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import {
  truncateStr,
  sortEventsByDate,
  getTime,
  germanDay,
} from "../helpers/format";

export default {
  name: "Event",
  props: ["eventData"],
  setup() {
    const store = inject("store");
    return { store };
  },
  data() {
    return {
      shortLocationName: truncateStr(this.eventData.venue.name, 14),
      startTime: getTime(this.eventData.startTime),
      endTime: getTime(this.eventData.endTime),
      day: germanDay(this.eventData.date),
    };
  },
  methods: {
    addEventToShoppingCart: function () {
      const thisEventId = this.eventData._id;
      let shoppingCartEvents = this.store.state.shoppingCartEvents;
      shoppingCartEvents.push(this.eventData);
      shoppingCartEvents = sortEventsByDate(shoppingCartEvents);
      /** if first event is added to shopping cart open the shopping cart list */
      if (shoppingCartEvents.length === 1) {
        this.store.state.shoppingCartVisible = true;
      }

      /** remove the event from timeline (visibleEvents Array) */
      let newVisibleEvents = this.store.state.visibleEvents;
      Object.keys(newVisibleEvents).forEach((day) => {
        const newDayEvents = newVisibleEvents[day].events.filter(
          (event) => event._id !== thisEventId
        );
        newVisibleEvents[day].events = newDayEvents;
        if (!newDayEvents.length) {
          delete newVisibleEvents[day];
        }
      });
    },
  },
};
</script>
<style lang="sass" scoped>
.inner-event
  border-radius: var(--bs-border-radius-lg)
  overflow: hidden
img
  max-width: 100%
.geo-location
  .cityname
    text-transform: capitalize
</style>
