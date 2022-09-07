const pool = require('../db');

const getAllTasks = async (req, res) => {
	res.json('retrieving a list of task');
};

const getTask = (req, res) => {
	res.send('retrieving a single task');
};

const createTask = async (req, res) => {
	const {title, description} = req.body;

	const result = await pool.query(
		'INSERT INTO task (title, description) VALUES ($1, $2)',
		[title, description],
	);

	console.log(result);

	res.send('creating a task');
};

const deleteTask = (req, res) => {
	res.send('deleting a task');
};

const updateTask = (req, res) => {
	res.send('updating a task');
};

module.exports = {
	getAllTasks,
	getTask,
	createTask,
	deleteTask,
	updateTask,
};
