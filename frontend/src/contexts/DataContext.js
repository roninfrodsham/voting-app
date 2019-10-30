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
  const [roomCode, setRoomCode] = useState(() => {
    const localData = localStorage.getItem('ROOM_CODE');
    return localData ? JSON.parse(localData) : null;
  });
  const [userVotes, setUserVotes] = useState(() => {
    const localData = localStorage.getItem('USER_VOTES');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('CATEGORY', JSON.stringify(selectedCategory));
    localStorage.setItem('CATEGORY_NAME', JSON.stringify(selectedCategoryName));
    localStorage.setItem('SUBMISSION', JSON.stringify(selectedSubmission));
    localStorage.setItem('USER_ID', JSON.stringify(userId));
    localStorage.setItem('ROOM_CODE', JSON.stringify(roomCode));
    localStorage.setItem('USER_VOTES', JSON.stringify(userVotes));
  }, [
    selectedCategory,
    selectedCategoryName,
    selectedSubmission,
    roomCode,
    userId,
    userVotes,
  ]);

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

  const updateRoomCode = code => {
    console.log('code: ', code);
    setRoomCode(code);
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
        updateRoomCode,
        roomCode,
        userId,
        userVotes,
        setUserVotes,
      }}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
