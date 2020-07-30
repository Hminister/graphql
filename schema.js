import {
  makeExecutableSchema,
  mergeTypeDefs,
  loadFilesSync,
  mergeResolvers,
} from 'graphql-tools'
import { nanoid } from 'nanoid'
//自动查找graphql文件
const typeDefs = mergeTypeDefs(loadFilesSync('./typeDefs'), { all: true })

const resolvers = mergeResolvers(loadFilesSync('./resolvers'))
// const resolvers = {
//   Query: {
//     user: () => ({
//       id: nanoid(),
//       name: 'sjkdasfh',
//       age: 25,
//     }),
//   },
// }

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
