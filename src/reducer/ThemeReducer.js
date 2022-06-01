const initialState = {
  primary: "green",
};

const themeReducer = (state=initialState, action) => {
  switch (action.type) {
    case "changeTheme":
      return {
        ...state,
        theme: action.newTheme,
      };
    default:
      return state;
  }
};

export default initialState;
export { themeReducer };
