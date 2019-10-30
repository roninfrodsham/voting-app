import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {DataContext} from '../contexts/DataContext';
import {APIDataContext} from '../contexts/APIDataContext';

const SubmissionContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f2f2f2;

  h4 {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h5 {
    margin-top: 10px;
  }

  a {
    display: inline-block;
    background-color: #1d1d1b;
    padding: 10px 25px;
    font-size: 13px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    letter-spacing: 1px;
  }
`;

function Category() {
  const {selectedCategory, selectedCategoryName, updateSubmission} = useContext(
    DataContext,
  );
				
	const {apiData, dispatch} = useContext(APIDataContext);
				
	useEffect(() => {
    dispatch({
      type: 'FETCH_INIT',
      url: `${process.env.REACT_APP_API}/categories/${selectedCategory}`,
    });
  }, [dispatch, selectedCategory]);

  return (
    <>
      <h3>{selectedCategoryName}</h3>
      <h4>Select a submission:</h4>
      {apiData.data.submissions &&
        apiData.data.submissions.map(submission => (
          <SubmissionContainer key={submission.id}>
            <h4>{submission.Title}</h4>
            <h5>Agency - {submission.Agency}</h5>
            <Link
              to="/submission"
              onClick={() => updateSubmission(submission.id)}>
              Vote
            </Link>
          </SubmissionContainer>
        ))}
    </>
  );
}

export default Category;
