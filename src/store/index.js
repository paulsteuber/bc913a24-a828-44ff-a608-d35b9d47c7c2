//@ts-check
import { reactive } from "vue";

const state = reactive({
  allEvents: [{}],
  shoppingCartEvents: [{}],
  visibleEvents: [{}],
});

export default { state };
