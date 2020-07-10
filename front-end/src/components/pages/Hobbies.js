import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage, setSelectedButton } from '../../redux/actions'

function Hobbies (props) {
  const dispatch = useDispatch()
  useEffect(() => {
    // Update the appbar's title
    dispatch(setCurrentPage('Hobbies'))
    dispatch(setSelectedButton('Hobbies'))
  })

  return <div>My hobbies! </div>
}
export default Hobbies
