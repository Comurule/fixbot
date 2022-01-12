const { telemetricService } = require('../services')
const apiResponse = require('../utils/apiResponse')

exports.create = async (req, res, next) => {
	try {
		const result = await telemetricService.createTelemetrics(req.body)

		return apiResponse({
			res,
			status: true,
			message: 'Telemetric data saved successfully.',
			data: result,
		})
	} catch (error) {
		return next(error)
	}
}

exports.update = async (req, res, next) => {
	const { id } = req.params
	const data = req.body
	try {
		const result = await telemetricService.updateTelemetricsById(id, data)

		return apiResponse({
			res,
			status: true,
			message: 'Telemetric document updated successfully.',
			data: result,
		})
	} catch (error) {
		return next(error)
	}
}

exports.deleteById = async (req, res, next) => {
	try {
		await telemetricService.deleteTelemetricsById(req.params.id)

		return apiResponse({
			res,
			status: true,
			message: 'Telemetric document deleted successfully.',
		})
	} catch (error) {
		return next(error)
	}
}

exports.getById = async (req, res, next) => {
	try {
		const result = await telemetricService.getTelemetricsById(req.params.id)

		return apiResponse({
			res,
			status: true,
			message: 'Telemetric document details.',
			data: result,
		})
	} catch (error) {
		return next(error)
	}
}

exports.getAll = async (req, res, next) => {
	try {
		const result = await telemetricService.getAllTelemetrics()

		return apiResponse({
			res,
			status: true,
			message: 'Telemetric documents list.',
			data: result,
		})
	} catch (error) {
		return next(error)
	}
}
