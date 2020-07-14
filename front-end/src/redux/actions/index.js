export const toggleDarkTheme = () => ({
  type: 'TOGGLE_DARKTHEME'
})

// sets page name at the app bar
export const setCurrentPage = (page) => ({
  type: 'SET_CURRENTPAGE',
  page
})

export const setSelectedButton = (button) => ({
  type: 'SET_SELECTEDBUTTON',
  button
})

export const fetching = () => ({
  type: 'FETCHING'
})

export const fetched = (data) => ({
  type: 'FETCHED',
  data
})

export const fetchError = (error) => ({
  type: 'FETCHED_ERROR',
  error
})
