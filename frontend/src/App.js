import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Main from './Main';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

	* {
		box-sizing: border-box;
	}

	body {
		font-family: Roboto, sans-serif;
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
