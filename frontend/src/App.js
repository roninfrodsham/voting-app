import React, {useContext, useEffect} from 'react';
import {createGlobalStyle} from 'styled-components';
import Main from './Main';

import {DataContext} from './contexts/DataContext';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

	* {
		box-sizing: border-box;
	}

	body {
		font-family: Montserrat, sans-serif;
		margin: 0;
		padding: 0;
		color: #1d1d1b;
	}

	h1, h2, h3, h4, h5 {
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	h2 {
		margin-top: 10px;
	}

	h2 a {
		text-decoration: none;
		color: #1d1d1b;
	}

	h3 {
		margin-bottom: 10px;
	}

	.container {
		padding: 81px 20px 20px 20px;
	}

	.btn {
		background-color: #1d1d1b;
    margin-bottom: 20px;
    padding: 15px 20px;
		font-size: 13px;
		letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
		color: #fff;
		box-shadow: 4px 4px rgba(0,0,0,0.3);

	}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
