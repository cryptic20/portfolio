import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useQuery } from '@apollo/react-hooks'
import { useDispatch } from 'react-redux'
import { setCurrentPage, setSelectedButton } from '../../../redux/actions'
import { GET_REPOSITORY_PAGINATION } from '../../../api'
import GitRepositories from './GitRepositories'

function Projects () {
  const dispatch = useDispatch()

  useEffect(() => {
    // Update the appbar's title
    dispatch(setCurrentPage('Projects'))
    dispatch(setSelectedButton('Projects'))
  })

  const { data, loading, error, fetchMore } = useQuery(
    GET_REPOSITORY_PAGINATION,
    {
      notifyOnNetworkStatusChange: true
    }
  )

  if (error) return `Error! ${error.message}`

  if (data) {
    const { viewer } = data

    return (
      <Grid container spacing={3} justify="space-evenly">
        <Grid item xs={12}>
          <Typography variant="h4"> Below are my projects on GitHub</Typography>
        </Grid>
        <GitRepositories
          loading={loading}
          entries={viewer}
          onLoadMore={() =>
            fetchMore({
              query: GET_REPOSITORY_PAGINATION,
              variables: {
                cursor: viewer.repositories.pageInfo.endCursor
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const nextRes = fetchMoreResult.viewer.repositories.nodes
                const page = fetchMoreResult.viewer.repositories.pageInfo
                return page.endCursor
                  ? {
                    viewer: {
                      repositories: {
                        nodes: [
                          ...previousResult.viewer.repositories.nodes,
                          ...nextRes
                        ],
                        pageInfo: {
                          ...page
                        },
                        __typename:
                            previousResult.viewer.repositories.__typename
                      },
                      __typename: previousResult.viewer.__typename
                    }
                  }
                  : previousResult
              }
            })
          }
        />
      </Grid>
    )
  }
  return null
}

export default Projects
