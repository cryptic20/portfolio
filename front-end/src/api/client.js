import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
const GITHUB_ENDPOINT = 'https://api.github.com/graphql'

const link = new HttpLink({
  uri: GITHUB_ENDPOINT,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_KEY}`
  }
})

const cache = new InMemoryCache()
export const client = new ApolloClient({
  cache,
  link
})
