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
