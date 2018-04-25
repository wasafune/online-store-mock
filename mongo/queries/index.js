const { Item } = require('../')

const queryAll = () => Item.find().lean()

const querySearched = (searchStr, categories) => {
  // search is only item name
  // receive array
  // db.items.find( { $text: { $search: 'apple' }, categories: { $all: ["fruit", "food"] } } )
  return Item
    .find({ $text: { $search: searchStr } })
    .all({ categories })
    .lean()
}

const queryFiltered = categories => Item.all({ categories })

module.exports = {
  queryAll,
  querySearched,
  queryFiltered,
}
