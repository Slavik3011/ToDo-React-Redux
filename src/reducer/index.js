import { combineReducers } from 'redux';

import todos from './todos';
import todoView from './todoView';

export default combineReducers({
    todos,
    todoView
});