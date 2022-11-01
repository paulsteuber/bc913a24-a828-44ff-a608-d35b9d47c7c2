<template>
  <div class="search-wrapper d-flex">
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
//import { eventDates } from "./../helpers/format";

export default {
  name: "Search",
  props: ["placeholder"],
  setup() {
    const store = inject("store");
    return { store };
  },
  methods: {
    searchQueryHasChanged: function () {
      /** sort all events by date, filter by search query, remove selected events to shoppingcart */
      const searchQuery = this.store.state.searchQuery.toLowerCase();
      const allEvents = this.store.state.allEvents;
      const shoppingCartEvents = this.store.state.shoppingCartEvents;
      this.store.state.visibleEvents = [{}];

      let visibleEvents = [];
      allEvents.forEach((event) => {
        /** search query matches with event title */
        const eventTitle = event.title.toLowerCase();
        if (!eventTitle.includes(searchQuery)) {
          return;
        }
        visibleEvents.push(event);
      });
      /** remove all selected shopping cart events from visibleEvents array */
      shoppingCartEvents.forEach((shoppingCartEvent) => {
        visibleEvents = visibleEvents.filter(
          (visEvent) => visEvent._id !== shoppingCartEvent._id
        );
      });
      /** sort events by date for next step */
      visibleEvents = visibleEvents.sort(function (a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.icon {
  font-size: 24px;
  color: white;
}
</style>
