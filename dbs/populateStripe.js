const mongoose = require('mongoose')
const stripe = require('stripe')(process.env.STRIPE_API)

const { Item } = require('../dbs')

const { DB_HOST } = process.env

// resets and populates Item collection
// eslint-disable-next-line
const populateStripe = async () => {
  const promiseArrProducts = []
  const promiseArrSKU = []
  try {
    await mongoose.connect(DB_HOST)
    const db = mongoose.connection
    const resArr = await Item.find().lean()
    promiseArrProducts.push(db.close())
    resArr.forEach((item) => {
      const params = {
        id: item._id.toString(),
        name: item.itemname,
        type: 'good',
        attributes: ['type'],
      }
      promiseArrProducts.push(stripe.products.create(params))
    })
    await Promise.all(promiseArrProducts)
    resArr.forEach((item) => {
      const product = item._id.toString()
      Object.values(item.variants).forEach((variant) => {
        const params = {
          id: variant._id.toString(),
          currency: 'usd',
          inventory: { type: 'finite', quantity: 500 },
          price: variant.price,
          product,
          attributes: { type: variant.type },
        }
        promiseArrSKU.push(stripe.skus.create(params))
      })
    })
    await Promise.all(promiseArrSKU)
    console.log('Finished populateStripe.')
  } catch (err) {
    console.error(err)
  }
}

// eslint-disable-next-line
const deleteAllProducts = async () => {
  try {
    const products = await stripe.products.list({ limit: 100 })
    const promiseArr = []
    products.data.forEach((obj) => {
      promiseArr.push(stripe.products.del(obj.id))
    })
    await Promise.all(promiseArr)
    console.log('completed delete')
  } catch (err) {
    console.error(err)
  }
}

// deleteAllProducts()
populateStripe()
