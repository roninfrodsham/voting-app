import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {DataContext} from '../contexts/DataContext';
import {APIDataContext} from '../contexts/APIDataContext';

const CategoryBtn = styled.div`
	margin-top: 20px;
	
  a {
		display: block;
		background-color: #dc002e;
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
      <h3>Awards Results</h3>
      <h4>Choose a category:</h4>
					{apiData.data.length > 0 &&
        apiData.data.map(category => (
          <CategoryBtn key={category.id}>
            <Link onClick={() => updateCategory(category.id, category.Title)} to="/result" className="btn">
              {category.Title}
            </Link>
          </CategoryBtn>
        ))}
    </>
  );
}

export default Results;
