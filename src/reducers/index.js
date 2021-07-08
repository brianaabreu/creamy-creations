import { combineReducers } from 'redux';

import items from './order';
import message from './contact';

export default combineReducers({items}, {message});