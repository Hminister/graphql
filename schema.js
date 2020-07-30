import {
  makeExecutableSchema,
  mergeTypeDefs,
  loadFilesSync,
} from 'graphql-tools'

//自动查找graphql文件
const typeDefs = mergeTypeDefs(loadFilesSync('./typeDefs'), { all: true })

const resolvers = mergeTypeDefs(loadFilesSync('./resolvers'))

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
