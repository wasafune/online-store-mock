const { Router } = require('express')

const {
  queryAll,
  querySearched,
  queryFiltered,
} = require('../mongo/queries')

const router = new Router()

router.use('/queryAll', async (req, res) => {
  const queryRes = await queryAll()
  res.send(queryRes)
})

router.use('/searchSearched', async (req, res) => {
  const { searchStr, categories } = req.body
  const queryRes = await querySearched(searchStr, categories)
  res.send(queryRes)
})

router.use('/searchFiltered', async (req, res) => {
  const { categories } = req.body
  const queryRes = await queryFiltered(categories)
  res.send(queryRes)
})

module.exports = router
