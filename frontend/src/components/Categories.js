import React, {useContext, useEffect} from 'react';
import {DataContext} from '../contexts/DataContext';
import {APIDataContext} from '../contexts/APIDataContext';
import {Link} from 'react-router-dom';

function Categories() {
  const {updateCategory} = useContext(DataContext);
  const {apiData, dispatch} = useContext(APIDataContext);
				
	useEffect(() => {
    dispatch({type: 'FETCH_INIT', url:  `${process.env.REACT_APP_API}/categories`});
  }, [dispatch]);

  return (
    <>
      {apiData.data.length &&
        apiData.data.map(category => (
          <Link
            key={category.id}
            onClick={() => updateCategory(category.id)}
            to="/category">
            {category.Title}
          </Link>
        ))}
    </>
  );
}

export default Categories;
