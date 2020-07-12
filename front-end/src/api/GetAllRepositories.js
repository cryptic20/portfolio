import gql from 'graphql-tag'

export const GET_REPOSITORY_PAGINATION = gql`
  query getMoreRepositories($cursor: String) {
    viewer {
      repositories(
        first: 9
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
          endCursor
          hasNextPage
        }
      }
    }
  }
`
