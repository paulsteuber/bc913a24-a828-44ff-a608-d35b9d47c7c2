<template>
  <div class="search-wrapper d-flex">
    <div class="icon px-3"><i class="bi bi-search"></i></div>
    <div class="input-wrapper">
      <input
        type="text"
        class="form-control"
        :placeholder="placeholder"
        v-model="store.state.searchQuery"
      />
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "Search",
  props: ["placeholder"],
  setup() {
    const store = inject("store");
    return { store };
  },
};
</script>
<style lang="scss" scoped>
.icon {
  font-size: 24px;
  color: white;
}
</style>
