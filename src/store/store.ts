import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Middleware, combineReducers } from "redux";
import goods from "./goods";
import auth from "./authorization"
import users from "./users";
import customer from "./user";

export const reducer = combineReducers({
    goods,
    auth,
    users,
    customer,
})

const customMiddleware: Middleware<{ state: RootState }, RootState> =
store => next => action => {
next(action);
  return { state: store.getState() };
};


const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }).prepend(customMiddleware)
});


type RootState = ReturnType<typeof reducer>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector, useAppDispatch };
export type { RootState, AppDispatch };
export default store;