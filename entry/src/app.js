import React from 'react';
import {hot} from 'react-hot-loader';
import Apple from './test.js';
import PineApple from './pineapple';
import styled from "styled-components";

const Buttons = styled.button`
  font-size:16px;
  color: green;
`;

const App = () => {
	return (<div>
		<header>i am header</header>
		<div>Hello React.......! <Apple /><PineApple /></div>
		<Buttons>I AM A BUTTON</Buttons>
	</div>);
};


export default hot(module)(App);