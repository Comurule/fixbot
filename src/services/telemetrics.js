const { telemetricRepository } = require('../repositories')
const CustomError = require('../utils/customError')

exports.createTelemetrics = async (data) =>
	telemetricRepository.createTelemetrics(data)

exports.updateTelemetricsById = async (telemetricId, data) => {
	const updatedRecord = await telemetricRepository.updateTelemetricsById(
		telemetricId,
		data
	)
	if (!updatedRecord)
		throw new CustomError('Telemetric document not found', 404)

	return updatedRecord
}

exports.deleteTelemetricsById = async (telemetricId) => {
	const response = await telemetricRepository.deleteTelemetricsById(
		telemetricId
	)
	if (!response) throw new CustomError('Telemetric document not found', 404)

	return true
}

exports.getTelemetricsById = async (telemetricId) => {
	const savedRecord = await telemetricRepository.getTelemetricsById(
		telemetricId
	)
	if (!savedRecord)
		throw new CustomError('Telemetric document not found', 404)

	return savedRecord
}

exports.getAllTelemetrics = async () => {
	const allRecords = await telemetricRepository.getAllTelemetrics()

	return {
		count: allRecords.length,
		rows: allRecords,
	}
}
