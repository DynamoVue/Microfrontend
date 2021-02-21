import { Reducer } from "redux";

import { 
    BlogCreateActionTypes, 
    BlogCreateConstants,
    BlogFetchActionTypes,
    blogFetchConstants
} from '../action-types';
import { BlogCreateState, BlogFetchState } from '../types/blog';

const initialState: BlogCreateState = {
    loading: false,
    error: ''
}

export const blogCreateReducer: Reducer<BlogCreateState, BlogCreateActionTypes> = (state = initialState, action: BlogCreateActionTypes): BlogCreateState => {
    switch (action.type) {
        case BlogCreateConstants.BLOG_CREATE_REQUEST: {
            return {
                loading: true
            }
        }

        case BlogCreateConstants.BLOG_CREATE_SUCCESS: {
            return {
                loading: false,
            }
        }

        case BlogCreateConstants.BLOG_CREATE_ERROR: {
            return {
                loading: false,
                error: action.payload
            }
        }

        default: {
            return state;
        }
    }
} 

export const blogFetchReducer: Reducer<BlogFetchState, BlogFetchActionTypes> = (state: BlogFetchState = { data: [], loading: false, error: undefined }, action: BlogFetchActionTypes): BlogFetchState => {
    switch (action.type) {
        case blogFetchConstants.BLOG_FETCH_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }

        case blogFetchConstants.BLOG_FETCH_SUCCESS: {
            return {
                loading: false,
                data: action.payload,
                error: undefined
            }
        }

        case blogFetchConstants.BLOG_FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        default: {
            return state;
        }
    }
}