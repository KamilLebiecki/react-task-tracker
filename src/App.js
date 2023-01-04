import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
	const [tasks, setTasks] = useState([
		{ id: 1, text: 'Walk the dog', day: 'Jan 5th at 11:00am', reminder: true },
		{ id: 2, text: 'Lunch', day: 'Jan 5th at 12:00pm', reminder: false },
		{ id: 3, text: 'Make laundry', day: 'Jan 5th at 12:30pm', reminder: true },
		{ id: 5, text: 'Workout', day: 'Jan 5th at 08:00am', reminder: false },
		{ id: 6, text: 'Jogging', day: 'Jan 5th at 5:00pm', reminder: false },
	]);

	return (
		<div className="container">
			<Header />
			<Tasks tasks={tasks} />
		</div>
	);
};

export default App;
