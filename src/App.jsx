import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
      <Header></Header>
      <div className='mx-4 mt-5'>
        <Outlet></Outlet>
      </div>
		</div>
	);
}

export default App;
