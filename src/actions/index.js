//an action is a plain javaScript object that always has a type property that will be a string
import { EMAIL_CHANGED } from './types';

export const emailChanged = (text) => {
  return {
    type: 'EMAIL_CHANGED', //this forms a link between the action and the reducer
    payload: text
  };
};
