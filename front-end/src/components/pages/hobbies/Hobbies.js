import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage, setSelectedButton } from '../../../redux/actions'

function Hobbies () {
  const dispatch = useDispatch()

  useEffect(() => {
    // Update the appbar's title
    dispatch(setCurrentPage('Hobbies'))
    dispatch(setSelectedButton('Hobbies'))
    fetch(
      'https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=31DD00DAB416B9E99393A518880232F3&steamids=76561198072052850'
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  })

  return <div> My hobbies </div>
}
export default Hobbies
