const selectedButtonReducer = (state = 'Home', action) => {
  switch (action.type) {
    case 'SET_SELECTEDBUTTON':
      return (state = action.button)
    default:
      return state
  }
}
export default selectedButtonReducer
