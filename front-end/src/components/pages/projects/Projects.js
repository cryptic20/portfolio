import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useQuery } from '@apollo/react-hooks'
import { useDispatch } from 'react-redux'
import { setCurrentPage, setSelectedButton } from '../../../redux/actions'
import { GET_REPOSITORY, TEST_MORE } from '../../../api'
import GitRepositories from './GitRepositories'

function Projects () {
  const dispatch = useDispatch()

  useEffect(() => {
    // Update the appbar's title
    dispatch(setCurrentPage('Projects'))
    dispatch(setSelectedButton('Projects'))
  })

  const { data, loading, error, fetchMore } = useQuery(TEST_MORE, {
    notifyOnNetworkStatusChange: true
  })

  if (loading) {
    return <CircularProgress color="inherit" />
  }

  if (error) return <div>`Error! ${error}`</div>
  const repo = data.viewer.repositories
  return (
    <Grid container spacing={3} justify="space-evenly">
      <Grid item xs={12}>
        <Typography variant="h4"> Below are my projects on GitHub</Typography>
      </Grid>
      <GitRepositories
        loading={loading}
        entries={repo}
        onLoadMore={() =>
          fetchMore({
            query: TEST_MORE,
            variables: {
              cursor: repo.pageInfo.endCursor
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              const prevResult = previousResult
              const nextRes = fetchMoreResult.viewer.repositories
              const pageInfo = fetchMoreResult.viewer.repositories.pageInfo
              console.log(nextRes)
              return prevResult.viewer.repositories.pageInfo.hasNextPage
                ? fetchMoreResult
                : prevResult
            }
          })
        }
      />
    </Grid>
  )
}

export default Projects
