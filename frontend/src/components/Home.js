import React, {useState, useContext} from 'react';
import {Redirect} from 'react-router-dom';
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
    margin: 0px auto 30px auto;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #1d1d1b;
    color: #1d1d1b;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
    outline: 0;
  }

  input::placeholder {
    color: #1d1d1b;
  }

  button {
    font-family: Montserrat, sans-serif;
    outline: 0;
  }
`;

function Home() {
  const {updateRoomCode} = useContext(DataContext);
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');
  const [redirectFlag, setRedirectFlag] = useState(false);

  const updateRoom = event => {
    setRoom(event.target.value.toUpperCase());
  };
  const updateName = event => {
    setName(event.target.value.toUpperCase());
  };

  const handleSubmit = () => {
    updateRoomCode(room);
    setRedirectFlag(true);
  };

  return (
    <HomeContainer>
      {redirectFlag && <Redirect to="/categories" />}
      <div>
        <h1>{process.env.REACT_APP_NAME}</h1>
        <input
          placeholder="Enter room code..."
          value={room}
          onChange={updateRoom}
        />
        <input
          placeholder="Enter your name..."
          value={name}
          onChange={updateName}
        />

        <button onClick={handleSubmit} className="btn">
          Submit
        </button>
      </div>
    </HomeContainer>
  );
}

export default Home;
