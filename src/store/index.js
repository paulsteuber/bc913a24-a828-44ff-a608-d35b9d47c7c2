//@ts-check
import { reactive } from "vue";

const state = reactive({
  allEvents: [{}],
  shoppingCartEvents: [],
  visibleEvents: [],
  searchQuery: "",
  shoppingCartVisible: false,
  eventsInit: false,
});

export default { state };
