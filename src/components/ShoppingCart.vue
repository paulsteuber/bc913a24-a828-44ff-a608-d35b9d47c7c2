<template>
  <aside
    :className="
      'inner-body-right shadow visibility-' +
      this.store.state.shoppingCartVisible
    "
  >
    <div class="shopping-cart-header d-flex align-items-center p-4">
      <div
        class="close-btn d-flex align-items-center"
        @click="changeVisibility()"
      >
        <i class="bi bi-arrow-left"></i><span class="px-3">Close</span>
      </div>
      <div class="h3 px-4">Warenkorb</div>
    </div>
    <div class="list">
      <div
        class="event-wrapper my-1 p-2"
        v-for="event in store.state.shoppingCartEvents"
        :key="event._id"
      >
        <ShoppingCartEvent :eventData="event"></ShoppingCartEvent>
      </div>
    </div>
  </aside>
</template>

<script>
import { inject } from "vue";
import ShoppingCartEvent from "./ShoppingCartEvent.vue";
export default {
  name: "ShoppingCart",
  components: { ShoppingCartEvent },
  setup() {
    const store = inject("store");
    return { store };
  },
  methods: {
    changeVisibility: function () {
      this.store.state.shoppingCartVisible = false;
    },
  },
  data() {},
};
</script>

<style lang="sass" scoped>

.inner-body-right
  position: fixed
  top: 0
  right: 0
  height: 100%
  min-width: 240px
  width: 25vw
  background-color: var(--bs-cyan)
  transform: translateX(100%)
  transition: all 0.1s ease-in-out
  z-index: 100
  color: white
  &.visibility-true
    transform: translate(0)

  .shopping-cart-header
    height: 70px
    .bi
      font-size: 24px
  .list
    overflow-y: auto
    -ms-overflow-style: none /* IE and Edge */
    scrollbar-width: none

    &::-webkit-scrollbar
      display: none
  .close-btn
    cursor: pointer
</style>
