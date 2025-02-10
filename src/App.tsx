import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Auth />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
