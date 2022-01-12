const mongoose = require('mongoose')

const telemetricSchema = new mongoose.Schema(
	{
		engine_temp: {
			type: Number,
			required: true,
		},
		car_id: {
			type: Number,
			required: true,
		},
		car_speed: {
			type: Number,
			required: true,
		},
		car_longitude: {
			type: Number,
			required: false,
		},
		car_latitude: {
			type: Number,
			required: false,
		},
		fuel_consumption_rate: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Telemetric', telemetricSchema)
