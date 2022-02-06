const {Router}=require('express');
const tableController = require('../controllers/tableController');
const router = Router();

router.route('/tables').get(tableController.getAll);

router.route('/tables/:tableid').get(tableController.getByID);

router.route('/tables').post(tableController.create);

router.route('/tables/:tableid').delete(tableController.deleteByID);

router.route('/tables/:tableid').put(tableController.updatetableByID);

module.exports = router;