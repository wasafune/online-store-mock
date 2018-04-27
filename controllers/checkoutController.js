const { Router } = require('express')
const stripe = require('stripe')(process.env.STRIPE_API)

const router = new Router()

router.post('/', async (req, res) => {
  try {
    const stripeRes = await stripe.orders.create(req.body)
    res.send({
      id: stripeRes.id,
      amount: stripeRes.amount,
    })
  } catch (err) {
    console.error(err)
    res.status(err.statusCode).send()
  }
})

module.exports = router
