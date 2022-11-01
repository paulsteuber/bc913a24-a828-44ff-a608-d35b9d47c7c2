<script>
import { inject } from "vue";

export default {
  name: "Event",
  setup() {
    const store = inject("store");
    return { store };
  },
};
</script>
