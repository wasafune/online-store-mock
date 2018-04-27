const { Item, User } = require('../')


const queryAll = () => Item.find().lean()

const querySearched = (searchStr, categories) => {
  if (categories) {
    return Item
      .find({ $text: { $search: searchStr } })
      .where('categories')
      .all(categories)
      .lean()
  }
  return Item
    .find({ $text: { $search: searchStr } })
    .lean()
}

const queryFiltered = categories => Item
  .find()
  .where('categories')
  .all(categories)
  .lean()

const queryItem = itemname => Item.findOne({ itemname }).lean()

const createUser = (userObj) => {
  const formattedUserObj = {
    email: userObj.email,
    password: userObj.password,
    fullname: userObj.fullname,
    shipping: {
      line1: userObj.line1,
      city: userObj.city,
      postal_code: userObj.postal_code,
    },
  }
  return User.create(formattedUserObj)
}

const loginUser = userObj => User.findOne(userObj).lean()

module.exports = {
  queryAll,
  querySearched,
  queryFiltered,
  queryItem,
  createUser,
  loginUser,
}
