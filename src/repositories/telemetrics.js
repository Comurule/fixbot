const { TelemetricModel } = require('../models')

const toDomain = (dbRecord) => ({
	id: dbRecord._id,
	engineTemp: { degree: dbRecord.engine_temp, unit: 'Centigrade' },
	carId: dbRecord.car_id,
	carSpeed: { degree: dbRecord.car_speed, unit: 'KM/hr' },
	carLongitude: dbRecord.car_longitude,
	carLatitude: dbRecord.car_latitude,
	fuelConsumptionRate: {
		degree: dbRecord.fuel_consumption_rate,
		unit: 'KM/100L',
	},
})
const toDatabase = (rawdata) => ({
	engine_temp: rawdata.engineTemp,
	car_id: rawdata.carId,
	car_speed: rawdata.carSpeed,
	car_longitude: rawdata.carLongitude,
	car_latitude: rawdata.carLatitude,
	fuel_consumption_rate: rawdata.fuelConsumptionRate,
})

exports.createTelemetrics = async (data) => {
	const cleanData = toDatabase(data)
	const savedRecord = await TelemetricModel.create(cleanData)

	return toDomain(savedRecord)
}

exports.updateTelemetricsById = async (id, data) => {
	const cleanData = toDatabase(data)
	const updatedRecord = await TelemetricModel.findByIdAndUpdate(
		id,
		cleanData,
		{
			new: true,
		}
	)
	if (!updatedRecord) return null

	return toDomain(updatedRecord)
}

exports.deleteTelemetricsById = async (id) => {
	const response = await TelemetricModel.findByIdAndDelete(id)

	return !!response
}

exports.getTelemetricsById = async (id) => {
	const savedRecord = await TelemetricModel.findById(id)
	if (!savedRecord) return null

	return toDomain(savedRecord)
}

exports.getAllTelemetrics = async () => {
	const savedRecords = await TelemetricModel.find()

	return savedRecords.map(toDomain)
}
