import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Middleware, combineReducers } from "redux";
import goods from "./mainPage/goods";

export const reducer = combineReducers({
    goods
})

const store = configureStore({
    reducer,
    // middleware: getDefaultMiddleware =>
    // getDefaultMiddleware().prepend(customMiddleware)
  });

//   const customMiddleware: Middleware<{ state: RootState }, RootState> =
//   store => next => action => {
//     next(action);
//     return { state: store.getState() };
//   };

type RootState = ReturnType<typeof reducer>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector, useAppDispatch };
export type { RootState, AppDispatch };
export default store;