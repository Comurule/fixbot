// Load all environment variables
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
	PORT: process.env.PORT || 8080,
	DATABASE_URL: process.env.DATABASE_URL,
	isProduction: process.env.NODE_ENV === 'production',
}
