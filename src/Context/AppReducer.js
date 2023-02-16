const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        item: [action.payload, ...state.x],
      };
    default:
      return state;
  }
};

export default Reducer;
