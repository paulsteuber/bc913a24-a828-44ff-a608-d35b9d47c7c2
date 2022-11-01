<template>
  <div class="inner-event shadow" :id="eventData._id">
    <div class="image-wrapper">
      <img :src="eventData.flyerFront" :alt="eventData.title" loading="lazy" />
    </div>
    <div class="content-wrapper p-3">
      <h2 class="title">{{ eventData.title }}</h2>
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
  methods: {},
};
</script>
<style lang="sass" scoped>
img
  max-width: 100%
</style>
