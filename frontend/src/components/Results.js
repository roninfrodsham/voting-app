import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {DataContext} from '../contexts/DataContext';
import {APIDataContext} from '../contexts/APIDataContext';

const CategoryBtn = styled.div`
  a {
    display: block;
    border: 1px solid #1d1d1b;
    margin-bottom: 20px;
    padding: 15px 10px;
    font-size: 13px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    color: #1d1d1b;
  }
  a:active {
    background-color: #1d1d1b;
    color: #fff;
  }
`;

function Results() {
  const {updateCategory} = useContext(DataContext);
  const {apiData, dispatch} = useContext(APIDataContext);

  useEffect(() => {
    dispatch({
      type: 'FETCH_INIT',
      url: `${process.env.REACT_APP_API}/categories`,
    });
  }, [dispatch]);

  return (
    <>
      <h3>Results</h3>
      <h4>Choose a category</h4>
      {apiData.data.length &&
        apiData.data.map(category => (
          <CategoryBtn key={category.id}>
            <Link onClick={() => updateCategory(category.id, category.Title)} to="/result">
              {category.Title}
            </Link>
          </CategoryBtn>
        ))}
    </>
  );
}

export default Results;
