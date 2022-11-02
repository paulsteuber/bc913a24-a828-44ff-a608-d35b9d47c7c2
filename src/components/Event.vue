<template>
  <div class="inner-event shadow" :id="eventData._id">
    <div class="image-wrapper">
      <img :src="eventData.flyerFront" :alt="eventData.title" loading="lazy" />
    </div>
    <div class="content-wrapper p-3">
      <h2 class="title">{{ eventData.title }}</h2>
      <div class="d-flex justify-content-end">
        <div class="btn btn-primary" @click="addEventToShoppingCart()">Add</div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "Event",
  props: ["eventData"],
  setup() {
    const store = inject("store");
    return { store };
  },
  methods: {
    addEventToShoppingCart: function () {
      this.store.state.shoppingCartEvents.push(this.eventData);
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
