const {Router}=require('express');
const snackController = require('../controllers/snackController');
const router = Router();

router.route('/snacks').get(snackController.getAll);

router.route('/snacks/:id').get(snackController.getByID);

router.route('/snacks').post(snackController.create);

router.route('/snacks/:id').delete(snackController.deleteByID);

router.route('/snacks/:id').put(snackController.updatesnackByID);

module.exports = router;