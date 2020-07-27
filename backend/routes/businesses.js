  
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

module.exports = router;