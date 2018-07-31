import { combineReducers} from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
//the property of state I'm producing goes here
//the auth piece of state is produced by the Auth reducer
auth: AuthReducer
});
