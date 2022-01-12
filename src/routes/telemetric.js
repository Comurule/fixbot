const { Router } = require('express')
const { telemetricController } = require('../controllers')
const telemetricValidator = require('../middlewares/Validator/telemetrics')

const router = Router()

router
	.route('/')
	.get(telemetricController.getAll)
	.post(telemetricValidator('create'), telemetricController.create)

router
	.route('/:id')
	.all(telemetricValidator('checkId'))
	.get(telemetricController.getById)
	.delete(telemetricController.deleteById)
	.put(telemetricValidator('update'), telemetricController.update)

module.exports = router
