const initOrder = {
  order: [],
};

function orderReducer(state = initOrder, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return { order: [...state.order, action.cartAddData] };
    case "REMOVE_BOOK":
      return { order: action.cartRemoveBooks };
    default:
      return state;
  }
}

export default orderReducer;
