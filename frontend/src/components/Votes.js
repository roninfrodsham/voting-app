import React from 'react';
import styled from 'styled-components';

import vote7 from '../assets/mould_breaking.svg';
import vote6 from '../assets/inspires.svg';
import vote5 from '../assets/meaningful.svg';
import vote4 from '../assets/wallpaper.svg';
import vote3 from '../assets/no_purpose.svg';
import vote2 from '../assets/unsightful.svg';
import vote1 from '../assets/damaging.svg';

const Vote = styled.div`
  display: flex;
  align-items: center;
	margin-bottom: 15px;
	padding: 10px;
	font-weight: bold;
	background-color: #f2f2f2;
	overflow: hidden;
	
  img {
    width: 60px;
    margin: 0 20px 0 0;
  }
  span {
    margin-right: 10px;
  }
`;

function Votes(props) {
  return (
    <>
      <Vote onClick={() => props.handleVote(7)}>
        <img src={vote7} alt="Score 7" />
        <p>
          <span>7</span> Mould Breaking
        </p>
      </Vote>
      <Vote onClick={() => props.handleVote(6)}>
        <img src={vote6} alt="Score 6" />
        <p>
          <span>6</span> Inspires behavioural Change{' '}
        </p>
      </Vote>
      <Vote onClick={() => props.handleVote(5)}>
        <img src={vote5} alt="Score 5" />
        <p>
          <span>5</span> Meaningful connection
        </p>
      </Vote>
      <Vote onClick={() => props.handleVote(4)}>
        <img src={vote4} alt="Score 4" />
        <p>
          <span>4</span> Wallpaper
        </p>
      </Vote>
      <Vote onClick={() => props.handleVote(3)}>
        <img src={vote3} alt="Score 3" />
        <p>
          <span>3</span> No purpose
        </p>
      </Vote>
      <Vote onClick={() => props.handleVote(2)}>
        <img src={vote2} alt="Score 2" />
        <p>
          <span>2</span> Unsightful
        </p>
      </Vote>
      <Vote onClick={() => props.handleVote(1)}>
        <img src={vote1} alt="Score 1" />
        <p>
          <span>1</span> Damaging
        </p>
      </Vote>
    </>
  );
}

export default Votes;
