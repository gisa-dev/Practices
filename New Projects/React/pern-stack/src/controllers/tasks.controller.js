const getAllTasks = async (req, res) => {
	res.json('retrieving a list of task');
};

const getTask = (req, res) => {
	res.send('retrieving a single task');
};

const createTask = (req, res) => {
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
