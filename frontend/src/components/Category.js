import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
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

const CompleteContainer = styled.div`
	
`;

function Category() {
  const {
    selectedCategory,
    selectedCategoryName,
    updateSubmission,
    userVotes,
  } = useContext(DataContext);

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_API}/categories/${selectedCategory}`,
      );
      filterData(result.data.submissions);
    };
    fetchData();
  }, [selectedCategory]);

  const filterData = categoryData => {
    console.log(categoryData);
    let localData = [];

    categoryData.forEach(data => {
      console.log('data.id: ', data.id);
      console.log('userVotes: ', userVotes);
      let obj = userVotes.find(obj => obj.submission == data.id);
      if (obj == undefined) {
        localData.push(data);
      }
    });
    setApiData(localData);
    console.log('localData: ', localData);
  };

  return (
    <>
      <h3>Award for {selectedCategoryName}</h3>
      <h4>Select a submission:</h4>
      {apiData.length > 0 &&
        apiData.map(submission => (
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
					{apiData.length == 0 && <div>Votes cast</div>}
    </>
  );
}

export default Category;
