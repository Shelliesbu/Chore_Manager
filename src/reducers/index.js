import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ChoreFormReducer from './ChoreFormReducer';
import ChoreReducer from './ChoreReducer';

export default combineReducers({
    auth: AuthReducer,
    choreForm: ChoreFormReducer,
    chores: ChoreReducer
});