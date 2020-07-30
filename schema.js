import { makeExecutableSchema } from 'graphql-tools'
import { nanoid } from 'nanoid'

const typeDefs = `
  type User {
    id: ID!,
    name: String,
    age: Int
  }

  type Query {
    user: User
  }
`
const resolvers = {
  Query: {
    user: () => ({
      id: nanoid(),
      name: 'sjkdasfh',
      age: 25,
    }),
  },
}

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
