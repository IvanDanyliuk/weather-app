import React from 'react';
import './App.css';
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
