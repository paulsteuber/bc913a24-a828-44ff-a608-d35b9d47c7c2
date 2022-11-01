<template>
  <div class="inner-event" :id="eventData._id">
    <div class="image-wrapper">
      {{ eventData }}
      ######
      {{ eventData.flyerFront }}
      <img :src="eventData.flyerFront" :alt="eventData.title" loading="lazy" />
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
};
</script>
