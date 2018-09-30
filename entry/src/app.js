import React from 'react';
import {hot} from 'react-hot-loader';
import Apple from './test.js';
const App = () => {
	return (<div>
		<header>i am header</header>
		<h1>Hello React! <Apple /></h1>
	</div>);
};


export default hot(module)(App);