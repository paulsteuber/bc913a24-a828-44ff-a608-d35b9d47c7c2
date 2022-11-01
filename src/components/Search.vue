<script>
import { inject } from "vue";

export default {
  name: "Search",
  setup() {
    const store = inject("store");
    return { store };
  },
};
</script>
