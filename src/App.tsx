import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './app/components/Router';
import { darkTheme } from './app/config/theme';
import store from './app/store/store';
import './styles/style.scss';
import { Layout } from './ui';
import CreateBusinessPage from './pages/CreateCountryPage';
import CreateEventPage from './pages/CreateEventPage';
import CreateNewTags from './pages/CreateNewTags';

export default function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={darkTheme}>
				<BrowserRouter>
					<Layout>
						<Router />
						<Routes>
							<Route path="/" element={<CreateEventPage />} />
							<Route path="/createCountry" element={<CreateBusinessPage />} />
							<Route path="/createNewTags" element={<CreateNewTags />} />
						</Routes>
					</Layout>
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	);
}
