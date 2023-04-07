import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='flex justify-between items-center bg-sky-800 text-white px-12 py-4'>
			<h1 className='text-2xl font-bold '>
				<Link to='/'>T-Shirts</Link>
			</h1>
			<nav className='flex gap-4'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
				<Link to='/login'>Log In</Link>
			</nav>
		</div>
	);
};

export default Header;
