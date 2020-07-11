import gql from 'graphql-tag'

export const TEST_MORE = gql`
  query getMoreRepositories($cursor: String) {
    viewer {
      repositories(
        first: 10
        after: $cursor
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
