const {Router}=require('express');
const foodController = require('../controllers/foodController');
const router = Router();

router.route('/foods').get(foodController.getAll);

router.route('/foods/:id').get(foodController.getByID);

router.route('/foods').post(foodController.create);

router.route('/foods/:id').delete(foodController.deleteByID);

router.route('/foods/:id').put(foodController.updatefoodByID);

module.exports = router;