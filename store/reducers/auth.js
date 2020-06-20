const initialState = {
  accessToken: null,
  userID: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        accessToken: action.accessToken,
        userID: action.userID,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        accessToken: null,
        userID: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
