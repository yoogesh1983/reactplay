const initialState = {
  login: false,
  firstName: "Sushila",
  lastName: "Sapkota",
};

const userReducer = (state, action) => {
  console.log(state.user);
  switch (action.type) {
    case "LOGIN-UPDATE":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default initialState;
export { userReducer };
