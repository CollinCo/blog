export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER": // my code
      return [...state, action.payload];
    default:
      return state;
  }
};
