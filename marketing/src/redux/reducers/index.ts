import { combineReducers } from 'redux';
import { blogCreateReducer, blogFetchReducer } from './blog';

const rootReducer = combineReducers({
    blogCreate: blogCreateReducer,
    blogs: blogFetchReducer
});

export default rootReducer;
    