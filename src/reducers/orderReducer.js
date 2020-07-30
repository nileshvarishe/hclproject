const initOrder = {
  order: [],
  orderId: 0
};

function orderReducer(state = initOrder, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return { order: [...state.order, action.cartAddData], orderId: action.orderId};
    case "REMOVE_BOOK":
      return { order: action.cartRemoveBooks, orderId: action.orderId };
    default:
      return state;
  }
}

export default orderReducer;
