import { combineReducers } from 'redux';

import todos from './todos';
import todoView from './todoView';
import nextTaskId from './nextTaskId';

export default combineReducers({
    todos,
    todoView,
    nextTaskId
});