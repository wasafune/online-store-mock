const { Router } = require('express')

const {
  queryAll,
  querySearched,
  queryFiltered,
  queryItem,
} = require('../dbs/queries')

const router = new Router()

router.get('/all', async (req, res) => {
  try {
    const queryRes = await queryAll()
    res.send(queryRes)
  } catch (err) {
    console.error(err)
    res.status(err.statusCode || 400).send({ error: 'Something went wrong :(' })
  }
})

router.post('/searched', async (req, res) => {
  try {
    const { searchStr, categories } = req.body
    const queryRes = await querySearched(searchStr, categories)
    res.send(queryRes)
  } catch (err) {
    console.error(err)
    res.status(err.statusCode || 400).send({ error: 'Something went wrong :(' })
  }
})

router.post('/filtered', async (req, res) => {
  try {
    const { categories } = req.body
    const queryRes = await queryFiltered(categories)
    res.send(queryRes)
  } catch (err) {
    console.error(err)
    res.status(err.statusCode || 400).send({ error: 'Something went wrong :(' })
  }
})

router.post('/item', async (req, res) => {
  try {
    const { itemname } = req.body
    const queryRes = await queryItem(itemname)
    res.send(queryRes)
  } catch (err) {
    console.error(err)
    res.status(err.statusCode || 400).send({ error: 'Something went wrong :(' })
  }
})


module.exports = router
