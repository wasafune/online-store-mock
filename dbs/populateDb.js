const mongoose = require('mongoose')

const { Item } = require('../dbs')

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

const createItem = (itemname, categories, variants) => (
  { itemname, categories, variants }
)
const tempDocs = [
  createItem(
    'apple',
    ['fruit', 'food'],
    [{ type: 'Red', price: 50 }, { type: 'Green', price: 65 }],
  ),
  createItem(
    'orange',
    ['fruit', 'food'],
    [{ type: 'Regular', price: 70 }, { type: 'Tangerine', price: 100 }],
  ),
  createItem(
    'brocolli',
    ['vegetable', 'food'],
    [{ type: 'Regular', price: 70 }, { type: 'Cluster', price: 200 }],
  ),
  createItem(
    'cucumber',
    ['vegetable', 'food'],
    [{ type: 'Persian', price: 60 }, { type: 'Chester', price: 110 }],
  ),
  createItem(
    'icecream',
    ['dessert', 'food'],
    [{ type: 'Chocolate', price: 150 }, { type: 'Vanilla', price: 125 }],
  ),
  createItem(
    'candy',
    ['dessert', 'food'],
    [{ type: 'Lollipop', price: 25 }, { type: 'Chewys', price: 50 }],
  ),
]

populateDb(tempDocs)
