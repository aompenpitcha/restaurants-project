const {Router}=require('express');
const drinkController = require('../controllers/drinkController');
const router = Router();

router.route('/drinks').get(drinkController.getAll);

router.route('/drinks/:id').get(drinkController.getByID);

router.route('/drinks').post(drinkController.create);

router.route('/drinks/:id').delete(drinkController.deleteByID);

router.route('/drinks/:id').put(drinkController.updateDrinkByID);

module.exports = router;