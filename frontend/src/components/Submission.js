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
    margin-bottom: 20px;
  }
  h5 {
    margin-bottom: 20px;
  }
  a {
    display: block;
  }
`;

function Submission() {
  const {
    selectedSubmission,
    selectedCategory,
    userId,
    userVotes,
    setUserVotes,
  } = useContext(DataContext);
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
      user: userId,
    };
    postResults(postData);
    setUserVotes([
      ...userVotes,
      {category: selectedCategory, submission: selectedSubmission, score: score},
    ]);
  };

  const postResults = async data => {
    let res = await axios.post(`${process.env.REACT_APP_API}/results`, data);
  };

  return (
    <VoteContainer>
      <h4>
        {apiData.data.Title} - {apiData.data.Agency}
      </h4>
      {showVotes && <Votes handleVote={handleVote} />}
      {showVotes === false && (
        <div>
          <h5>Your voted has been submitted...</h5>
          <Link to="/category" className="btn">
            Vote again in this category
          </Link>
          <Link to="/categories" className="btn">
            Choose a new category
          </Link>
        </div>
      )}
    </VoteContainer>
  );
}

export default Submission;
