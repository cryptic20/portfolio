import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/actions'

function Home () {
  const dispatch = useDispatch()

  useEffect(() => {
    // Update the appbar's title
    dispatch(setCurrentPage('Home'))
  })

  return <div>My home! </div>
}
export default Home
