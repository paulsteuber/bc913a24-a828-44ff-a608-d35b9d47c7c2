<template>
  <div class="inner-event shadow" :id="eventData._id">
    <div class="image-wrapper">
      <img :src="eventData.flyerFront" :alt="eventData.title" loading="lazy" />
    </div>
    <div class="content-wrapper p-3">
      <h2 class="title h4 fw-bolder">{{ eventData.title }}</h2>
      <div class="d-flex justify-content-between">
        <a
          class="geo-location btn btn-primary"
          :href="eventData.venue.direction"
          target="_blank"
        >
          <i class="bi bi-geo-alt-fill"></i
          ><span class="px-2">{{ shortLocationName }}</span>
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
import { truncateStr } from "../helpers/format";

export default {
  name: "Event",
  props: ["eventData"],
  setup() {
    const store = inject("store");
    return { store };
  },
  data() {
    return {
      shortLocationName: truncateStr(this.eventData.venue.name, 20),
    };
  },
  methods: {
    addEventToShoppingCart: function () {
      const thisEventId = this.eventData._id;
      const shoppingCartEvents = this.store.state.shoppingCartEvents;
      shoppingCartEvents.push(this.eventData);

      /** remove the event from timeline */
      let newVisibleEvents = this.store.state.visibleEvents;
      console.log("ARR", newVisibleEvents);
      Object.keys(newVisibleEvents).forEach((day) => {
        const newDayEvents = newVisibleEvents[day].events.filter(
          (event) => event._id !== thisEventId
        );
        newVisibleEvents[day].events = newDayEvents;
        console.log("LENGTH", newDayEvents.length);
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
</style>
