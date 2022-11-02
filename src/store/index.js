//@ts-check
import { reactive } from "vue";

const state = reactive({
  allEvents: [{}],
  shoppingCartEvents: [],
  visibleEvents: [{}],
  searchQuery: "",
  shoppingCartVisible: false,
});

export default { state };
