import React, {createContext, useState} from 'react';

export const DataContext = createContext();

function DataContextProvider(props) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const updateCategory = category => {
    setSelectedCategory(category);
	};

	const updateSubmission = (submission) => {
		setSelectedSubmission(submission);
	};

  return (
    <DataContext.Provider value={{selectedCategory, updateCategory, selectedSubmission, updateSubmission}}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
