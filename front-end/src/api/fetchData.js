import { useEffect, useRef, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetching, fetched, fetchError } from '../redux/actions'

export const useFetch = (url) => {
  const cache = useRef({})
  const dispatch = useDispatch()
  const state = useSelector((state) => state.fetchedData)
  useEffect(() => {
    let cancelRequest = false
    if (!url) return

    const fetchData = async () => {
      dispatch(fetching())
      if (cache.current[url]) {
        const data = cache.current[url]
        dispatch(fetched(data))
      } else {
        try {
          const response = await fetch(url)
          const data = await response.json()
          cache.current[url] = data
          if (cancelRequest) return
          dispatch(fetched(data))
        } catch (error) {
          if (cancelRequest) return
          dispatch(fetchError(error))
        }
      }
    }

    fetchData()

    return function cleanup () {
      cancelRequest = true
    }
  }, [url])

  return state
}
