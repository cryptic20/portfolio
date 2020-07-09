import gql from 'graphql-tag'

export const GET_REPOSITORY = gql`
  {
    viewer {
      repositories(
        first: 10
        affiliations: OWNER
        orderBy: { field: CREATED_AT, direction: DESC }
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
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`
