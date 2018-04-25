const { Router } = require('express')
const mongoose = require('mongoose')

const {
  queryAll,
  querySearched,
  queryFiltered,
} = require('../mongo/queries')

const router = new Router()
const { DB_HOST } = process.env

router.get('/all', async (req, res) => {
  await mongoose.connect(DB_HOST)
  const db = mongoose.connection
  const queryRes = await queryAll()
  await db.close()
  res.send(queryRes)
})

router.post('/searched', async (req, res) => {
  const { searchStr, categories } = req.body
  await mongoose.connect(DB_HOST)
  const db = mongoose.connection
  const queryRes = await querySearched(searchStr, categories)
  await db.close()
  res.send(queryRes)
})

router.post('/filtered', async (req, res) => {
  const { categories } = req.body
  const queryRes = await queryFiltered(categories)
  res.send(queryRes)
})

module.exports = router
