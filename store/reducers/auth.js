const initialState = {
  accessToken: null,
  userID: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        accessToken: action.accessToken,
        userID: action.userID,
      };
    default:
      return state;
  }
};

export default authReducer;
