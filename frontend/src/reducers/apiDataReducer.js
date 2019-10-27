export const apiDataReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      console.log('INITIALISING');
      return {
        ...state,
        isLoading: true,
        url: action.url,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
