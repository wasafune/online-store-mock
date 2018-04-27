const { Router } = require('express')
const stripe = require('stripe')(process.env.STRIPE_API)

const { createUser, loginUser } = require('../dbs/queries')

const router = new Router()

router.post('/signup', async (req, res) => {
  try {
    const newUser = await createUser(req.body)
    await stripe.customers.create({
      id: newUser.id,
      email: newUser.email,
      shipping: {
        name: newUser.fullname,
        address: newUser.shipping.toObject(),
      },
    })
    res.send('User successfully created!')
  } catch (err) {
    console.error(err)
    res.status(err.statusCode).send()
  }
})

router.post('/', async (req, res) => {
  try {
    const userObj = await loginUser(req.body)
    res.send(userObj)
  } catch (err) {
    console.error(err)
    res.status(err.statusCode).send()
  }
})


module.exports = router
