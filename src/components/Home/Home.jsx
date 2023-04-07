import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
	const tShirts = useLoaderData();
	console.log(tShirts);
	return (
		<div>
			{tShirts.map((tShirt) => (
				<h1>{tShirt.name}</h1>
			))}
		</div>
	);
};

export default Home;
