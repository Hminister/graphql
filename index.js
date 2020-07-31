import Koa from 'koa'
import Router from 'koa-router'
import graphlHTTP from 'koa-graphql'
// import { buildSchema } from 'graphql'
// import { nanoid } from 'nanoid'
import schema from './schema'
const app = new Koa()
const router = new Router()
// const schema = buildSchema(`
//   type User {
//     id: ID!,
//     name: String,
//     age: Int
//   }
//   type Query {
//     user: User,
//     hello: String,
//   }
// `)
// const rootValue = {
//   hello: () => `hello World`,
//   user: () => ({
//     id: nanoid(),
//     name: 'jkljf',
//     age: 18,
//   }),
// }

//中间键
router.all(
  '/graphql',
  graphlHTTP({
    schema, //包含type和控制器
    graphiql: true, //开发面板，测试
  })
)

/* 传统的restful写法
  router.get('/', async (ctx) => {
    ctx.body = `<h1>hello word</h1>`
  })
*/

app.use(router.routes(), router.allowedMethods())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server start at ${PORT}`))
