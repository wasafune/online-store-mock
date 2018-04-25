const mongoose = require('mongoose')

const { Item } = require('../mongo')

const { DB_HOST } = process.env

// resets and populates Item collection
const populateDb = async (docsArr) => {
  try {
    await mongoose.connect(DB_HOST)
    const db = mongoose.connection
    const checkIfEmpty = await Item.collection.count()
    if (checkIfEmpty) {
      Item.collection.drop()
    }
    await Item.create(docsArr)
    await db.close()
    console.log('Finished populateDb.')
  } catch (err) {
    console.error(err)
  }
}

const createItem = (itemname, categories, price) => (
  { itemname, categories, price }
)
const tempDocs = [
  createItem('apple', ['fruit', 'food'], 0.5),
  createItem('orange', ['fruit', 'food'], 0.3),
  createItem('pear', ['fruit', 'food'], 0.4),
  createItem('watermelon', ['fruit', 'food'], 2),
  createItem('brocolli', ['vegetable', 'food'], 0.1),
  createItem('cucumber', ['vegetable', 'food'], 0.6),
  createItem('pepper', ['vegetable', 'food'], 0.1),
  createItem('onion', ['vegetable', 'food'], 0.3),
  createItem('brocolli', ['vegetable', 'food'], 0.5),
  createItem('icecream', ['dessert', 'food'], 3),
  createItem('chocolate', ['dessert', 'food'], 1),
  createItem('blue shirt', ['tops', 'clothing'], 7),
  createItem('white shirt', ['tops', 'clothing'], 5),
  createItem('jacket', ['tops', 'outerwear', 'clothing'], 50),
  createItem('coat', ['tops', 'outerwear', 'clothing'], 60),
  createItem('green shorts', ['shorts', 'pants', 'clothing'], 15),
  createItem('chinos', ['pants', 'clothing'], 20),
  createItem('old jeans', ['jeans', 'pants', 'clothing'], 18),
  createItem('cool jeans', ['jeans', 'pants', 'clothing'], 22),
]

populateDb(tempDocs)
