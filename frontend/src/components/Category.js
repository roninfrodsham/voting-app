import React, {useContext, useEffect} from 'react';
import {DataContext} from '../contexts/DataContext';
import {APIDataContext} from '../contexts/APIDataContext';
import {Link} from 'react-router-dom';

function Category() {
  const {selectedCategory} = useContext(DataContext);
  const {updateSubmission} = useContext(DataContext);
  const {apiData, dispatch} = useContext(APIDataContext);

  useEffect(() => {
    dispatch({
      type: 'FETCH_INIT',
      url: `${process.env.REACT_APP_API}/categories/${selectedCategory}`,
    });
  }, [dispatch, selectedCategory]);

  return (
    <>
      {apiData.data.submissions &&
        apiData.data.submissions.map(submission => (
          <Link
            key={submission.id}
            to="/submission"
            onClick={() => updateSubmission(submission.id)}>
            {submission.Title} - {submission.Agency}
          </Link>
        ))}
    </>
  );
}

export default Category;
