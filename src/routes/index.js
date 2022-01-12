const { Router } = require('express')
const telemetricRoutes = require('./telemetric')

const router = Router()

router.use('/telemetrics', telemetricRoutes)

router.get('/', (req, res) => res.sendStatus(200))
router.all('*', (req, res) => res.sendStatus(404))

module.exports = router
