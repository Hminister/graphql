import { nanoid } from 'nanoid'
import UserModel from '../model/UserModel'

export default {
  Query: {
    userList: () => UserModel.getAllUser(),
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = new UserModel(args.name, args.age).create()
      return user
    },
  },
}
