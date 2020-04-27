const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_SKILL":
      return state.filter(item => item.languages && item.languages.some(lang => action.payload.includes(lang)));
    break;
    default:
      return state;
    break;
  }
}

export default reducer;