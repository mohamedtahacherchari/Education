// reducers/themeReducer.js
const initialState = {
    darkMode: false,
  };
  
  const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "toggle":
        return {
          ...state,
          darkMode: !state.darkMode,
        };
      default:
        return state;
    }
  };
  
  export default themeReducer;
  