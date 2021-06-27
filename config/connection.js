const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.rpgDB) {
	sequelize = new Sequelize(process.env.rpgDB);
} else {
	sequelize = new Sequelize(
		process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PASSWORD,
		{
			host: "localhost",
			dialect: "mysql",
			port: 3306
		}
	);
}
