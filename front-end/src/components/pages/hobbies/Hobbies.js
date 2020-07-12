import React, { useEffect, componentDidMount } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage, setSelectedButton } from '../../../redux/actions'

function Hobbies () {
  const dispatch = useDispatch()

  useEffect(() => {
    // Update the appbar's title
    dispatch(setCurrentPage('Hobbies'))
    dispatch(setSelectedButton('Hobbies'))
  })

  return <div> test</div>
}
export default Hobbies
