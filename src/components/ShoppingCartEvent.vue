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
import { germanDay, groupEventByDay } from "../helpers/format";
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
      this.store.state.shoppingCartEvents = shoppingCartEvents;

      //Render everthing new
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
