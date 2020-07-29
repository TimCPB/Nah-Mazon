  
const router = require('express').Router();
let Business = require('../models/business.model');

router.route('/').get((req, res) => {
  Business.find()
    .then(businesses => res.json(businesses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description
  const postcode = req.body.postcode

  const newBusiness = new Business({name, description, postcode});

  newBusiness.save()
    .then(() => res.json("Your business has been added to Nah'Mazon!"))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:name').get((req, res) => {
  Business.findById(req.params.name)
    .then(business => res.json(business))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Business.findByIdAndDelete(req.params.id)
    .then(() => res.json('Your business has been deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Business.findById(req.params.id)
    .then(business => {
      business.name = req.body.username;
      business.description = req.body.description;
      business.postcode = Number(req.body.duration);

      business.save()
        .then(() => res.json('Your business has been updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;