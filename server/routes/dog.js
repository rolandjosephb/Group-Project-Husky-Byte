let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Dog Model
let Dog = require('../models/dog');

let dogController = require('../controllers/dog');

/* GET Route for the Dog List page - READ Operation */
router.get('/', dogController.displayDogList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', dogController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', dogController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', dogController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', dogController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', dogController.performDelete);

module.exports = router;