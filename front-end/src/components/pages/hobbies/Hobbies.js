import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage, setSelectedButton } from '../../../redux/actions'
import { getSteamEndpoint } from '../../../api'
function Hobbies () {
  const dispatch = useDispatch()

  useEffect(() => {
    // Update the appbar's title
    dispatch(setCurrentPage('Hobbies'))
    dispatch(setSelectedButton('Hobbies'))
    fetch(getSteamEndpoint())
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  })

  return <div> My hobbies </div>
}
export default Hobbies
