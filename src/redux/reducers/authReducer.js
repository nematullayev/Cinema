const initalState = {
  token: localStorage.getItem("token"),
};
const authReducer = (state = initalState, action) => {
  if (action.type === "login") {
    return {
      ...state,
      token: action.payload,
    };
  } else if (action.type === "logout") {
    return {
      ...state,
      token: null,
    };
  }
  return state;
};
export default authReducer;
