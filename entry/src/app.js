import React from 'react';
import {hot} from 'react-hot-loader';
import Apple from './test.js';
import PineApple from './pineapple';
const App = () => {
	return (<div>
		<header>i am header</header>
		<h1>Hello React! <Apple /><PineApple /></h1>
	</div>);
};


export default hot(module)(App);