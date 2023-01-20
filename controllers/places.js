const router = require('express').Router()
const db = require('../models')
const places = require('../models/places.js')


// GET /places
router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })


})// router.get('/', (req, res) => {
//     db.Place.find()
//     .then((places) => {
//       res.render('places/index', { places })
//     })
//     .catch(err => {
//       console.log(err) 
//       res.render('error404')
//     })
// })

router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }

    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
        if (err && err.name == 'ValidationError') {
    let message = 'Validation Error: '
    for (var field in err.errors) {
        message += `${field} was ${err.errors[field].value}. `
        message += `${err.errors[field].message}`
    }
    console.log('Validation error message', message)
    res.render('places/new', { message })
}
        }
        else {
            res.render('error404')
        }
    })
})

// router.post('/', (req, res) => {
//   console.log(req.body)
//   if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city) {
//     req.body.city = 'Anytown'
//   }
//   if (!req.body.state) {
//     req.body.state = 'USA'
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })


router.get('/new', (req, res) => {
  res.render('places/new')
})

//show
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})



// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('places/show', { place: places[id], id })
//   }
// })

//Put Path
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


// router.put('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       // Dig into req.body and make sure data is valid
//       if (!req.body.pic) {
//           // Default image if one is not provided
//           req.body.pic = 'http://placekitten.com/400/400'
//       }
//       if (!req.body.city) {
//           req.body.city = 'Anytown'
//       }
//       if (!req.body.state) {
//           req.body.state = 'USA'
//       }

//       // Save the new data into places[id]
//       places[id] = req.body
//       res.redirect(`/places/${id}`)
//   }
// })

//delete path
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})



// router.delete('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     places.splice(id, 1)
//     res.redirect('/places')
//   }
// })



//edit one
router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render("./places/edit", {place})
  })
  .catch(err => {
      console.log("err", err)
      res.render("error404")
  })
  
})
// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//         console.log("places.js, Line 154")
//   }
//   else if (!places[id]) {
//       res.render('error404')
//         console.log("places.js, Line 158")
//   }
//   else {
//     res.render('places/edit', { place: places[id], id })
//   }
// })

//comment
router.post('/:id/comment', (req, res) => {
  if (req.body.rant) {
    req.body.rant = true;
} else {
    req.body.rant = false;
}
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
        console.log(err)
          res.render('error404')
      })
  })
  .catch(err => {
    console.log(err)
      res.render('error404')
  })
})
//   router.post('/:id/comment', (req, res) => {
//     console.log(req.body)
//     db.Place.findById(req.params.id)
//     .then(place => {
//         db.Comment.create(req.body)
//         .then(comment => {
//             place.comments.push(comment.id)
//             place.save()
//             .then(() => {
//                 res.redirect(`/places/${req.params.id}`)
//             })
//         })
//         .catch(err => {
//             res.render('error404')
//         })
//     })
//     .catch(err => {
//         res.render('error404')
//     })
// })


router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router




// const router = require('express').Router()
// const places = require('../models/places.js')

// router.get('/new', (req, res) => {
//   res.render('places/new')
// })

// router.post('/', (req, res) => {
//   // console.log(req.body)
//   if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city) {
//     req.body.city = 'Anytown'
//   }
//   if (!req.body.state) {
//     req.body.state = 'USA'
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })

// // GET /places
// router.get('/', (req, res) => {
// // let places = [{
// //   name: 'H-Thai-ML',
// //   city: 'Seattle',
// //   state: 'WA',
// //   cuisines: 'Thai, Pan-Asian',
// //   pic: '/images/ThaiFood.jpg'
// // }, {
// //   name: 'Coding Cat Cafe',
// //   city: 'Phoenix',
// //   state: 'AZ',
// //   cuisines: 'Coffee, Bakery',
// //   pic: 'images/CoffeeCat.jpg'
// // }]

// res.render('places/index', { places })
// // res.render('places/index', { places })

// })


// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('places/show', { place: places[id], id })
//   }
// })

// router.delete('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     places.splice(id, 1)
//     res.redirect('/places')
//   }
// })
// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     res.render('places/edit', { place: places[id], id })
//   }
// })

// router.put('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       // Dig into req.body and make sure data is valid
//       if (!req.body.pic) {
//           // Default image if one is not provided
//           req.body.pic = 'http://placekitten.com/400/400'
//       }
//       if (!req.body.city) {
//           req.body.city = 'Anytown'
//       }
//       if (!req.body.state) {
//           req.body.state = 'USA'
//       }

//       // Save the new data into places[id]
//       places[id] = req.body
//       res.redirect(`/places/${id}`)
//   }
// })





// module.exports = router
