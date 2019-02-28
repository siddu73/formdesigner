export function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_PEOPLE":
      console.log(action);
      return [...state, action.payload];
    // case "ADD_PEOPLE":
    //   console.log(action);
    //   return [...state, action.payload];
    default:
      return state;
  }
}
