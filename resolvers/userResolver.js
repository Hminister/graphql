import { nanoid } from 'nanoid'

export default {
  Query: {
    user: () => ({
      id: nanoid(),
      name: 'kjl',
      age: 28,
    }),
  },
}
