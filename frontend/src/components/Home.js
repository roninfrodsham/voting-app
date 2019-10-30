import React, {useState} from 'react';
import uuid from 'uuid';
import styled from 'styled-components';

import {DataContext} from '../contexts/DataContext';

const HomeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    display: block;
    padding: 0 60px 40px 60px;
  }

  input {
    display: block;
    margin: 0px auto;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #1d1d1b;
    color: #1d1d1b;
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
    outline: 0;
  }

  input::placeholder {
    color: #1d1d1b;
  }

  button {
    outline: 0;
  }
`;

function Home() {
  const [inputText, setInputText] = useState('');

  const updateInputText = event => {
    setInputText(event.target.value);
	};
	
	const updateRoomCode = () => {
		
	};

  return (
    <HomeContainer>
      <div>
        <h1>{process.env.REACT_APP_NAME}</h1>
        <input
          placeholder="Enter code..."
          value={inputText}
          onChange={updateInputText}
        />
        <button onClick={updateRoomCode}>Submit</button>
      </div>
    </HomeContainer>
  );
}

export default Home;
