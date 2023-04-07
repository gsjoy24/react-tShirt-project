import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Error from './components/Error/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,
		errorElement: <Error></Error>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
				loader: () => fetch('data.json')
			},
			{
				path: '/about',
				element: <About></About>
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
