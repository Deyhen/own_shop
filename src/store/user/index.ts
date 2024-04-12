import { combineReducers } from '@reduxjs/toolkit';
import user from './user';
import cart from './cart';


export default combineReducers({
  user,
  cart
});
