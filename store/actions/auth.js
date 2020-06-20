import { firebase } from '../../firebase/firebase';

const login = (values) => {
  const { email, password } = values;
  return async (dispatch) => {
    let accessToken, userID;
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      userID = res.user.uid;
      accessToken = await res.user.getIdToken();
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/invalid-email':
        case 'auth/user-disabled':
          throw new Error('Email is invalid');
          break;
        case 'auth/wrong-password':
          throw new Error('Wrong Password');
          break;
        default:
          throw new Error(error);
      }
    }
    dispatch({
      type: 'LOGIN',
      accessToken,
      userID,
    });
  };
};

const logout = () => {
  return async (dispatch) => {
    try {
      const res = await firebase.auth().signOut();
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export { login, logout };
