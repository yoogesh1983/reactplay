const initialState = {
  primary: "green",
};

const themeReducer = (state, action) => {
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
