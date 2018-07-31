//an action is a plain javaScript object that always has a type property that will be a string
import firebase from 'firebase';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED

} from './types';

export const emailChanged = (text) => {
  return {
    type: 'EMAIL_CHANGED', //this forms a link between the action and the reducer
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

  //this call makes a request to the firebase servers
export const loginUser = ({email,password}) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email,password)//add a promise - then, when you get back the user from tha database, console.log user
.then(user => {
  dispatch({type: 'LOGIN_USER_SUCCESS', payload: user});
    });
  };
};
//redux thunk allows us to bend the rules of action creators with dispatch
