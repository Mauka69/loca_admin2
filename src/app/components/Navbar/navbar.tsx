import { Route, Routes } from 'react-router-dom';
import CreateEventPage from '../../../pages/CreateEventPage';

export default function Router() {
	return (
		<Routes>
			<Route element={<CreateEventPage />} index />
		</Routes>
	);
}
