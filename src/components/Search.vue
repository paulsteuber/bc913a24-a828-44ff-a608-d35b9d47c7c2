<template>
  <div class="search-wrapper d-flex align-items-center">
    <div class="icon px-3"><i class="bi bi-search"></i></div>
    <div class="input-wrapper">
      <input
        type="text"
        class="form-control"
        :placeholder="placeholder"
        v-model="store.state.searchQuery"
        @keyup="searchQueryHasChanged()"
      />
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import {
  groupEventByDay,
  sortEventsByDate,
  filterEvents,
  filterByQuery,
} from "./../helpers/format";
const axios = require("axios").default;

export default {
  name: "Search",
  props: ["placeholder"],
  setup() {
    const store = inject("store");
    return { store };
  },
  mounted() {
    const store = inject("store");
    let self = this;
    axios
      .get("https://tlv-events-app.herokuapp.com/events/uk/london")
      .then(function (response) {
        store.state.allEvents = response.data;
        self.searchQueryHasChanged();
      });
  },
  methods: {
    searchQueryHasChanged: function () {
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
      this.store.state.eventsInit = true;
    },
  },
};
</script>
<style lang="sass" scoped>
.bi
  font-size: 18px
  color: white
</style>
