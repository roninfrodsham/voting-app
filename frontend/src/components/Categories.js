import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {DataContext} from '../contexts/DataContext';
import {APIDataContext} from '../contexts/APIDataContext';

const CategoryBtn = styled.div`
  a {
    display: block;
		border: 1px solid #1d1d1b;
		background-color: #1d1d1b;
    margin-bottom: 20px;
    padding: 15px 10px;
		font-size: 13px;
		letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
		color: #fff;
		box-shadow: 4px 4px rgba(0,0,0,0.3);
	}
	a:active {
		background-color: #1d1d1b;
		color: #fff;
	}
`;

function Categories() {
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
      <h3>Select a category:</h3>
      {apiData.data.length &&
        apiData.data.map(category => (
          <CategoryBtn key={category.id}>
            <Link onClick={() => updateCategory(category.id, category.Title)} to="/category">
              {category.Title}
            </Link>
          </CategoryBtn>
        ))}
    </>
  );
}

export default Categories;
