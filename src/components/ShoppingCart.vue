<script>
import { inject } from "vue";

export default {
  name: "ShoppingCart",
  setup() {
    const store = inject("store");
    return { store };
  },
};
</script>
