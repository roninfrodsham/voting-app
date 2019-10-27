import React, {createContext, useReducer, useEffect} from 'react';
import axios from 'axios';
import {apiDataReducer} from '../reducers/apiDataReducer';

export const APIDataContext = createContext();

function APIDataContextProvider(props) {
  const [apiData, dispatch] = useReducer(apiDataReducer, {
    isLoading: false,
    isError: false,
    url: null,
    data: [],
  });

  useEffect(() => {
    if (apiData.isLoading) {
      const fetchData = async () => {
        try {
          const result = await axios(apiData.url);
          dispatch({type: 'FETCH_SUCCESS', payload: result.data});
        } catch (error) {
          dispatch({type: 'FETCH_FAILURE'});
        }
      };
      fetchData();
    }
  }, [apiData]);

  return (
    <APIDataContext.Provider value={{apiData, dispatch}}>
      {props.children}
    </APIDataContext.Provider>
  );
}

export default APIDataContextProvider;
