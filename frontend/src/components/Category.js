import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {DataContext} from '../contexts/DataContext';
import {APIDataContext} from '../contexts/APIDataContext';

const SubmissionContainer = styled.div`
  margin-top: 20px;
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

  strong {
    color: #dc002e;
  }

  a {
    display: inline-block;
    margin: 20px 0 0 0;
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
      <h3>Award for {selectedCategoryName}</h3>
      <h4>Select a submission:</h4>
      {apiData.data.submissions &&
        apiData.data.submissions.map(submission => (
          <SubmissionContainer key={submission.id}>
            <h4>{submission.Title}</h4>
            <h5>
              Agency - <strong>{submission.Agency}</strong>
            </h5>
            <Link
              className="btn"
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
