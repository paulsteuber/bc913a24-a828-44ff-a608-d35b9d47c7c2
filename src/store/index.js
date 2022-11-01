//@ts-check
import { reactive } from "vue";

const state = reactive({
  allEvents: [{}],
  shoppingCartEvents: [{}],
  visibleEvents: [{}],
  searchQuery: "",
});

export default { state };
