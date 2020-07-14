const fetchReducer = (
  state = {
    status: false,
    error: null,
    data: []
  },
  action
) => {
  switch (action.type) {
    case 'FETCHING':
      return { ...state, loading: true }
    case 'FETCHED':
      return { ...state, loading: false, data: action.data }
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
export default fetchReducer
