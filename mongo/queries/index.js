const { Item } = require('../')


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

module.exports = {
  queryAll,
  querySearched,
  queryFiltered,
}
