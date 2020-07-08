const currentPageReducer = (state = 'Home', action) => {
  switch (action.type) {
    case 'SET_CURRENTPAGE':
      return (state = action.page)
    default:
      return state
  }
}
export default currentPageReducer
