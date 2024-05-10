import { combineReducers } from 'redux';

import menu from './menu';
import modalUser from './modal/modalUser';
import camera from './camera/index';

const reducers = combineReducers({ menu, modalUser, camera });

export default reducers;
