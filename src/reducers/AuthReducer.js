//a function that has two arguments and export by default
//we always have a switch statement
//we can never return un-defined from a reducer
import { EMAIL_CHANGED } from '../actions/types';
const INITIAL_STATE = { email: ' '}; //the value of the input of what the user is actually typing


export default (state =  INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED: //console.log (action!!!)
return {...state, email: action.payload}; //this says: make a new object, take alll the properties off my existing state object,
//throw them into that object, then define the property of email, give it a value of action.payload  and toss it on top of whatever properties are on that state object
//which will change it to the new property - thus, we made a new object ...state makes the new object otherwise it won't change

  default:
    return state;
  }
};
