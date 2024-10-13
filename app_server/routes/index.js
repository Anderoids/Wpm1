var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
var ctrlMain = require('../controllers/main');

// Location routes
router.get('/', ctrlLocations.homelist);
router.get('/locations', ctrlLocations.locationInfo);
router.get('/location1', ctrlLocations.locationInfo1);
router.get('/location2', ctrlLocations.locationInfo2);
router.get('/location/review/new', ctrlLocations.addReview);

// Other routes
router.get('/about', ctrlOthers.about);
router.get('/signin', ctrlMain.signin);
router.get('/review', ctrlMain.review);

// Registration route
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

module.exports = router;
