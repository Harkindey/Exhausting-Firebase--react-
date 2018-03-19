import { auth, googleAuthProvider } from '../firebase';


export const signIn = () => {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN' })
    setTimeout(() => {
      auth.signInWithPopup(googleAuthProvider)
    })
  }
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN' })
    auth.signOut();
  }
};

const signedIn = (user) => {
  return {
    type: 'SIGN_IN',
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: 'firstUser'
  }
}

const signedOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}


export const startListeningToAuthChanges = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signedIn(user));
        dispatch(addUser(user));
      } else {
        dispatch(signedOut())
      }
    })
  }
}