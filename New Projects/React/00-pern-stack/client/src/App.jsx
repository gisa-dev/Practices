import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Container from '@mui/material/Container';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Container>
				<Routes>
					<Route path="/" element={<TaskList />} />
					<Route path="/tasks/new" element={<TaskForm />} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
};

export default App;
