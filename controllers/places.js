const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
  let places = []
  res.render('places/index')
})

module.exports = router
