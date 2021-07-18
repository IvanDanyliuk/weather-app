import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { fetchData } from './axios/fetch-data';
import Layout from './components/layout/Layout';
import Main from './components/pages/Main';

function App() {
	return (
		<div className="App">
			<Layout>
				<Main />
			</Layout>
		</div>
	);
}

export default App;
