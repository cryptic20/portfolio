import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage, setSelectedButton } from '../../redux/actions'

function Home () {
  const dispatch = useDispatch()

  useEffect(() => {
    // Update the appbar's title
    dispatch(setCurrentPage('Home'))
    dispatch(setSelectedButton('Home'))
  })

  return <div>My home! </div>
}
export default Home
