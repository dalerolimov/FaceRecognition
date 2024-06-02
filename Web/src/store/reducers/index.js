import { combineReducers } from 'redux';

import menu from './menu';
import modalUser from './modal/modalUser';

const reducers = combineReducers({ menu, modalUser });

export default reducers;
