import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Votes from './Votes';
import {DataContext} from '../contexts/DataContext';
import {APIDataContext} from '../contexts/APIDataContext';

const VoteContainer = styled.div`
  h3 {
    margin-bottom: 10px;
  }
  h4 {
    margin-top: 0;
  }
  a {
    display: block;
		border: 1px solid #1d1d1b;
		background-color: #1d1d1b; 
    margin-bottom: 20px;
    padding: 10px 25px;
		font-size: 13px;
		letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    color: #1d1d1b;
  }
`;

function Submission() {
  const {selectedSubmission, selectedCategory} = useContext(DataContext);
  const {apiData, dispatch} = useContext(APIDataContext);
  const [showVotes, setShowVotes] = useState(true);

  useEffect(() => {
    dispatch({
      type: 'FETCH_INIT',
      url: `${process.env.REACT_APP_API}/submissions/${selectedSubmission}`,
    });
  }, [dispatch, selectedSubmission]);

  const handleVote = score => {
    setShowVotes(false);
    const postData = {
      Score: score,
      category: selectedCategory,
      submissions: selectedSubmission,
    };
    postResults(postData);
  };

  const postResults = async data => {
    let res = await axios.post(`${process.env.REACT_APP_API}/results`, data);
  };

  return (
    <VoteContainer>
      <h3>{apiData.data.Title}</h3>
      <h4>Agency: {apiData.data.Agency}</h4>
      {showVotes && <Votes handleVote={handleVote} />}
      {showVotes === false && (
        <div>
          <h5>Your voted has been submitted...</h5>
          <Link to="/category">Vote again in this category</Link>
          <Link to="/">Choose a new category</Link>
        </div>
      )}
    </VoteContainer>
  );
}

export default Submission;
