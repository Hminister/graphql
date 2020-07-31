const db = {
  users: [],
}

export default {
  getData: () => db,
  setData: (key, value) => {
    db[key] = value
    return db
  },
}
