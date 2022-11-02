<template>
  <div class="shopping-cart-event p-3 shadow-sm">
    <div class="d-flex align-items-center justify-content-between">
      <div class="content-event">
        <span class="date">{{ dayHeadline }}</span>
        <div class="h6 fw-bolder m-0">{{ eventData.title }}</div>
      </div>
      <div
        class="remove-event p-2 d-inline"
        @click="removeEventFromShoppingCart()"
      >
        <div class="d-flex">
          <i class="bi bi-trash3"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { inject } from "vue";
import {
  germanDay,
  filterByQuery,
  filterEvents,
  sortEventsByDate,
  groupEventByDay,
} from "../helpers/format";
export default {
  name: "ShoppingCartEvent",
  props: ["eventData"],

  setup() {
    const store = inject("store");
    return { store };
  },
  data() {
    return {
      dayHeadline: this.eventData.date,
    };
  },
  mounted() {
    this.dayHeadline = germanDay(this.eventData.date);
  },
  methods: {
    removeEventFromShoppingCart: function () {
      let shoppingCartEvents = this.store.state.shoppingCartEvents.filter(
        (event) => event._id !== this.eventData._id
      );
      if (shoppingCartEvents.length === 0) {
        this.store.state.shoppingCartVisible = false;
      }
      this.store.state.shoppingCartEvents = shoppingCartEvents;

      //Render everthing new
      // clear array
      this.store.state.visibleEvents = [];
      const searchQuery = this.store.state.searchQuery;
      const allEvents = this.store.state.allEvents;

      /** sort all events by date, filter by search query, remove selected events to shoppingcart */
      let visibleEvents = filterByQuery(searchQuery, allEvents);
      /** remove all selected shopping cart events from visibleEvents array */
      visibleEvents = filterEvents(
        visibleEvents,
        this.store.state.shoppingCartEvents
      );

      /** sort events by date for next step */
      visibleEvents = sortEventsByDate(visibleEvents);

      /**group events by day */
      const eventsByDay = groupEventByDay(visibleEvents);
      this.store.state.visibleEvents = eventsByDay;
    },
  },
};
</script>
<style lang="sass" scoped>
.shopping-cart-event
    background-color: #fff3
.remove-event
    background-color: var(--bs-danger)
    cursor: pointer
    border-radius: var(--bs-border-radius-sm)
    .bi
        font-size: 16px
</style>
