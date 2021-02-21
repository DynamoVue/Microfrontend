import {
    createStore,
    applyMiddleware,
  } from "redux";
import ReduxThunk from "redux-thunk"; // no changes here 😀
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from './reducers';

const middlewares = [ReduxThunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];

const composedEnhancers = composeWithDevTools(...enhancers);

const blogs = localStorage.getItem("blogs") ? JSON.parse(localStorage.getItem("blogs") || "") : [];

const initialState = {
  blogs: {
    data: blogs,
    loading: false,
    error: undefined
  }
};

export const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);