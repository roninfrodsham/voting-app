import React, {useContext, useEffect} from 'react';
import {DataContext} from '../contexts/DataContext';
import {APIDataContext} from '../contexts/APIDataContext';

function Submission() {
  const {selectedSubmission} = useContext(DataContext);
  const {apiData, dispatch} = useContext(APIDataContext);

  useEffect(() => {
    dispatch({
      type: 'FETCH_INIT',
      url: `${process.env.REACT_APP_API}/submissions/${selectedSubmission}`,
    });
  }, [dispatch, selectedSubmission]);

  return (
    <>
      <h1>{apiData.data.Title}</h1>
      <h2>{apiData.data.Agency}</h2>
    </>
  );
}

export default Submission;
