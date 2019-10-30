import React, {createContext, useState, useEffect} from 'react';

export const DataContext = createContext();

function DataContextProvider(props) {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const localData = localStorage.getItem('CATEGORY');
    return localData ? JSON.parse(localData) : null;
  });
  const [selectedCategoryName, setSelectedCategoryName] = useState(() => {
    const localData = localStorage.getItem('CATEGORY_NAME');
    return localData ? JSON.parse(localData) : null;
  });
  const [selectedSubmission, setSelectedSubmission] = useState(() => {
    const localData = localStorage.getItem('SUBMISSION');
    return localData ? JSON.parse(localData) : null;
  });

  const [userId, setUserId] = useState(() => {
    const localData = localStorage.getItem('USER_ID');
    return localData ? JSON.parse(localData) : null;
  });

  useEffect(() => {
    localStorage.setItem('CATEGORY', JSON.stringify(selectedCategory));
    localStorage.setItem('CATEGORY_NAME', JSON.stringify(selectedCategoryName));
    localStorage.setItem('SUBMISSION', JSON.stringify(selectedSubmission));
  }, [selectedCategory, selectedCategoryName, selectedSubmission]);

  const updateCategory = (category, categoryName) => {
    setSelectedCategory(category);
    setSelectedCategoryName(categoryName);
  };

  const updateSubmission = submission => {
    setSelectedSubmission(submission);
  };

  const updateUserId = id => {
    setUserId(id);
  };

  return (
    <DataContext.Provider
      value={{
        updateUserId,
        selectedCategory,
        selectedCategoryName,
        updateCategory,
        selectedSubmission,
        updateSubmission,
      }}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
