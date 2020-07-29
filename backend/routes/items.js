const router = require('express').Router();
let Item = require('../models/item.model');

router.route('/').get((req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = Number(req.body.price);
  const businessName = req.body.businessName;
  const businessID = req.body.businessID;
  
  const newItem = new Item({ title, description, price, businessName, businessID });
  
  newItem.save()
  .then(() => res.json("Your item has been added to Nah'Mazon!"))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;