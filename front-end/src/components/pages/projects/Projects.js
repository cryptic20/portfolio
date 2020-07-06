import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ProjectTemplate from './ProjectTemplate'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}))

const test = [
  {
    id: 'MDEwOlJlcG9zaXRvcnkyNzI0MjQ5MDU=',
    name: 'system-design-primer',
    description:
      'Learn how to design large-scale systems. Prep for the system design interview.  Includes Anki flashcards.',
    url: 'https://github.com/cryptic20/system-design-primer',
    createdAt: '2020-06-15T11:50:46Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2020-06-15T11:50:48Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkyMTA4Nzk1MTU=',
    name: 'Unifiedtransform',
    description: 'A school management Software',
    url: 'https://github.com/cryptic20/Unifiedtransform',
    createdAt: '2019-09-25T15:30:35Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2019-09-25T15:30:36Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxODY1ODgxMTA=',
    name: 'NinjaRun',
    description: null,
    url: 'https://github.com/cryptic20/NinjaRun',
    createdAt: '2019-05-14T09:18:35Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2019-05-14T09:19:14Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxODE3ODYwNDM=',
    name: 'PokemonRetro',
    description: 'Multiplayer Pokemon game built on JAVA. ',
    url: 'https://github.com/cryptic20/PokemonRetro',
    createdAt: '2019-04-17T00:11:45Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2019-12-09T03:23:32Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxNzkyMTI5OTc=',
    name: 'ProtoChat',
    description: 'Simple chat app built on java using sockets and IP Datagram.',
    url: 'https://github.com/cryptic20/ProtoChat',
    createdAt: '2019-04-03T04:54:20Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2019-05-02T02:58:45Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxNzg1MDg4NDE=',
    name: 'Builders-eCommerce',
    description:
      'A modular, high performance e-commerce storefront built with Python, GraphQL, Django, and ReactJS.',
    url: 'https://github.com/cryptic20/Builders-eCommerce',
    createdAt: '2019-03-30T03:56:44Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2019-05-08T11:45:27Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxNzYyNzc5OTk=',
    name: 'SoloGame',
    description: 'Solo game project for CMP428',
    url: 'https://github.com/cryptic20/SoloGame',
    createdAt: '2019-03-18T12:18:55Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2019-03-21T11:39:53Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxNzU5MjUzOTg=',
    name: 'Best-websites-a-programmer-should-visit',
    description: ':link: Some useful websites for programmers.',
    url: 'https://github.com/cryptic20/Best-websites-a-programmer-should-visit',
    createdAt: '2019-03-16T04:20:36Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2019-03-16T04:20:38Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxNzIzNzYyMjE=',
    name: 'pivottable',
    description:
      "Open-source Javascript Pivot Table (aka Pivot Grid, Pivot Chart, Cross-Tab) implementation with drag'n'drop.",
    url: 'https://github.com/cryptic20/pivottable',
    createdAt: '2019-02-24T18:48:05Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2019-02-24T18:48:07Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxNjEyNTczOTE=',
    name: 'Music-Composition',
    description: 'Using RNN to generate a classical piece',
    url: 'https://github.com/cryptic20/Music-Composition',
    createdAt: '2018-12-11T01:06:24Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2018-12-17T02:01:48Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxNTcxNTAyMDE=',
    name: 'PythonExercises',
    description: 'Code exercises in Python.',
    url: 'https://github.com/cryptic20/PythonExercises',
    createdAt: '2018-11-12T03:15:59Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2018-12-11T02:21:45Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxNTY3OTU5NzM=',
    name: 'django',
    description: 'The Web framework for perfectionists with deadlines.',
    url: 'https://github.com/cryptic20/django',
    createdAt: '2018-11-09T02:03:59Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2018-11-09T02:04:17Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxNTM4ODE5NTU=',
    name: 'Artistic-Style-Transfer',
    description: 'Research class: CMP-485-04',
    url: 'https://github.com/cryptic20/Artistic-Style-Transfer',
    createdAt: '2018-10-20T07:43:00Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2018-10-21T10:04:27Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxNDg5NjY0MzI=',
    name: 'CMP-485-04',
    description: 'Independent Study on Neural Networks and Deep Learning. ',
    url: 'https://github.com/cryptic20/CMP-485-04',
    createdAt: '2018-09-16T05:29:17Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2018-09-18T08:23:07Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxNDg1MTI3MDM=',
    name: 'django-import-export',
    description:
      'Django application and library for importing and exporting data with admin integration.',
    url: 'https://github.com/cryptic20/django-import-export',
    createdAt: '2018-09-12T16:53:53Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2018-09-12T16:53:56Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxMzMwODMzNjM=',
    name: 'Discordify',
    description: null,
    url: 'https://github.com/cryptic20/Discordify',
    createdAt: '2018-05-11T20:00:13Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2018-05-11T20:23:49Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxMzEzNTc2Njg=',
    name: 'NYCProject',
    description:
      'Using NYC OPEN DATA and IBM WATSON to create a seamless search for job centers, shelters, financial assistance, and etc.',
    url: 'https://github.com/katherinesdd53/NYCProject',
    createdAt: '2018-04-28T00:53:14Z',
    openGraphImageUrl:
      'https://avatars2.githubusercontent.com/u/13991156?s=400&v=4',
    updatedAt: '2018-04-29T18:37:59Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxMjk0NTY3NzM=',
    name: 'react-with-electron',
    description: null,
    url: 'https://github.com/cryptic20/react-with-electron',
    createdAt: '2018-04-13T21:48:06Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2018-09-09T22:58:02Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxMjY0MDgyMzY=',
    name: 'react-web',
    description: 'Building a personal web on React framework',
    url: 'https://github.com/cryptic20/react-web',
    createdAt: '2018-03-22T23:50:52Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2018-04-09T00:16:57Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxMjQxNjQ5MDY=',
    name: 'ExpressionEvaluator',
    description:
      'Button, Inc. Coding Challenge. Implementing an Expression Evaluator',
    url: 'https://github.com/cryptic20/ExpressionEvaluator',
    createdAt: '2018-03-07T02:08:38Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2018-03-20T15:57:47Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxMTA4NzY2OTU=',
    name: 'Cracking-Coding-Interview',
    description: null,
    url: 'https://github.com/cryptic20/Cracking-Coding-Interview',
    createdAt: '2017-11-15T19:25:17Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2017-11-15T19:25:19Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnkxMTAzMTAyNjg=',
    name: 'hackathon2017',
    description: 'NSBE-SHEP Hackathon 2017',
    url: 'https://github.com/fgarcia-student/hackathon2017',
    createdAt: '2017-11-11T02:03:20Z',
    openGraphImageUrl:
      'https://avatars1.githubusercontent.com/u/4333577?s=400&v=4',
    updatedAt: '2017-11-11T10:57:25Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnk5NDgxNDg0Ng==',
    name: 'api-heroku',
    description: 'blog api for heroku',
    url: 'https://github.com/cryptic20/api-heroku',
    createdAt: '2017-06-19T19:47:42Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2017-06-20T00:17:37Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnk5NDQ0Njc2Nw==',
    name: 'jukebox-API',
    description: 'jukebox with api calls',
    url: 'https://github.com/cryptic20/jukebox-API',
    createdAt: '2017-06-15T14:19:45Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2017-06-15T14:29:48Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnk5NDM2NTU0Mg==',
    name: 'API',
    description: 'api for blog',
    url: 'https://github.com/cryptic20/API',
    createdAt: '2017-06-14T19:23:22Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2017-06-14T19:24:48Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnk5NDIzMDQwNA==',
    name: 'portfolio-blog',
    description: 'postgres, node, bulletin board',
    url: 'https://github.com/cryptic20/portfolio-blog',
    createdAt: '2017-06-13T15:51:14Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2018-04-09T00:08:56Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnk5MzA4Nzg4MA==',
    name: 'Day-3-Collab',
    description: 'Collaborative Work',
    url: 'https://github.com/shajeecuevas/Day-3-Collab',
    createdAt: '2017-06-01T18:33:01Z',
    openGraphImageUrl:
      'https://avatars2.githubusercontent.com/u/24379992?s=400&v=4',
    updatedAt: '2017-06-02T16:48:11Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnk4NzgzMjA5Ng==',
    name: 'WebDevelopment',
    description: 'demo website',
    url: 'https://github.com/cryptic20/WebDevelopment',
    createdAt: '2017-04-10T16:15:41Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2017-04-10T20:04:56Z'
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnk4NzcyNjY2Mg==',
    name: 'DiscordBotCabal2',
    description: 'example',
    url: 'https://github.com/cryptic20/DiscordBotCabal2',
    createdAt: '2017-04-09T17:35:49Z',
    openGraphImageUrl:
      'https://avatars3.githubusercontent.com/u/18493884?s=400&v=4',
    updatedAt: '2017-04-09T22:07:43Z'
  }
]

export default function Projects () {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4"> Below are my projects on GitHub</Typography>
      </Grid>
      {test.map((t, index) => (
        <Grid key={index} item xs={4}>
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
