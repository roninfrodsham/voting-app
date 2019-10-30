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

	h1, h2, h3, h4- {
		margin: 0;
	}

	h2 {
		margin-top: 10px;
	}

	h2 a {
		text-decoration: none;
		color: #1d1d1b;
	}

	.container {
		padding: 81px 20px 20px 20px;
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
