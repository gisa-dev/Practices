const {Pool} = require('pg');

const pool = new Pool({
	user: 'postgres',
	password: 'Guaro9596',
	host: 'localhost',
	port: 5432,
	database: 'tasksdb',
});

module.exports = pool;
