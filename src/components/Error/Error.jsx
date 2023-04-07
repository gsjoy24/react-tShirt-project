import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div>
			<Header></Header>
			<div className='mt-40 text-center text-5xl font-extrabold'>
				<h1 className='text-red-600 mb-6 '>404</h1>
				<h1>This Page is not available!</h1>
				<button className='text-xl p-4 bg-sky-800 rounded-lg mt-5 text-white'>
					<Link to='/'>Back to Home</Link>
				</button>
			</div>
		</div>
	);
};

export default Error;
