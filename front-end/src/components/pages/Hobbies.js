import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/actions'

function Hobbies () {
  const dispatch = useDispatch()

  useEffect(() => {
    // Update the appbar's title
    dispatch(setCurrentPage('Hobbies'))
  })
  return <div>My hobbies! </div>
}
export default Hobbies
