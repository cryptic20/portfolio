import React, { useEffect, useState, useRef } from 'react'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCurrentPage,
  setSelectedButton,
  fetching,
  fetched,
  fetchError
} from '../../../redux/actions'
import { getSteamEndpoint, useFetch } from '../../../api'

function Hobbies () {
  const dispatch = useDispatch()
  // const cache = useSelector((state) => state.cacheData)
  // // Update the appbar's title
  useEffect(() => {
    dispatch(setCurrentPage('Hobbies'))
    dispatch(setSelectedButton('Hobbies'))
  })

  const url = getSteamEndpoint('ISteamUser', 'GetPlayerSummaries', '0002')
  const { loading, data, error } = useFetch(url)
  if (loading) return <div>loading...</div>
  if (error) return <div>{error}</div>
  return <div>data</div>
}
export default Hobbies
