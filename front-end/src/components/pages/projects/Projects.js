import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ProjectTemplate from './ProjectTemplate'
import { useQuery } from '@apollo/react-hooks'
import CircularProgress from '@material-ui/core/CircularProgress'
import { GET_REPOSITORY } from '../../../api'

function Projects () {
  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORY, {
    pollInterval: 10000
  })
  if (loading) {
    return (
      <div>
        <CircularProgress color="inherit" />
      </div>
    )
  }
  if (error) return <div>`Error! ${error}`</div>
  if (data) {
    return (
      <Grid container spacing={3} justify="space-evenly">
        <Grid item xs={12}>
          <Typography variant="h4"> Below are my projects on GitHub</Typography>
        </Grid>
        {data.viewer.repositories.nodes.map((t, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} align="center">
            <ProjectTemplate
              key={index}
              image={t.openGraphImageUrl}
              name={t.name}
              createDate={t.createdAt}
              description={t.description}
              url={t.url}
            />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default Projects
