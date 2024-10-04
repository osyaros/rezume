import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@/styles/global.scss';
import '@/styles/variables.scss';
import { MainPage } from '@/pages/MainPage/MainPage';
import ThemeProvider from './providers/ThemeProvider';
import CategoryPage from '@/pages/CategoryPage/CategoryPage';
import DetailPage from '@/pages/DetailPage/DetailPage';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />
	},
	{
		path: '/:category',
		element: <CategoryPage />
	},
	{
		path: '/:category/:experience',
		element: <DetailPage />
	}
]);
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<RouterProvider router={routes} />
		</ThemeProvider>
	</StrictMode>
);
