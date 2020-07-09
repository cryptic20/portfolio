import gql from 'graphql-tag'

export { client } from './client'
export const GET_REPOSITORY = gql`
  {
    viewer {
      repositories(
        affiliations: OWNER
        first: 100
        orderBy: { field: CREATED_AT, direction: DESC }
        privacy: PUBLIC
      ) {
        nodes {
          id
          name
          description
          url
          createdAt
          openGraphImageUrl
          updatedAt
        }
      }
    }
  }
`
