import { useMemo } from 'react';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './app/components/Router';
import store from './app/store/store';
import './styles/style.scss';
import { Layout } from './ui';
import { ColorModeContext, useMode } from './ui/Theme/theme';
import CreateEventPage from './pages/CreateEventPage';
import Appbar from './ui/Appbar';

export default function App() {
	const [theme, { toggleColorMode }] = useMode();

	const colorModeValue = useMemo(() => ({ toggleColorMode }), [toggleColorMode]);

	return (
		<ColorModeContext.Provider value={colorModeValue}>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<BrowserRouter>
						<Layout>
							<main className="content">
								<Appbar />
								<Routes>
									<Route path="/" element={<CreateEventPage />} />
									<Route path="/router" element={<Router />} />
								</Routes>
							</main>
						</Layout>
					</BrowserRouter>
				</Provider>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
